<template>
  <div id="app">
    <Navbar @toggleLayoutViewLg="editLayoutViewLg()" @toggleLayoutViewMd="editLayoutViewMd()"/>
    <container-wrapper
      :loading="loading"
      v-for="(rows,index) in numRows"
      :key="index"
      :tweets="computedTweets"
    ></container-wrapper>
    <edit-layout :overlay="overlayed" :width="layoutWidth"></edit-layout>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import ContainerWrapper from "./components/ContainerWrapper";
import EditLayout from "./components/EditLayout";
// import { EventBus } from "./eventBus.js";
export default {
  name: "App",
  components: {
    Navbar,
    ContainerWrapper,
    EditLayout
  },
  data() {
    return {
      layoutWidth: 0,
      layoutIsOpened: false,
      overlayed: false,
      loading: true,
      tweets: [],
      numRows: 0,
      computedTweets: []
    };
  },
  async created() {
    this.loading = true;
    let response = await this.$http.get(
      "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=makeschool"
    );
    console.log(response.body);
    this.tweets = response.body;
    this.loading = false;
    if (!response) {
      this.loading = false;
      console.log("err");
    }
  },
  beforeMount() {
    this.getNumRows();
    this.computeTweets();
  },

  methods: {
    editLayoutViewLg() {
      this.layoutIsOpened = !this.layoutIsOpened;
    },
    editLayoutViewMd() {
      alert("Small Screen");
    },
    getNumRows: () => {
      this.numRows = localStorage.getItem("x-numCols")
        ? JSON.parse(localStorage.getItem("x-numCols"))
        : Math.ceil(30 / 3);
    },
    computeTweets: index => {
      let startPos = index * this.numRows;
      computedTweets = this.tweets.slice(startPos, startPos + this.numRows);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  background: #eee;
}
</style>
