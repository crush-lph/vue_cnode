<template>
  <div class="header">
    <div class="logo">
    </div>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/getstart">新手入门</router-link>
      </li>
      <!-- <li>
        <router-link to="/api">API</router-link>
      </li> -->
      <li>
        <router-link to="/about">关于</router-link>
      </li>
      <li v-if="!this.$store.state.isLogin">
        <router-link to="/login">登录</router-link>
      </li>
      <li v-else
          @click="exit">
        <router-link to="/">退出</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      loginStatus: this.$store.state.isLogin
    }
  },
  created () {
    // this.loginStatus = this.$store.state.isLogin
    //更新了
    // window.addEventListener('beforeunload', () => {
    //   window.localStorage.isLogin = this.$store.state.isLogin
    //   this.$store
    // })
  },
  // updated () {

  //   this.loginStatus = this.$store.state.isLogin
  //   window.localStorage.isLogin = this.loginStatus
  //   console.log('登录状态更新了');
  // },
  methods: {
    exit () {
      // window.localStorage.isLogin = false;
      // let isLogin = window.localStorage.getItem('isLogin') === 'true';
      // console.log(isLogin);
      // this.loginStatus
      // window.localStorage.isLogin = false
      // this.loginStatus = false
      this.$store.commit('changeLogin', false)
      // console.log(this.$store.state.isLogin);
      // console.log(typeof false);
    },

  },
};
</script>

<style lang='less'>
.header {
  width: 100%;
  height: 50px;
  background-color: #444;
  position: sticky;
  top: 0px;
  line-height: 50px;
  overflow: hidden;
  z-index: 999;
  a {
    color: aliceblue;
    margin-right: 40px;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;
    margin-right: 60px;
    margin: 0;
    li {
      list-style: none;
      // display: block;
      display: flex;
      align-items: center;
      text-align: center;

      line-height: 50px;
      text-align: center;
    }
  }
}
</style>