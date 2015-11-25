var React=components.React;
var BSSFrame = components.BSSFrame;
var TopBar = components.TopBar;
var SideBar = components.SideBar;
var Button = components.Button;
var DatePicker = components.DatePicker;


var ThisPage = React.createClass({
    render: function(){
	    return(
        	<p>i am index</p>
        	);
	},
});


React.render(<ThisPage />, document.getElementById("page-wrapper"));