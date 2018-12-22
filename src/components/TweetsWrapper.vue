<template v-sortable="{handle: '.column'}">
  <div class="columns mag-top">
    <b-loading v-if="loading" :is-full-page="false" :active.sync="loading"></b-loading>
    <tweet-container
      class="column"
      v-for="(child,index) in children"
      :key="index"
      :tweet="tweets[index]"
      :numInCol="settings.numTweets || 30"
    ></tweet-container>
  </div>
</template>

<script>
import TweetContainer from "./TweetContainer";
export default {
  name: "tweetCon",
  props: ["tweets", "loading", "settings"],
  components: {
    TweetContainer
  },
  data() {
    return {
      children: 3
    };
  },

  methods: {}
};
</script>

<style scoped>
.mag-top {
  margin-top: 50px;
}
</style>
