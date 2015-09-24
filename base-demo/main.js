/**
 * 基本组件的展示
 * 
 */
var React = components.React;
var Button = components.Button;

var ThisPage = React.createClass({
	onClick: function(){
		alert("点击了");
	},
    render: function(){
        return(<div>
                <Button btnName="演示button" doAction={this.onClick}/>
            </div>);
    }
});
React.render(<ThisPage />, document.getElementById('demo-wrapper'));