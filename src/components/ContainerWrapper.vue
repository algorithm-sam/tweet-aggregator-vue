<template>
  <div id="main-wrapper" class="container" ref="loadingContainer" style="min-height:90vh;">
    <b-loading v-if="loading" :is-full-page="false" :active.sync="loading"></b-loading>

    <tweet-container v-else v-for="(rows,index) in numRows" :key="index"></tweet-container>
  </div>
</template>

<script>
import TweetContainer from "./TweetContainer";

export default {
  name: "container",
  props: ["width", "loading"],
  components: {
    TweetContainer
  },
  data() {
    return {
      numRows: 4
    };
  },
  created() {
    // const loadingComponent = this.$loading.open({
    //   container: this.loading ? this.$refs.loadingContainer.$el : null
    // });
  }
};
</script>

<style>
#main-wrapper {
  margin-top: 50px;
}
</style>
