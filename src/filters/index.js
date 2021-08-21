import Vue from 'vue'
Vue.filter(
  'formatTab', (post) => post.top ? '置顶' : post.good ? '精华' : post.tab === 'share' ? '分享' : post.tab === 'ask' ? '问答' : post.tab === 'job' ? '招聘' : '客户端测试'
)

