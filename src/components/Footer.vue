<template>
  <div class="footer-content">
    <div class="footer">
      <div class="links">
        <a href="https://cnodejs.org/rss"
           class="dark">RSS</a>|
        <a href="https://github.com/cnodejs/nodeclub/"
           class="dark">源码地址</a>
      </div>
      <p>
        CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
        的技术研究。
      </p>
      <p>
        服务器搭建在
        <a href="">
          <img src="//static2.cnodejs.org/public/images/digitalocean.png"
               alt="" />
        </a>
        ，存储赞助商为
        <a href="">
          <img src="//static2.cnodejs.org/public/images/qiniu.png"
               alt="" />
        </a>
      </p>
      <p>
        新手搭建 Node.js 服务器，推荐使用无需备案的
        <a href="https://www.digitalocean.com/?refcode=eba02656eeb3"
           class="blue">DigitalOcean(https://www.digitalocean.com/)</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.footer-content {
  width: 100%;
  background-color: white;
  // position: absolute;
}
.footer {
  a {
    color: black;
    vertical-align: bottom;
  }
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 0 auto;
  color: #cccccc;
  padding: 20px 0;
  margin-left: 50px;
  font-size: 14px;
  line-height: 2em;
  bottom: 0px;
  // background-color: white;
  .blue {
    color: #08c;
  }
  p {
    margin: 0 0 10px 0;
  }
  img {
    vertical-align: middle;
  }
}
</style>