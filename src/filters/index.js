import Vue from 'vue'
import moment from 'moment'
Vue.filter(
  'formatTab', (post) => post.top ? '置顶' : post.good ? '精华' : post.tab === 'share' ? '分享' : post.tab === 'ask' ? '问答' : post.tab === 'job' ? '招聘' : '客户端测试'
)
Vue.filter(
  'formatTime', (time) => {
    let oldTime = moment(time).format("YYYY-MM-DD HH:mm:ss");
    let now = moment();
    // console.log(time);
    // let time2 = moment;
    let day = now.diff(oldTime, "day");
    if (day > 30) {
      return now.diff(oldTime, "month") + "月前";
      // } else return day + "天前";
    } else if (now.diff(oldTime, 'hour') >= 24) {
      return day + '天前'
    } else if (now.diff(oldTime, 'minutes') >= 60) {
      return now.diff(oldTime, 'hour') + '小时前'
    } else {
      return now.diff(oldTime, 'minutes') + '分钟前'
    }
  },
)
