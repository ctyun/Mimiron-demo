var React = components.React;
var ResourceDetail = components.ResourceDetail;


var ThisPage = React.createClass({
/*
path="/resourceDetail/:fkAccountId/:fkUserId/:billPeriod" handler={ResourceDetail} */

	render: function() {
		var parts = window.location.hash.split("/");

    	//parts[0];//#
    	//parts[1];//resource
    	var fkAccountId = parts[2];
    	var fkUserId = parts[3]; 
    	var billPeriod = parts[4];

    	var params = {
    		fkAccountId: fkAccountId,
    		fkUserId: fkUserId,
    		billPeriod: billPeriod
    	}

	    return(
	        <ResourceDetail params = {params}/>
	    );
	}

});

React.render(<ThisPage />, document.getElementById("page-wrapper"));