/**
 * @module Router
 * 
 */

/**
 * `路由组件的第一部分, 在路由配置文件(app.js)之前使用<script>标签引入`
 * @class RouteConfig
 */
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


