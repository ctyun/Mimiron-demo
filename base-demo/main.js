/**
 * 基本组件的展示
 * 
 */
var React = components.React;
var Button = components.Button;
var Demo = components.Demo;

var ThisPage = React.createClass({

    render: function(){
        return(<Demo/>);
    }
});

React.render(<ThisPage />, document.getElementById('demo-wrapper'));