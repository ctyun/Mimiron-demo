# React组件库使用指导


## 0.说明
本文档用于引导用户如何使用React组件库进行后台页面快速开发.

## 1.准备工作

### 1.1 下载[组件库](https://github.com/ctyun/components-demo/archive/master.zip), 拷贝*dist*文件夹到你的工程WEB目录下.


### 1.2 新建页面
在你正在使用的后端框架中新建一个页面, 或者像下面一样新建一个html文件:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv='Content-type' content='text/html; charset=utf-8'>
  <title>Demo</title>

</head>
<body>
  <div id="demo-wrapper"> </div>
</body>
</html>
```

## 2.使用基本组件

### 2.1 引入jQuery
在body中引入jQuery, 考虑到jQuery广泛应用在各种js类库中, 而且均被要求先于js类库引入, 所以我们并没有把jQuery打包到组件库里.
```
<script src="../dist/third/jquery.js"></script>
```

### 2.2 引入JSX语法转义器
为了书写jsx语法代码, 需要引入组件库之前先引入jsx语法转义器.
```
<script src="../dist/third/JSXTransformer.js"></script>
```

### 2.3 引入组件库
一切准备妥当, 可以引入组件库了.
```
<link type="text/css" rel="stylesheet" href="../dist/UI/css/main.css">
<script src="../dist/frame/components.js"></script>
```

### 2.4 使用第一个组件
一切就绪, 可以开始使用组件库中丰富的组件了.
首先在html(或者你使用的后端框架的模版页面里)的body中新建一个*<div id="demo-wrapper">*标签, 所有组件会被渲染到这个标签里.
然后新建一个*main.js*文件, 并在html文件中引用, 拼接组件的工作将在这里进行.
在*main.js*中像这样使用组件:
```
var React=require("react");
var components=require("components");
var Button = components.Button;

var ThisPage = React.createClass({
	render: function(){
	    return(<div>
	    		<Button btnName="演示button"/>
	        </div>);
	}
});
React.render(<ThisPage />, document.getElementById('demo-wrapper'));
```
> 你可以参考*/base-demo/*目录,也可以参考我们在github上部署的[静态页面](http://ctyun.github.io/components-demo/base-demo/base-demo.html)

### 2.5 使用更多组件
查看[API文档](http://等待补充), 了解更多的组件用法.


## 3. 使用组件库构建后台页面
>至此, 组件库基本用法已经介绍完毕, 你可以开始基于组件库进行组合和开发了. 这一节对组件库中几个特别的组件进行介绍, 帮助快速开发后台页面.

### 3.1 引入主题
我们针对后台页面页面, 开发了一套兼容bootstrap的主题, 在html中按下面方法引入样式:
```
<link type="text/css" rel="stylesheet" href="../dist/themes/style1/orange-blue.css" id="theme-change" class="style-change color-change">
<link rel="stylesheet" href="../dist/UI/css/font-awesome.css">
```
由于主题使用js对一些DOM节点进行了配置, 这个文件需要在React的DOM节点展开后进行引入, 因此, 在*main.js*中创建的组件渲染完毕的生命周期中进行如下操作:
```
componentDidMount: function(){
    Tools.loadScript(["../dist/frame/theme.js"]);
},
```
> 使用组件库时, 如果你需要组件渲染完毕后加载某些文件, 也可以写入这个生命周期.

### 3.2 配置路由, 功能菜单和导航条
后台页面一般由顶部导航条, 左边功能菜单和右边的页面区组成, 因此, *main.js*中定义的组件应该是这个样子:
```
var ThisPage = React.createClass({
    componentDidMount: function(){
	    Tools.loadScript(["../dist/frame/theme.js"]);
	},
	render: function(){
	    return(<div>
	            <TopBar logout={this._logout} userName={this.props.userName}/>
	            <div id="wrapper">
	                <SideBar list={this.props.menu} />
	            </div>
	        </div>);
	}
});
React.render(<ThisPage />, document.getElementById('menu-wrapper'));
```
对应的, html页面中需要新建一个*<div id="menu-wrapper">*用于渲染导航条和功能菜单.

###3.3 设置路由, 编写具体的页面
在html页面中引入路由, 路由配置和路由页面文件:
```
  <script  type="text/jsx"  src="../dist/frame/config.js"></script>
  <script  type="text/jsx"  src="../dist/frame/router.js"></script>
  <script src="../dist/util/tools.js"></script>
  <script  type="text/jsx"  src="app.js"></script>
```
打开*app.js*进行路由页面的配置
```
var React=require("react");
var components=require("components");
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
```
我们在*#test1*页面中放置了Demo组件, 其中包括了几乎全部组件的展示.
> 你可以参考*/bss-demo/*目录,也可以参考我们在github上部署的[静态页面](http://ctyun.github.io/components-demo/bss-demo/bss-demo.html)

### 3.4 配置服务器并测试
左侧功能菜单配置方法请参考[这个API文档](http://const的API文档).
功能菜单中有哪些选项, 是由服务器给出的, 但是不用担心, 不配置服务器, 菜单中也会有默认的选项, 现在就可以进行测试了.
