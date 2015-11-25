var React=components.React;
var Uploader = components.Uploader;
var Demo = components.Demo;
var BSSPanel = components.BSSPanel;
var QueryPanel = components.QueryPanel;
var Input = components.Input;
var Select = components.Select;
var Modal = components.Modal;
var ToolBarPanel = components.ToolBarPanel;
var Button = components.Button;
var TablePanel = components.TablePanel;
var Grid = components.Grid;
var MessageBox = components.MessageBox;
var Textarea = components.Textarea;
var Ajax = components.Ajax;

var ThisPage = React.createClass({
	locals:{
		selectMetaDataType:[
			{text:"一",value:"1"},
			{text:"二",value:"2"},
		],
	},
	getInitialState:function(){
        return {
            reportMetadataName:"示例名称",
            pageSize:10,
            offset:1,
            totalRows:0,
            data: [],
            QresourceTableName: "123",
        };
    },
	render: function(){
		var tableProps={
          title:['选择','源表名称','编码','名称','查询类型','枚举项'],
          jsonKey:['reportMetadataId','resourceTableName','reportMetadataCode','reportMetadataName','defaultQueryTypeShow','selectParam'],
          data:this.state.data,
          doList:this.doList,
          pageSize:this.state.pageSize,
          offset:this.state.offset, //page:this.state.offset
          totalRows:this.state.totalRows,
          checkType:"checkbox",
          isDummy:[,true,,true,,],
      	};
      	var data = [];
      	for(var i=1;i<10;i++){
      		data.push({reportMetadataId:1,resourceTableName:<a data-tohash href="/123">123</a>});
      	}
		return(<div>
				<Button btnName="发送GET请求" doAction={this.sendGET} />
				<Button btnName="发送POST请求" doAction={this.sendPOST} />
				<BSSPanel pageTitle = "BSS框架-示例页面">
				  <QueryPanel submitAction={this.QueryPanelHandler} jsonFormat={true} okButtonName="查询">
	                  <Input disName=" 源表名称:" name="resourceTableName" value={this.state.QresourceTableName}/>
	                  <Input disName=" 编码:" name="reportMetadataCode" doChange={this.changeCode}/>
	                  <Input disName=" 名称:" name="reportMetadataNameQ"/>
	                  <Select disName=" 查询类型:" name="defaultQueryTypeQ" data={this.locals.selectMetaDataType} defaultValue="1"/>
	              </QueryPanel>	
	              <ToolBarPanel>
	                  <Button btnName="添加" doAction = {Modal.show.bind(null,"addTableModal")} />
	                  <Button btnName="修改" doAction = {this.toChangeMeta}/>
	              </ToolBarPanel>
	              <TablePanel id="table1" {...tableProps} id="testTable"/>
	              <TablePanel id="table2" {...tableProps} checkType="radio" data={data} totalRows={100}>
	              	<TablePanel id="table1" {...tableProps} />
	              </TablePanel>

	              <Uploader removeHandler={this.removeFile} handler="/api/resource/uploadFile"/>
				</BSSPanel>
				<Modal id="addTableModal" title="添加对话框" submitAction={this.AddHandler} jsonFormat={true} cssClass="modal-lg" dragable={1}>
                  <div className="content-left">
                      <Input disName="id: " name="reportMetadataId"/> <br/>
                      <Input disName="源表名称: " name="resourceTableName"/> <br/>
                      <Input disName="编码: " name="reportMetadataCode"/> <br/>
                      <Input disName="名称: " name="reportMetadataName"/> <br/>
                      <Input disName="查询类型: " name="defaultQueryTypeShow"/> <br/>
                      <Input disName="枚举项: " name="selectParam"/> <br/>
                      <Select />
                    <Textarea rows="4">
				        12234
				    </Textarea>
                  </div>
                </Modal> 
                <Modal id="changeTableModal" title="修改对话框" submitAction={this.ChangeHandler} jsonFormat={true} cssClass="modal-lg">
                  <div className="content-left">
                      <Input disName="id: " name="reportMetadataId" value={this.state.reportMetadataId}/> <br/>
                      <Input disName="源表名称: " name="resourceTableName" value={this.state.resourceTableName}/> <br/>
                      <Input disName="编码: " name="reportMetadataCode" value={this.state.reportMetadataCode}/> <br/>
                      <Input disName="名称: " name="reportMetadataName" value={this.state.reportMetadataName}/> <br/>
                      <Input disName="查询类型: " name="defaultQueryTypeShow" value={this.state.defaultQueryTypeShow}/> <br/>
                      <Input disName="枚举项: " name="selectParam" value={this.state.selectParam}/> <br/>
                  </div>
                </Modal> 
			</div>)
	},
	changeCode: function(obj){
		console.log(obj);
	},
	QueryPanelHandler: function(params){
		console.log(params);
		//根据params发送ajax请求, 然后设置表格数据this.state.data
	},
	toChangeMeta: function(){
		//修改操作, 根据grid选中的数据渲染changeTableModal, 并打开
		var changeMetaId=Grid.getCheckedValue("testTable");
		if(changeMetaId.length!=1){
	        MessageBox.show("错误","请选择1个对象进行修改");
	        return;
	    }
	    var data = this.state.data;
	    for(var i in data){
	    	if(data[i].reportMetadataId==changeMetaId){
	    		this.setState({
	    			reportMetadataId : data[i].reportMetadataId,
	    			resourceTableName : data[i].resourceTableName,
	    			reportMetadataCode : data[i].reportMetadataCode,
	    			reportMetadataName : data[i].reportMetadataName,
	    			defaultQueryTypeShow : data[i].defaultQueryTypeShow,
	    			selectParam : data[i].selectParam,
	    		})
	    	}
	    }
	    Modal.show("changeTableModal");
	},
	AddHandler: function(params){
		console.log(params);
		//根据params发送ajax请求
		//根据服务器返回结果重新设置表格, 也就是调用doList(this.state.offset,this.state.pageSize), 这里作为例子, 将新建的数据填入表格.
		var data = this.state.data;
		data.push(params);
		this.setState({data:data});
	},
	ChangeHandler: function(params){
		console.log(params);
		//根据params发送ajax请求
		//根据服务器返回结果重新设置表格, 也就是调用doList(this.state.offset,this.state.pageSize), 这里作为例子, 将新建的数据填入表格.
		var data = [params];
		this.setState({data:data});
	},
	doList:function(currentPage,pageSize){
		console.log(currentPage,pageSize)
		//根据currentPage,pageSize向服务器请求数据
		Grid.cleanData(); //配置新数据之前现清空一次
		this.setState({data:[],totalRows:0,offset:currentPage,pageSize:pageSize}); //根据服务器返回结果进行配置
	},
	removeFile:function(file){
		console.log("这里应该发送Ajax把文件删了"+file.name);
	},
	sendGET:function(){
		Ajax.get("/api/sendget/iamargument",function(r){
			console.log(r);
		});
	},
	sendPOST:function(){
		var params = {"postArg":"123"};
		Ajax.post(API.testPOST,params , function(r){
			console.log(r);
		})
	}
});


React.render(<ThisPage />, document.getElementById("page-wrapper"));