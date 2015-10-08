var React=components.React
var Button = components.Button;
var Demo = components.Demo;
var Login = components.Login;


var Test=React.createClass({
    render:function(){
    	console.log("in #test1");
        return (<div><Demo /></div>);
    }
});
var Test2=React.createClass({
    render:function(){
    	console.log("in #test2");
        return (<div>test2</div>);
    }
});
var Login1 = React.createClass({
    render:function(){
        console.log(" in /Login1 ");
        return(<Login />);
    }
});



RouteConfig["#test1"]=function(){
    RouteConfig.renderHandle(<Test />);
};

RouteConfig["#test2"]=function(){
    RouteConfig.renderHandle(<Test2 />);
};

RouteConfig["/Login"]=function(){
    RouteConfig.renderHandle(<Login1 />);
};