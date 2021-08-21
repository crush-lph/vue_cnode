//导出的对象就是配置对象 
module.exports = {
  //publicPath 公共路径，主要是资源的路径 ，就是index.html 使用什么样的地址去找css js img 等  
  //默认值是'/' 就是服务器根地址  假如你的服务器地址是`https://<USERNAME>.github.io/<REPO>` 那么publicPath默认就是https://<USERNAME>.github.io/ ， 
  //当你的index.html导入资源的时候路径就是错误的
  //要区分生产环境和开发环境  只有在部署的时候 也就是生产环境下需要设置publicPath
  publicPath: process.env.NODE_ENV === 'production'?'/vue_cnode/':'/'
}