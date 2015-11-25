var React=components.React;
var BSSFrame = components.BSSFrame;
var Report = components.Report;


var ThisPage = React.createClass({
    render: function(){
    	var parts = window.location.hash.split("/");
    	var id = null;
    	if(parts[parts.length-1]!="manage")
    		id = parts[parts.length-1];
    	var params = {
    		name:"manage",
    		id:id
    	};
	    return(
	                	<Report params = {params}/>
	        );
	},
});


React.render(<ThisPage />, document.getElementById("page-wrapper"));