<template>
  <div class="detials">
    <Panel :width="'90%'">
      <template #panel-header> </template>
      <template #content>
        <div v-html="detial.content" class="topicId"></div>
      </template>
    </Panel>
    <Panel :width="'90%'">
      <template #panel-header>
        <div class="nav">
          <p style="margin: 0px">{{ detial.replies.length }}回复</p>
        </div>
      </template>
      <template #content>
        <div
          v-for="comment in detial.replies"
          :key="comment.id"
          class="commentBox"
        >
          <span v-html="comment.content"></span>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";
export default {
  components: { Panel },
  data() {
    return {
      detial: {},
    };
  },
  async created() {
    const res = await this.$axios.get(`/topic/${this.$route.query.id}`);
    this.detial = res.data;
    console.log(this.detial);
  },
};
</script>

<style lang="less">
.topicId,
.commentBox {
  img {
    width: 100%;
  }
}
</style>