<template>
  <div class="detials">
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="detial_title">
          <span v-if="detial.good || detial.top || detial.tab"
                :class="detial.top || detial.good ? 'active-tab' : 'tab'">{{ detial | formatTab }}</span>
          {{ detial.title }}
        </div>
        <div class="detial_info">
          <span>发布于 {{ detial.create_at | formatTime }}</span>
          <span v-if="detial.author">作者 {{ detial.author.loginname }}</span>
          <span>{{ detial.visit_count }} 次浏览</span>
          <span>来自 {{ detial | formatTab }}</span>
        </div>
      </template>
      <template #content>
        <div v-html="detial.content"
             class="topicId"></div>
      </template>
    </Panel>
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <p style="margin: 0px">{{ detial.reply_count===0?'暂无':detial.reply_count }}回复</p>
        </div>
      </template>
      <template #content>
        <div v-for="(comment, index) in detial.replies"
             :key="comment.id"
             class="commentBox">
          <!-- <div class="author_content">
            <img :src="comment.author.avatar_url"
                 alt=""
                 class="headimg" />
            <span>
              {{ comment.author.loginname }}
              {{ index + 1 + "楼" }}•{{ comment.create_at | formatTime }}
            </span>

          </div>
          <div class="comment_content">
            <span v-html="comment.content"></span>
          </div> -->
          <div class="comment_profile">
            <img :src="comment.author.avatar_url"
                 alt=""
                 class="headimg" />
          </div>
          <div class="comment_reply">
            <div class="comment_info">
              <div class="comment_date">
                <span>
                  {{ comment.author.loginname }}
                  {{ index + 1 + "楼" }}•{{ comment.create_at | formatTime }}
                </span>
              </div>
              <div class="comment_icon"
                   v-if="isLogin">
                <i class="iconfont icon-dianzan"
                   :class="[comment.is_uped?'is_uped':'']"
                   @click="ups(comment.id)"
                   title="点赞">
                  <span class="up_count">{{comment.ups.length}}</span>
                </i>

                <i class="iconfont icon-icon_reply"
                   title="回复"
                   @click="reply(comment.id,comment.author.loginname)"></i>
              </div>
            </div>
            <div class="comment_content">
              <span v-html="comment.content"></span>
            </div>
            <!-- <textarea name="reply_editor"
                      :id="comment.id"
                      cols="30"
                      rows="10"
                      v-show="(comment.id===visibleId)&&replyClick">@{{comment.author.loginname}}</textarea> -->

            <div class="reply_editor"
                 v-if="(comment.id===visibleId)&&replyClick">
              <Editor v-model="text"
                      :init="{
                    height: 300,
                    language:'zh_CN',
                    menubar: false,
                    branding:false,
            }">
              </Editor>
              <el-button style="margin-top:10px;float:right;">回复</el-button>
            </div>
          </div>
        </div>
      </template>
    </Panel>
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <p style="margin: 0px">添加回复</p>
        </div>
      </template>
      <template #content>
        <Editor v-model="text"
                :init="{
                    height: 500,
                    language:'zh_CN',
                    menubar: false,
                    branding:false,
            }">
        </Editor>
      </template>
    </Panel>

  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";
import Editor from "@tinymce/tinymce-vue";
// import tinymce from "tinymce";
// import { Editor } from "@tinymce/tinymce-vue";
export default {
  name: "",
  components: { Panel, Editor },
  data () {
    return {
      detial: {},
      visibleId: String,
      replyClick: false,
      content: 'aaa',
      token: '',
      isLogin: this.$store.state.isLogin,
      text: ''
    };
  },
  // const isLogin = this.$store.state.isLogin,
  async created () {
    const res = await this.$axios.get(`/topic/${this.$route.query.id}`);
    this.detial = res.data;
    console.log(this.detial);
    this.token = this.$store.state.token
  },
  methods: {
    // 点赞
    async ups (id) {
      const res = await this.$axios.post(`/reply/${id}/ups`, {
        accesstoken: this.token,
      })
      // 找到当前评论
      const currentComment = this.detial.replies.find((item) => item.id === id)
      const myId = window.localStorage.getItem('myId')
      currentComment.is_uped = res.action === 'up' ? false : true
      res.action === "up"
        ? currentComment.ups.push(myId)
        : currentComment.ups.splice(
          currentComment.ups.indexOf(myId),
          1
        );
      // console.log(id);
      // console.log(res);
    },
    reply (id, name) {
      // if (id === moment.id)
      if (this.visibleId === id) {
        console.log('aa');
        this.replyClick = !this.replyClick
      } else {
        this.replyClick = true
      }
      // console.log(id);
      this.visibleId = id
      this.text = `@${name}`
      // console.log(comment.id);
    },
    // submit(){

    // }
  }
};
</script>

<style  lang="less">
.topicId,
.commentBox {
  img {
    width: 90vh;
  }
  // width: 100%;
  // border-bottom: 1px solid #cccccc;
}
.commentBox {
  border-bottom: 1px solid #cccccc;
  // .author_content {
  //   span {
  //     margin-left: 4px;
  //     font-size: 10px;
  //   }
  // }
  display: flex;
  .comment_profile {
    margin-top: 10px;
  }
  .comment_reply {
    flex: 1;
    padding: 5px 10px;
    .comment_info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .comment_date {
        font-size: 12px;
      }
      .comment_icon i {
        padding: 2px 5px;
        cursor: pointer;
        color: rgb(99, 97, 97);
        .up_count {
          color: #808080;
          font-size: 14px;
        }
      }
    }
    .comment_content {
      margin-left: 5px;
    }
  }
}
.commentBox .headimg {
  width: 30px;
  height: 30px;
  border-radius: 4px;
}
.detial_info {
  font-size: 8px;
  margin-top: 15px;
  span {
    color: #838383;
    margin-right: 8px;
  }
  span::before {
    // margin-right: 15px;
    content: "•";
  }
}
.is_uped {
  color: #333 !important;
}
</style>