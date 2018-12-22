<template>
  <div>
    <Tweet v-for="(child,index) in tweet" :key="index" :tweet="child"></Tweet>
  </div>
</template>

<script>
import Tweet from "./Tweet";

export default {
  name: "container",
  props: ["tweet", "numInCol"],
  components: {
    Tweet
  },
  data() {
    return {
      numRows: 4
    };
  },
  created() {}
};
</script>

<style>
</style>
