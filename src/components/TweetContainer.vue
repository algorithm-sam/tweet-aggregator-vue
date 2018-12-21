<template>
  <div class="columns mag-top sortable">
    <Tweet v-for="(child,index) in tweets" :key="index" :tweet="tweets[index]"></Tweet>
  </div>
</template>

<script>
import Tweet from "./Tweet";
export default {
  name: "tweet-row",
  props: ["tweets"],
  components: {
    Tweet
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
  margin-top: 20px;
}
</style>
