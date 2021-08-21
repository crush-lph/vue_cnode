<template>
  <div id="app">
    <Header :isLogin="isLogin" />
    <!-- <Main/> -->
    <div class="home-content">
      <div class="left">
        <router-view />
      </div>
      <div class="right">
        <div v-if="!this.$store.state.isLogin"
             class="login">
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

        <!-- 发布话题 -->
        <Panel>
          <template #panel-header>
            <span>个人信息</span>
          </template>
          <template #content>
            <div></div>
          </template>
        </Panel>
        <Panel>
          <template #content>
            <el-button type="primary"
                       plain>发布话题</el-button>
          </template>
        </Panel>
        <!-- <button @click="isLogin = !isLogin">按钮</button> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header";
import Panel from "./layout/Panel.vue";
// import Main from './components/Main.vue'
export default {
  components: { Header, Footer, Panel },
  data () {
    return {
      isLogin: false,
    };
  },
  created () {
    this.isLogin = this.$store.state.isLogin;
    console.log(this.isLogin);
  },
};
</script>

<style lang="less">
#app {
  position: relative;
  min-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-sizing: border-box;
}

.home-content {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.left {
  width: 70%;
}
.right {
  width: 30%;
  border-radius: 4px;
  margin-top: 15px;
  .panel {
    margin-left: 0px;
    padding-right: 60px;
  }
}
.login {
  div,
  p {
    padding: 10px;
    margin: 0;
  }
  // width: 80%;
  margin-right: 60px;
  // height: 120px;
  font-size: 13px;
  // padding: 30px;
  border-radius: 4px;
  background-color: #fff;
}
</style>
