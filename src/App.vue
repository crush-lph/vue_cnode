<template>
  <div id="app">
    <Header />
    <!-- <Main/> -->
    <div class="home-content">
      <div class="left">
        <router-view />
      </div>
      <div class="right">

        <!-- 登录 -->
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

        <!-- 个人信息 -->
        <Panel v-else>
          <template #panel-header>
            <span>个人信息</span>
          </template>
          <template #content>
            <div class="my_info"
                 :v-if="myInfo">
              <div class="info_top">
                <!-- <img src="" alt=""> -->
                <img class="profile"
                     :src='myInfo.avatar_url'
                     alt="">
                <span>{{myInfo.loginname}}</span>
              </div>
              <div class="info_bottom">
                <span class="point">积分:5</span>
                <span class="signature">'这家伙很懒，什么个性签名都没有留下'</span>
              </div>
            </div>
          </template>
        </Panel>

        <!-- 发布话题 -->
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
      isLogin: '',
      myInfo: {}
    };
  },
  async created () {
    const res = await this.$axios.post("/accesstoken", {
      accesstoken: this.$store.state.token
    })
    console.log(res);
    this.myInfo = res
    this.isLogin = this.$store.state.isLogin;
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
  display: flex;
  flex-direction: column;
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
  margin: 15px 60px 0 0;
  // height: 120px;
  font-size: 13px;
  // padding: 30px;
  border-radius: 4px;
  background-color: #fff;
}
.my_info {
  .info_top {
    display: flex;

    .profile {
      width: 48px;
      height: 48px;
      // border: 1px solid;
      border-radius: 4px;
      // background-color: #ccc;
    }
    span {
      flex: 1;
      line-height: 48px;
      margin-left: 10px;
    }
  }
  .info_bottom {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .point {
      font-size: 13px;
      color: #333;
      margin: 0 0 5px 0;
    }
    .signature {
      font-style: italic;
      font-size: 13px;
      color: #333;
    }
  }
}
</style>
