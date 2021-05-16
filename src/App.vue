<template>
  <div id="app">
    <Header />
    <!-- <Main/> -->
    <div class="home-content">
      <div class="left">
      <router-view />
    </div>
    <div class="right">
      <div v-if="!isLogin" class="login">
        <p>CNode：Node.js专业中文社区</p>
        <div>
          您可以
          <router-link to="/login">登录</router-link>
          或
          <router-link to="/signup">注册</router-link>
          , 也可以<br />
          <router-link to="/login">
            <el-button> 通过 GitHub 登录 </el-button>
          </router-link>
        </div>
      </div>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header";
// import Main from './components/Main.vue'
export default {
  components: { Header, Footer },
  data() {
    return {
      isLogin: false
    }
  },
};
</script>

<style lang="less">
#app {
  position: relative;
  
}
.home-content{
   display: flex;
   justify-content: space-between;
   
}
.left{
  width: 70%;
}
.right{
  float: right;
  width: 30%;
  border-radius: 4px;
  margin-top: 15px;
}
.login {
  div,p{
    padding: 10px;
    margin: 0;
  }
  width: 80%;
  // height: 120px;
  font-size: 13px;
  // padding: 30px;
  border-radius: 4px;
  background-color: #fff;
}
</style>
