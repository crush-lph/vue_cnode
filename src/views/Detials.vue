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
              <div class="comment_icon">
                <i class="iconfont icon-dianzan"
                   @click="ups(comment.id)"
                   title="点赞">
                  <span class="up_count">{{comment.ups.length === 0 ?'':comment.ups.length}}</span>
                </i>

                <i class="iconfont icon-icon_reply"
                   title="回复"></i>
              </div>
            </div>
            <div class="comment_content">
              <span v-html="comment.content"></span>
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
        <div class="editor"
             id="editor">

        </div>
      </template>
    </Panel>
    <!-- <Panel :width="'90%'">
      <template #panel-header>
        <span>添加回复</span>
      </template>
      <template #content>
       
      </template>
    </Panel> -->
    <!-- <Editor
      initialValue="<p>Initial editor content</p>"
      apiKey="w6kufjg31yal6ehgdtkralyp5kfl8k309sfivk4y96ftp8fk"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap',
          'searchreplace visualblocks code fullscreen',
          'print preview anchor insertdatetime media',
          'paste code help wordcount table',
        ],
        toolbar:
          'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help',
      }"
    >
    </Editor> -->
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";
import moment from "moment";
import axios from 'axios'
// import tinymce from "tinymce";
// import { Editor } from "@tinymce/tinymce-vue";

export default {
  name: "",
  components: { Panel },
  data () {
    return {
      detial: {},
    };
  },
  async created () {
    const res = await this.$axios.get(`/topic/${this.$route.query.id}`);
    this.detial = res.data;
    console.log(this.detial);
  },
  filters: {
    formatTime (time) {
      let oldTime = moment(time).format("YYYY-MM-DD HH:mm:ss");
      let now = moment();
      // console.log(time);
      // let time2 = moment;
      let day = now.diff(oldTime, "day");
      if (day > 30) {
        return now.diff(oldTime, "month") + "月前";
      } else return day + "天前";
    },
  },
  methods: {
    async ups (id) {
      const res = await this.$axios.post(`/reply/${id}/up`)
      console.log(id);
      console.log(res);
    }
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
</style>