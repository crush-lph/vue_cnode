<template>
  <div class="create">
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <router-link to="/"
                       class="home-link">主页</router-link>/
          <p>发布话题</p>
        </div>
      </template>
      <template #content>
        <div class="create_topic">
          <div class="checkTab">
            <!-- <span>选择板块</span> -->
            <el-select v-model="value"
                       placeholder="请选择板块">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputTitle">
            <el-input v-model="input"
                      placeholder="请输入标题"></el-input>
          </div>
          <div class="editor">
            <Editor v-model="text"
                    :init="{
                    height: 500,
                    language:'zh_CN',
                    menubar: false,
                    branding:false,
            }">
            </Editor>
          </div>
          <el-button @click="submit">提交</el-button>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
// import TinyMce from '../components/TinyMce.vue'
import Panel from '../layout/Panel.vue'
import Editor from '@tinymce/tinymce-vue'
export default {
  components: { Panel, Editor },
  data () {
    return {
      options: [{
        value: 'good',
        label: '精华'
      }, {
        value: 'share',
        label: '分享'
      }, {
        value: 'ask',
        label: '问答'
      }, {
        value: 'job',
        label: '招聘'
      }, {
        value: 'dev',
        label: '客户端测试'
      }],
      value: '',
      input: '',
      text: ''
    }
  },
  methods: {
    submit () {
      console.log(
        this.text
      );
    }
  }

}
</script>

<style lang='less'>
.create_topic {
  .checkTab,
  .inputTitle,
  .editor {
    margin: 10px 0;
  }
  .editor {
    height: 500px;
  }
}
</style>