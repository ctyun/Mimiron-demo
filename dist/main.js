var React=require("react");
var components=require("components");
var BSSFrame=components.BSSFrame;
var TopBar = components.TopBar;
var SideBar = components.SideBar;

/**
 * 框架入口
 * @function componentDidMount 这里面加载的都是需要在React渲染完DOM再运行的JS.
 * @see menu入口请参考 ./app.js
 */
var ThisPage = React.createClass({
    componentDidMount: function(){
	    Tools.loadScript(["../dist/frame/theme.js"]);
	},
	render: function(){
	    return(<div>
	            <TopBar logout={this._logout} userName={this.props.userName}/>
	            <div id="wrapper">
	                <SideBar list={this.props.menu} />
	            </div>
	        </div>);
	}
});
React.render(<ThisPage />, document.getElementById('menu-wrapper'));