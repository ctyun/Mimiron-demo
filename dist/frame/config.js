
var RouteConfig={
    self:this,
    renderHandle:function(reactCom){
        React.render(
            reactCom,
            document.getElementById('page-wrapper')
        );
    },
    defaultRouter:function(){

    },
    '#test4':function(){
        alert(222);

    },
    '#/list/(.*)/(.*)' : function(cate, id) {
        console.log('list', cate, id);
    },
    '#/show/(.*)' : function(id) {
        console.log('show', id);
    }
};


