<template>
  <div class="scrollable">
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
.scrollable {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

.scrollable:hover {
  overflow: scroll;
}

.scrollable::-webkit-scrollbar,
.scrollable::-webkit-scrollbar-thumb {
  overflow: visible;
  border-radius: 4px;
}

.scrollable::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
}
.scrollable:hover .scrollable::-webkit-scrollbar-thumb {
  opacity: 1;
}
.scrollable::-webkit-scrollbar {
  width: 0.4em;
}
</style>
