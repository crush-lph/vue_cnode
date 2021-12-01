<template>
  <div class="loginin">
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <router-link to="/"
                       class="home-link">主页</router-link>/
          <p>登录</p>
        </div>
      </template>
      <template #content>
        <div class="markdown-text">
          <div class="user">
            <p>用户名</p>
            <el-input class="input"
                      v-model="token" />
          </div>
          <div class="password">
            <p>密 码</p>
            <el-input class="input" />
          </div>
          <el-button @click="login"
                     :width='"200px"'
                     type="primary"
                     plain
                     class="loginBtn">登录</el-button>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";

export default {
  components: { Panel },

  data () {
    return {
      token: "",
    };
  },
  created () {
    this.token = this.$store.state.token
    // this.$store.commit('changeLogin', false)
    // window.localStorage.isLogin = false
    console.log(this.$router);
    console.log(this.$route);
  }
  ,
  methods: {
    login () {
      if (!this.token) {
        alert('请输入token')
      } else {
        this.$axios
          .post("/accesstoken", {
            accesstoken: this.token,
          })
          .then((res) => {
            this.$router.push("/");
            // window.localStorage.setItem('isLogin', true)
            this.$store.commit('changeLogin', true);
          })
          .catch((err) => {
            alert("token错误");
          });
      }

    },
  },
};
</script>


<style lang='less'>
.password,
.user {
  display: flex;
  margin: 20px;
  p {
    line-height: 40px;
    margin: 0;
    width: 200px;
    text-align: right;
    margin-right: 10px;
  }
}
.input {
  width: 300px;
}
.loginBtn {
  margin-left: 230px;
  width: 160px;
}
</style>