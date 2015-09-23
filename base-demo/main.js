var React=require("react");
var components=require("components");
var Button = components.Button;

var ThisPage = React.createClass({
    render: function(){
        return(<div>
                <Button btnName="演示button"/>
            </div>);
    }
});
React.render(<ThisPage />, document.getElementById('demo-wrapper'));