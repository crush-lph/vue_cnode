(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2404047a"],{"1f00":function(t,n,e){},"7cd9":function(t,n,e){"use strict";e("1f00")},c4a9:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return i}));var o=function(){return"undefined"!==typeof window?window:t},i=function(){var t=o();return t&&t.tinymce?t.tinymce:null}}).call(this,e("c8ba"))},ca72:function(t,n,e){"use strict";var o=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],i=function(t){return-1!==o.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},r=function(t,n,e){Object.keys(n).filter(i).forEach((function(o){var i=n[o];"function"===typeof i&&("onInit"===o?i(t,e):e.on(o.substring(2),(function(t){return i(t,e)})))}))},a=function(t,n){var e=t.$props.modelEvents?t.$props.modelEvents:null,o=Array.isArray(e)?e.join(" "):e;n.on(o||"change input undo redo",(function(){t.$emit("input",n.getContent({format:t.$props.outputFormat}))}))},s=function(t,n,e){var o=n.$props.value?n.$props.value:"",i=n.$props.initialValue?n.$props.initialValue:"";e.setContent(o||(n.initialized?n.cache:i)),n.$watch("value",(function(t,o){e&&"string"===typeof t&&t!==o&&t!==e.getContent({format:n.$props.outputFormat})&&e.setContent(t)})),n.$listeners.input&&a(n,e),r(t,n.$listeners,e),n.initialized=!0},l=0,c=function(t){var n=Date.now(),e=Math.floor(1e9*Math.random());return l++,t+"_"+e+l+String(n)},u=function(t){return null!==t&&"textarea"===t.tagName.toLowerCase()},p=function(t){return"undefined"===typeof t||""===t?[]:Array.isArray(t)?t:t.split(" ")},d=function(t,n){return p(t).concat(p(n))},f=function(t){return null===t||void 0===t},h=function(){return{listeners:[],scriptId:c("tiny-script"),scriptLoaded:!1}},v=function(){var t=h(),n=function(t,n,e,o){var i=n.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=t,i.src=e;var r=function(){i.removeEventListener("load",r),o()};i.addEventListener("load",r),n.head&&n.head.appendChild(i)},e=function(e,o,i){t.scriptLoaded?i():(t.listeners.push(i),e.getElementById(t.scriptId)||n(t.scriptId,e,o,(function(){t.listeners.forEach((function(t){return t()})),t.scriptLoaded=!0})))},o=function(){t=h()};return{load:e,reinitialize:o}},m=v(),b=e("c4a9"),y={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},g=function(){return g=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var i in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},g.apply(this,arguments)},$=function(t,n,e){return t(e||"div",{attrs:{id:n}})},C=function(t,n){return t("textarea",{attrs:{id:n},style:{visibility:"hidden"}})},S=function(t){return function(){var n=g(g({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:d(t.$props.init&&t.$props.init.plugins,t.$props.plugins),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(n){t.editor=n,n.on("init",(function(e){return s(e,t,n)})),t.$props.init&&"function"===typeof t.$props.init.setup&&t.$props.init.setup(n)}});u(t.element)&&(t.element.style.visibility="",t.element.style.display=""),Object(b["a"])().init(n)}},w={props:y,created:function(){this.elementId=this.$props.id||c("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(b["a"])())S(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",n=this.$props.apiKey?this.$props.apiKey:"no-api-key",e=f(this.$props.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;m.load(this.element.ownerDocument,e,S(this))}},beforeDestroy:function(){null!==Object(b["a"])()&&Object(b["a"])().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(b["a"])())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&S(this)()},render:function(t){return this.inlineEditor?$(t,this.elementId,this.$props.tagName):C(t,this.elementId)}};n["a"]=w},d879:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"create"},[e("Panel",{attrs:{width:"90%"},scopedSlots:t._u([{key:"panel-header",fn:function(){return[e("div",{staticClass:"nav"},[e("router-link",{staticClass:"home-link",attrs:{to:"/"}},[t._v("主页")]),t._v("/ "),e("p",[t._v("发布话题")])],1)]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"create_topic"},[e("div",{staticClass:"checkTab"},[e("el-select",{attrs:{placeholder:"请选择板块"},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("div",{staticClass:"inputTitle"},[e("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(n){t.title=n},expression:"title"}})],1),e("div",{staticClass:"editor"},[e("Editor",{attrs:{init:{height:500,language:"zh_CN",menubar:!1,branding:!1}},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1),e("el-button",{staticClass:"clearfix",staticStyle:{float:"right"},on:{click:t.submit}},[t._v("提交")])],1)]},proxy:!0}])})],1)},i=[],r=e("1da1"),a=(e("96cf"),e("89d7")),s=e("ca72"),l={components:{Panel:a["a"],Editor:s["a"]},data:function(){return{options:[{value:"good",label:"精华"},{value:"share",label:"分享"},{value:"ask",label:"问答"},{value:"job",label:"招聘"},{value:"dev",label:"客户端测试"}],tab:"",title:"",content:""}},methods:{submit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var e,o,i,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=t.$store.state.token,o=t.title,i=t.tab,r=t.content,console.log(o,i,r,e),n.next=5,t.$axios.post("/topics",{accesstoken:e,title:o,tab:i,content:r});case 5:a=n.sent,console.log(a);case 7:case"end":return n.stop()}}),n)})))()}}},c=l,u=(e("7cd9"),e("2877")),p=Object(u["a"])(c,o,i,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2404047a.c1a80d61.js.map