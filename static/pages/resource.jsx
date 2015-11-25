var React = components.React;
var Resource = components.Resource;


var ThisPage = React.createClass({

	render: function() {
		return (
			<Resource />
		);
	}

});


React.render(<ThisPage />, document.getElementById("page-wrapper"));