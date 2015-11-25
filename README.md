如何启动Demo
=======
1. 在根目录执行: python -m SimpleHTTPServer
2. 访问http://127.0.0.1:8000/base-demo/  这是基本组件库的DEMO.
3. 访问http://127.0.0.1:8000/bss-demo/#/sample  这是业务页面的DEMO.




如何在项目中是使用Mimiron
=======
1. 如需要使用组件库+BSS主题, 请:
1.1 拷贝static到你的工程目录, 使用bss-demo下的index.html作为Template.
1.2 你的系统需要响应/api/user/queryUserModule的GET请求, 返回用户可用的侧边目录, 例如返回:
`'{"id": null,"name": null,"url": null,"parentId": null,"level": null,"children": [{"id": "e8f65eec69cf402aa3ee8828ed4c4dc3","name": "示例","url": "","parentId": "-1","level": null,"children": [{"id": "099f747e454a417a92d76b62c022bb5d","name": "示例页面","url": "/sample","parentId": "e8f65eec69cf402aa3ee8828ed4c4dc3","level": null,"children": [],"btnRight": {}}, {"id": "099f747e454a417a92d76b62c022bb55","name": "元数据管理","url": "/report/metadata","parentId": "e8f65eec69cf402aa3ee8828ed4c4dc3","level": null,"children": [],"btnRight": {}}],"btnRight": {}}],"btnRight": null}'`
1.3 启动你的工程, 在static/pages目录下开发不同的业务页面即可.

2. 如果仅使用组件库, 请:
2.1 拷贝static到你的工程目录, 然后删除static/pages.
2.2 使用base-demo下的index.html作为Template, 将main.js移动到合适的静态资源目录中去.
2.3 参考main.js构建页面即可.