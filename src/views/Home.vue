<template>
  <div class="home">
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <router-link exact
                       active-class="isActive"
                       to="/">全部</router-link>
          <router-link exact
                       active-class="isActive"
                       to="/good">精华</router-link>
          <router-link exact
                       active-class="isActive"
                       to="/share">分享</router-link>
          <router-link exact
                       active-class="isActive"
                       to="/ask">问答</router-link>
          <router-link exact
                       active-class="isActive"
                       to="/job">招聘</router-link>
          <router-link exact
                       active-class="isActive"
                       to="/dev">客户端测试</router-link>
        </div>
      </template>
      <template #content>
        <div v-if="posts.length">
          <div class="post-item"
               v-for="post in posts"
               :key="post.id">
            <!-- title 划过展示提示信息 -->
            <img :src="post.author.avatar_url"
                 alt=""
                 :title="post.author.loginname"
                 class="avatar" />
            <span class="reply-count"><span style="color: #9e78c0">{{ post.reply_count }}</span>/<span style="color: #b4b4b4">{{ post.visit_count }}</span></span>
            <span v-if="!tab || tab === 'all' || post.good || post.top"
                  :class="post.top || post.good ? 'active-tab' : 'tab'">{{ post | formatTab }}</span>
            <router-link class="title"
                         :to="{ name: 'detials', query: { id: post.id } }">{{ post.title }}</router-link>
            <span class="create_time">{{
              post.last_reply_at | formatTime
            }}</span>
          </div>
        </div>
      </template>
      <template #pagination>
        <el-pagination background
                       layout="prev, pager, next"
                       :page-size='20'
                       :total="800"
                       :page-count='20'
                       :current-page='currentPage'
                       @current-change="handleCurrentChange">
        </el-pagination>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";
// import moment from "moment";
// import { Editor } from "@tinymce/tinymce-vue";
export default {
  name: "Home",
  components: {
    Panel,
    // Editor,
  },
  data () {
    return {
      posts: [],
      details: "",
      currentPage: 1,
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
      async handler (newValue) {
        const tab = newValue || "all";
        // console.log(newValue);
        const res = await this.$axios.get(`/topics?page=${this.currentPage}&limit=20&tab=${tab}`);
        // console.log(res.data);

        this.posts = res.data;
      },
      immediate: true,
    },
    // currentPage: {

    // }
  },
  computed: {
    tab () {
      return this.$route.params.tab;
    },
  },
  methods: {
    //更改页码
    async handleCurrentChange (val) {
      // console.log(val);
      // this.currentPage = val
      // this.handler
      const tab = this.$route.params.tab || 'all'
      // console.log(this.$route.params.tab);
      const res = await this.$axios.get(`/topics?page=${val}&limit=20&tab=${tab}`);
      // console.log(res.data);
      this.posts = res.data;
    }
  }
};
</script>

<style scoped lang='less'>
.nav {
  a {
    margin-right: 10px;
    color: #80bd01;
  }
  .isActive {
    background-color: #80bd01;
    color: #fff;
    padding: 0 4px;
    border-radius: 3px;
  }
}
.post-item {
  border-bottom: 1px solid #cccccc;

  a {
    color: #333;
  }
  .avatar {
    width: 30px;
    border-radius: 4px;
    height: 30px;
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
    vertical-align: middle;
  }
  // .tab {
  //   background-color: #e5e5e5;
  //   color: #999;
  //   padding: 2px 4px;
  //   border-radius: 3px;
  //   font-size: 12px;
  //   margin-right: 5px;
  // }
  // .active-tab {
  //   background: #80bd01;
  //   padding: 2px 4px;
  //   border-radius: 3px;
  //   color: #fff;
  //   font-size: 12px;
  //   margin-right: 5px;
  // }
  .reply-count {
    display: inline-block;
    width: 70px;
    font-size: 12px;
    text-align: center;
  }
  .create_time {
    font-size: 12px;
    float: right;
    margin-right: 10px;
    line-height: 38px;
    text-align: center;
  }
}
</style>
