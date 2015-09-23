var React=require("react");
var components=require("components");
var TopBar = components.TopBar;
var SideBar = components.SideBar;

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