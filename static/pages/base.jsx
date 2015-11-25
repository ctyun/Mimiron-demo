var React=components.React
var Login = components.Login;
var TopBar = components.TopBar;
var SideBar = components.SideBar;
var Tools = components.Tools;

var Base = React.createClass({
	displayName: 'Base',
    componentDidMount: function(){
	    Tools.loadScript("../static/dist/frame/theme.js");
	    Tools.handleA();
	},
	render: function(){
		var userName = getUserName() || "NA";
		return(<div>
			<TopBar userName={userName} />
			<div id="wrapper">
				<SideBar />
				<div id="page-wrapper">
				</div>
			</div>
		</div>)
	}
});

var API = {
	"testPOST":"/api/sendget/iamargument"
}

React.render(<Base />, document.body);