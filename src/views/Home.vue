<template>
  <div class="home">
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <router-link to="/">全部</router-link>
          <router-link to="/good">精华</router-link>
          <router-link to="/share">分享</router-link>
          <router-link to="/ask">问答</router-link>
          <router-link to="/job">招聘</router-link>
          <router-link to="/dev">客户端测试</router-link>
        </div>
      </template>
      <template #content>
        <div v-if="posts.length">
          <div class="post-item" v-for="post in posts" :key="post.id">
            <!-- title 划过展示提示信息 -->
            <img
              :src="post.author.avatar_url"
              alt=""
              :title="post.author.loginname"
              class="avatar"
            />
            <span class="reply-count"
              ><span style="color: #9e78c0">{{ post.reply_count }}</span
              >/<span style="color: #b4b4b4">{{ post.visit_count }}</span></span
            >
            <span
              v-if="!tab || tab === 'all' || post.good || post.top"
              :class="post.top || post.good ? 'active-tab' : 'tab'"
              >{{ post | formatTab }}</span
            >
            <router-link :to="{ name: 'detials', query: { id: post.id } }">{{
              post.title
            }}</router-link>
          </div>
        </div>
      </template>
      <template #pagination>
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";

export default {
  name: "Home",
  components: {
    Panel,
  },
  data() {
    return {
      posts: [],
      details: "",
    };
  },
  //通过监听动态路由参数 获取对应的分类数据
  // async created() {
  //   const res = await this.$axios.get("/topics?page=1&limit=40");
  //   console.log(res.data);
  //   this.posts = res.data;
  // },
  watch: {
    tab: {
      async handler(newValue) {
        const tab = newValue || "all";
        // console.log(newValue);
        const res = await this.$axios.get(`/topics?page=1&limit=40&tab=${tab}`);

        this.posts = res.data;
      },
      immediate: true,
    },
  },
  computed: {
    tab() {
      return this.$route.params.tab;
    },
  },
};
</script>

<style scoped lang='less'>
.nav {
  a {
    margin-right: 10px;
    color: #80bd01;
  }
}
.post-item {
  a {
    color: #333;
  }
  .avatar {
    width: 40px;
    border-radius: 4px;
    height: 40px;
    vertical-align: middle;
    margin: 4px 0;
  }
  .title {
    // line-height: 40px;
    width: 65%;
    display: inline-block;
    white-space: nowrap; //不允许换行
    overflow: hidden; //超出隐藏
    text-overflow: ellipsis; //超出部分显示省略号
  }
  .tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 5px;
  }
  .active-tab {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 5px;
  }
  .reply-count {
    display: inline-block;
    width: 70px;
    font-size: 12px;
    text-align: center;
  }
}
</style>
