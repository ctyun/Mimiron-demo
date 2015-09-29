/**
 * @module Route
 */

/**
 * `路由组件的第二部分, 在路由配置文件(app.js)之后使用<script>标签引入`
 * @class BSS.Router
 */
var BSS = {};
BSS.Router = function() {
	function Router() {}
	Router.prototype.setup = function(routemap, defaultFunc) {
		var that = this;
		this.routemap = [];
		this.defaultFunc = defaultFunc;
		for ( var rule in routemap) {
			if (!routemap.hasOwnProperty(rule))
				continue;
			that.routemap.push({
				rule : new RegExp(rule, 'i'),
				func : routemap[rule]
			});
		}
	};
	Router.prototype.start = function() {
		console.log(window.location.hash);
		var hash = location.hash, route, matchResult;
		for ( var routeIndex in this.routemap) {
			route = this.routemap[routeIndex];
			matchResult = hash.match(route.rule);

			if (matchResult) {
				route.func.apply(window, matchResult.slice(1));
				return;
			}
		}
		this.defaultFunc();
	};
	Router.prototype.invoke = function(hashUrl) {
		var hash = hashUrl, route, matchResult;
		for ( var routeIndex in this.routemap) {
			route = this.routemap[routeIndex];
			matchResult = hash.match(route.rule);

			if (matchResult) {
				route.func.apply(window, matchResult.slice(1));
				return;
			}
		}
		this.defaultFunc();
	};
	return Router;
}();
var router = new BSS.Router();
router.setup(RouteConfig, function() {
    RouteConfig.defaultRouter();
});
router.start();

function func(){
	var hv=window.location.hash;
    doHashChange(hv);
}
function doHashChange(url){

	router.invoke(url);
};
window.onhashchange=func;
