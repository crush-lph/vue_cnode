<template>
  <div class="loginin">
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <router-link to="/" class="home-link">主页</router-link>/
          <p>登录</p>
        </div>
      </template>
      <template #content>
        <div class="markdown-text">
          <div class="user"
            ><p>用户名</p>
            <el-input class="input"
          /></div>
          <div class="password">
            <p>密 码</p>
            <el-input class="input"/>
          </div>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";

export default {
  components: { Panel },
  data() {
    return {
      token: "",
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/accesstoken", {
          accesstoken: this.token,
        })
        .then((res) => {
          this.$router.push("/");
          this.$store.state.isLogin = true;
        })
        .catch((err) => {
          alert("token错误");
        });
    },
  },
};
</script>

<style>
.password,.user{
  display: flex;
}
.input{
  width: 200px;
}
</style>