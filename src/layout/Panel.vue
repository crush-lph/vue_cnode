<template>
  <div :style="{ width: width }"
       class="panel">
    <div class="topic-header">
      <slot name="topic-header" />
    </div>
    <div class="panel-header">
      <!-- 具名插槽 -->
      <slot name="panel-header" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <div class="pagination">
      <slot name="pagination" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: "100%",
    },
  },
  computed: {
    formatWidth () {
      //  '100' --->100px
      //  100 --->100px
      //  100%--->100%
      return typeof this.width === "number" || Number(width)
        ? this.width + "px"
        : this.width;
      //先判断是否为数字 如果是 就直接加上px
      //不是数字看能否用Number转化成数字 能的话就变成加px的字符串，如果不能就转化就不修改
    },
  },
};
</script>

<style lang="less">
.panel {
  width: 100%;
  border-radius: 4px;
  // margin-top: 15px;
  // margin-left: 60px;
  // margin-bottom: 15px;
  margin: 15px auto;

  .panel-header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 4px 4px 0 0;
  }
  .content {
    // min-height: 130px;
    background-color: white;
    padding: 10px;
    border-radius: 0 0 4px 4px;
  }
}
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
  h2 {
    padding: 10px;
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