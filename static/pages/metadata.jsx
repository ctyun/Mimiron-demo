var React=components.React;
var BSSFrame = components.BSSFrame;
var Metadata = components.Metadata;


var ThisPage = React.createClass({
    render: function(){
	    return(
	                	<Metadata/>
	        );
	},
});


React.render(<ThisPage />, document.getElementById("page-wrapper"));