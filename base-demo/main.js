/**
 * 基本组件的展示
 * 
 */
var React = components.React;
var Tools = components.Tools;
var Demo = components.Demo;

window.Mimiron.distPath="../dist";

var ThisPage = React.createClass({
	componentDidMount: function(){
	    Tools.loadScript("../dist/frame/theme.js");
	},
    render: function(){
        return(<Demo/>);
    }
});

React.render(<ThisPage />, document.getElementById('content'));