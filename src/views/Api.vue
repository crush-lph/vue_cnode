<template>
  <div class="api">
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <router-link to="/" class="home-link">主页</router-link>/
          <p>API</p>
        </div>
      </template>
      <template #content>
        <div class="markdown-text">
          <p>
            以下 api 路径均以
            <strong
              ><router-link to="https://cnodejs.org/api/v1" target="_blank"
                >https://cnodejs.org/api/v1</router-link
              ></strong
            >
            为前缀
          </p>
          <h2>关于</h2>
          <h4>get /topics 主题首页</h4>
          <p>接收 get 参数</p>
          <ul>
            <li>page <code>Number</code> 页数</li>
            <li>
              tab <code>String</code> 主题分类。目前有 <code>ask</code>
              <code>share</code> <code>job</code> <code>good</code>
            </li>
            <li>limit <code>Number</code> 每一页的主题数量</li>
            <li>
              mdrender <code>String</code> 当为
              <code>false</code> 时，不渲染。默认为
              <code>true</code>，渲染出现的所有 markdown 格式文本。
            </li>
          </ul>
          <p>
            示例：<a href="/api/v1/topics" target="_blank">/api/v1/topics</a>
          </p>
          <h4>get /topic/:id 主题详情</h4>
          <p>接收 get 参数</p>
          <ul>
            <li>
              mdrender <code>String</code> 当为
              <code>false</code> 时，不渲染。默认为
              <code>true</code>，渲染出现的所有 markdown 格式文本。
            </li>
            <li>
              accesstoken
              <code>String</code>
              当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的
              <code>is_collect</code> 以及 <code>replies</code> 列表中的
              <code>is_uped</code> 值。
            </li>
          </ul>
          <p>
            示例：<a
              href="/api/v1/topic/5433d5e4e737cbe96dcef312"
              target="_blank"
              >/api/v1/topic/5433d5e4e737cbe96dcef312</a
            >
          </p>
          <h4>post /topics 新建主题</h4>
          <ul>
<li>accesstoken <code>String</code> 用户的 accessToken</li>
<li>title <code>String</code> 标题</li>
<li>tab <code>String</code> 目前有 <code>ask</code> <code>share</code> <code>job</code> <code>dev</code>。开发新客户端的同学，请务必将你们的测试帖发在 <code>dev</code> 专区，以免污染日常的版面，否则会进行封号一周处理。</li>
<li>content <code>String</code> 主体内容</li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> topic_id</span><span class="pun">:</span><span class="pln"> </span><span class="str">'5433d5e4e737cbe96dcef312'</span><span class="pun">}</span></code></pre>

        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";

export default {
  components: { Panel },
};
</script>

<style scoped lang="less">
.nav {
  p {
    margin: 0;
  }
  .home-link {
    color: #80bd01;
  }
  line-height: 30px;
  display: flex;
}
.markdown-text {
  h2,
  h3,
  h4 {
    border-bottom: 1px solid #eee;
  }
  a {
    color: #08c;
    text-decoration: none;
  }
  p {
    color: #333;
  }
  line-height: 1.7em;
}
</style>