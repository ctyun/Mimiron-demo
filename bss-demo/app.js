var React=components.React
var Button = components.Button;
var Demo = components.Demo;


var Test=React.createClass({
    render:function(){
        return (<div><Demo /></div>);
    }
});
var Test2=React.createClass({
    render:function(){
        return (<div>test2</div>);
    }
});
RouteConfig["#test1"]=function(){
    RouteConfig.renderHandle(<Test />);
};

RouteConfig["#test2"]=function(){
    RouteConfig.renderHandle(<Test2 />);
};