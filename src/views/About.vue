<template>
  <div class="about">
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <router-link to="/" class="home-link">主页</router-link>/
          <p>关于</p>
        </div>
      </template>
      <template #content>
        <div class="markdown-text">
          <h2>关于</h2>
          <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
          <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
          <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>        
          <p>社区目前由 <router-link to="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</router-link> 在维护，有问题请联系：<router-link to="https://github.com/alsotang" target="_blank">https://github.com/alsotang</router-link></p>
          <p>请关注我们的官方微博：<router-link to="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</router-link></p>
          <h2>移动客户端</h2>
          <p>客户端由 <router-link to="https://cnodejs.org/user/soliury" target="_blank">@soliury</router-link> 开发维护。</p>
          <p>源码地址： <router-link to="https://github.com/soliury/noder-react-native" target="_blank">https://github.com/soliury/noder-react-native</router-link> 。</p>
          <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
          <p>另，安卓用户同时可选择：<router-link to="https://github.com/TakWolf/CNode-Material-Design" target="_blank">https://github.com/TakWolf/CNode-Material-Design</router-link> ，这是 Java 原生开发的安卓客户端。</p>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from '../layout/Panel.vue'
export default {
 components:{Panel,}
}
</script>

<style lang="less">
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