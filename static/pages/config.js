
Mimiron = components.Mimiron;
Tools = components.Tools;

//配置路由信息
Mimiron.RouteConfig = {
	"../static/pages/index.jsx":/^\/$/ig,
	"../static/pages/sample.jsx":/sample$/ig,
	"../static/pages/login.jsx":/login$/ig,
	"../static/pages/manage-report-group.jsx":/report\/manageReportGroup/ig,
	"../static/pages/report-manage.jsx":/report\/manage$/ig,
	"../static/pages/report-config.jsx":/report\/config/ig,
	"../static/pages/metadata.jsx":/report\/metadata/ig,
	"../static/pages/show-report.jsx":/showReport\/[^\/]*/ig,
	"../static/pages/resource.jsx":/resource(\/[^\/]*)?$/i,
	"../static/pages/resource-detail.jsx":/resourceDetail\/[^\/]*/ig
}

Mimiron.debugMode = true;
Mimiron.distPath = "../static/dist/";

if(window.location.pathname == "/login" || window.location.hash == '#/login'){
	window.location.hash = "#/login";
	//根据URL加载不同业务页面
	Tools.goJSX("#/login");
}else{
	//加载BSS页面基本框架
	Tools.loadScript("../static/pages/base.jsx");
	//根据URL加载不同业务页面
	Tools.goJSX(window.location.hash);
}




