(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30e5870c"],{"7aeb":function(t,e,a){"use strict";a("b7df")},b153:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detials"},[a("Panel",{attrs:{width:"90%"},scopedSlots:t._u([{key:"panel-header",fn:function(){return[a("div",{staticClass:"detial_title"},[t.detial.good||t.detial.top||t.detial.tab?a("span",{class:t.detial.top||t.detial.good?"active-tab":"tab"},[t._v(t._s(t._f("formatTab")(t.detial)))]):t._e(),t._v(" "+t._s(t.detial.title)+" ")]),a("div",{staticClass:"detial_info"},[a("span",[t._v("发布于 "+t._s(t._f("formatTime")(t.detial.create_at)))]),t.detial.author?a("span",[t._v("作者 "+t._s(t.detial.author.loginname))]):t._e(),a("span",[t._v(t._s(t.detial.visit_count)+" 次浏览")]),a("span",[t._v("来自 "+t._s(t._f("formatTab")(t.detial)))])])]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"topicId",domProps:{innerHTML:t._s(t.detial.content)}})]},proxy:!0}])}),a("Panel",{attrs:{width:"90%"},scopedSlots:t._u([{key:"panel-header",fn:function(){return[a("div",{staticClass:"nav"},[a("p",{staticStyle:{margin:"0px"}},[t._v(t._s(0===t.detial.reply_count?"暂无":t.detial.reply_count)+"回复")])])]},proxy:!0},{key:"content",fn:function(){return t._l(t.detial.replies,(function(e,n){return a("div",{key:e.id,staticClass:"commentBox"},[a("div",{staticClass:"comment_profile"},[a("img",{staticClass:"headimg",attrs:{src:e.author.avatar_url,alt:""}})]),a("div",{staticClass:"comment_reply"},[a("div",{staticClass:"comment_info"},[a("div",{staticClass:"comment_date"},[a("span",[t._v(" "+t._s(e.author.loginname)+" "+t._s(n+1+"楼")+"•"+t._s(t._f("formatTime")(e.create_at))+" ")])]),a("div",{staticClass:"comment_icon"},[a("i",{staticClass:"iconfont icon-dianzan",attrs:{title:"点赞"},on:{click:function(a){return t.ups(e.id)}}},[a("span",{staticClass:"up_count"},[t._v(t._s(0===e.ups.length?"":e.ups.length))])]),a("i",{staticClass:"iconfont icon-icon_reply",attrs:{title:"回复"}})])]),a("div",{staticClass:"comment_content"},[a("span",{domProps:{innerHTML:t._s(e.content)}})])])])}))},proxy:!0}])}),a("Panel",{attrs:{width:"90%"},scopedSlots:t._u([{key:"panel-header",fn:function(){return[a("div",{staticClass:"nav"},[a("p",{staticStyle:{margin:"0px"}},[t._v("添加回复")])])]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"editor",attrs:{id:"editor"}})]},proxy:!0}])})],1)},i=[],s=a("1da1"),o=(a("96cf"),a("89d7")),r=a("c1df"),c=a.n(r),l={name:"",components:{Panel:o["a"]},data:function(){return{detial:{}}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/topic/".concat(t.$route.query.id));case 2:a=e.sent,t.detial=a.data,console.log(t.detial);case 5:case"end":return e.stop()}}),e)})))()},filters:{formatTime:function(t){var e=c()(t).format("YYYY-MM-DD HH:mm:ss"),a=c()(),n=a.diff(e,"day");return n>30?a.diff(e,"month")+"月前":n+"天前"}},methods:{ups:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$axios.post("/reply/".concat(t,"/up"));case 2:n=a.sent,console.log(t),console.log(n);case 5:case"end":return a.stop()}}),a)})))()}}},d=l,u=(a("7aeb"),a("2877")),p=Object(u["a"])(d,n,i,!1,null,null,null);e["default"]=p.exports},b7df:function(t,e,a){}}]);
//# sourceMappingURL=chunk-30e5870c.0b4c1ae1.js.map