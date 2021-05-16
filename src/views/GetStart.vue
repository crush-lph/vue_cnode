<template>
  <div class="getstaart">
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <router-link to="/" class="home-link">主页</router-link>/
          <p>Node.js 新手入门</p>
        </div>
      </template>
      <template #content>
        <div class="markdown-text">
          <h2>Node.js 入门</h2>
          <p>《<strong>汇智网 Node.js 课程</strong>》</p>
          <p><router-link to="http://www.hubwiz.com/course/?type=nodes">http://www.hubwiz.com/course/?type=nodes</router-link></p>
          <p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
          <p><router-link to="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</router-link></p>
          <p>《<strong>Node.js 包教不包会</strong>》</p>
          <p><router-link to="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</router-link></p>
          <p>《<strong>ECMAScript 6入门</strong>》</p>
          <p><router-link to="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</router-link></p>
          <p>《<strong>七天学会NodeJS</strong>》</p>
          <p><router-link to="https://github.com/nqdeng/7-days-nodejs">https://github.com/nqdeng/7-days-nodejs</router-link></p>
          <p>《<strong>Node入门-一本全面的Node.js教程</strong>》</p>       
          <p><router-link to="http://www.nodebeginner.org/index-zh-cn.html">http://www.nodebeginner.org/index-zh-cn.html</router-link></p>
          <h2>Node.js 资源</h2>
            <p>《<strong>node weekly</strong>》</p>       
            <p><router-link to="http://nodeweekly.com/issues">http://nodeweekly.com/issues</router-link></p>
            <p>《<strong>node123-node.js中文资料导航</strong>》</p>       
            <p><router-link to="https://github.com/youyudehexie/node123">https://github.com/youyudehexie/node123</router-link></p>
            <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>       
            <p><router-link to="https://github.com/sindresorhus/awesome-nodejs">https://github.com/sindresorhus/awesome-nodejs</router-link></p>
            <p>《<strong>Node.js Books</strong>》</p>       
            <p><router-link to="https://github.com/pana/node-books">https://github.com/pana/node-books</router-link></p>
          <h2>Node.js 名人</h2>
            <p>《<strong>名人堂</strong>》</p>       
            <p><router-link to="https://github.com/cnodejs/nodeclub/wiki/名人堂">https://github.com/cnodejs/nodeclub/wiki/名人堂</router-link></p>
          <h2>Node.js 服务器</h2>
            <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <router-link to="https://www.digitalocean.com/?refcode=eba02656eeb3" class="blue">DigitalOcean(https://www.digitalocean.com/)</router-link></p>

         </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";
export default {
  components: { Panel },
};
</script>

<style scoped lang="less">
.nav {
  p {
    margin: 0;
  }
  .home-link {
    color: #80bd01;
  }
  line-height: 30px;
  display: flex;
}
.markdown-text{
  
  h2{
    padding:10px;
    border-bottom: 1px solid #eee;
  }
  a{
    color: #08c;
    text-decoration: none;
  }
  p{
    color: #333;
  }
  line-height: 1.7em;
}
</style>





