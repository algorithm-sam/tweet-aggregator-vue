<template>
  <div class="scrollable">
    <Tweet v-for="(child,index) in scaledTweets" :key="index" :tweet="child" :skin="settings.skinColor"></Tweet>
  </div>
</template>

<script>
import Tweet from "./Tweet";

export default {
  name: "container",
  props: ["tweets", "numInCol", "settings"],
  components: {
    Tweet
  },
  data() {
    return {
      numTweets: this.settings.numTweets,
      // scaledTweets: this.tweets.splice[0, this.numTweets]
    };
  },
  computed: {
    scaledTweets() {
      return this.tweets.slice(-(this.tweets.length), this.settings.numTweets);
    }
  }
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
