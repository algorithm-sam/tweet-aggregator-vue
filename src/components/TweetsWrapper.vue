<template >
  <div>
    <b-loading v-if="loading" :is-full-page="false" :active.sync="loading"></b-loading>
    <div class="container">
      <!-- <div class="columns mag-top"> -->
      <draggable v-model="tweetsData" class="columns mag-top" @end="onEnd">
        <tweet-container
          class="column p-10 tweets"
          :class="settings.skinColor"
          v-for="(child,index) in tweetsData"
          :key="index"
          :tweets="tweetsData[index]"
          :numInCol="settings.numTweets || 30"
          :settings="settings"
        />
      </draggable>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TweetContainer from "./TweetContainer";
export default {
  name: "tweetCon",
  props: ["tweets", "loading", "settings"],
  components: {
    TweetContainer,
    draggable
  },
  data() {
    return {
      children: 3,
      theTweetsData: []
    };
  },
  computed: {
    tweetsData: {
      get() {
        return this.tweets;
      },
      set(value) {
        this.tweets = value;
      }
    }
  },

  methods: {
    onEnd: function(arg) {
      // console.log(arg.oldIndex, arg.newIndex);
      let oldIndex = arg.oldIndex;
      let newIndex = arg.newIndex;
      let oldValue = this.tweets[oldIndex];
      this.tweets[oldIndex] = this.tweets[newIndex];
      this.tweets[newIndex] = oldValue;
    }
  }
};
</script>

<style scoped>
.mag-top {
  margin-top: 50px;
}
.p-10 {
  padding: 5px;
  margin: 5px;
  /*background-color: red*/
}
</style>
