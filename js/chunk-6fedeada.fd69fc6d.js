(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fedeada"],{a55b:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"loginin"},[s("Panel",{attrs:{width:"90%"},scopedSlots:t._u([{key:"panel-header",fn:function(){return[s("div",{staticClass:"nav"},[s("router-link",{staticClass:"home-link",attrs:{to:"/"}},[t._v("主页")]),t._v("/ "),s("p",[t._v("登录")])],1)]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"markdown-text"},[s("div",{staticClass:"user"},[s("p",[t._v("用户名")]),s("el-input",{attrs:{width:"200px"}})],1),s("div",{staticClass:"password"},[s("p",[t._v("密 码")]),s("el-input",{attrs:{width:"200px"}})],1)])]},proxy:!0}])})],1)},a=[],i=s("89d7"),o={components:{Panel:i["a"]},data:function(){return{token:""}},methods:{login:function(){var t=this;this.$axios.post("/accesstoken",{accesstoken:this.token}).then((function(n){t.$router.push("/"),t.$store.state.isLogin=!0})).catch((function(t){alert("token错误")}))}}},c=o,r=(s("d6db"),s("2877")),u=Object(r["a"])(c,e,a,!1,null,null,null);n["default"]=u.exports},d6db:function(t,n,s){"use strict";s("e67a")},e67a:function(t,n,s){}}]);
//# sourceMappingURL=chunk-6fedeada.fd69fc6d.js.map