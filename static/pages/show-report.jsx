var React=components.React;
var BSSFrame = components.BSSFrame;
var ReportShow = components.ReportShow;


var ThisPage = React.createClass({
    render: function(){
    	var parts = window.location.hash.split("/");
    	var id = null;
    	if(parts[parts.length-1]!="showReport")
    		id = parts[parts.length-1];
    	var params = {
    		id:id
    	};
	    return(
	                	<ReportShow params = {params}/>
	        );
	},
});


React.render(<ThisPage />, document.getElementById("page-wrapper"));