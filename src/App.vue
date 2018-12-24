<template>
  <div id="app">
    <Navbar
      @toggleLayoutViewLg="editLayoutViewLg()"
      @toggleLayoutViewMd="editLayoutViewMd()"
      :color="getLayoutSettings.skinColor"
    />
    <tweets-wrapper :loading="loading" :tweets="tweets" :settings="getLayoutSettings"></tweets-wrapper>
    <edit-layout :overlay="overlayed" :width="layoutWidth" :settings="getLayoutSettings" @numTweetsChanged="changeTweetsNum"></edit-layout>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import TweetsWrapper from "./components/TweetsWrapper";
import EditLayout from "./components/EditLayout";
import { EventBus } from "./eventBus.js";
import axios from "axios";
export default {
  name: "App",
  components: {
    Navbar,
    TweetsWrapper,
    EditLayout
  },
  data() {
    return {
      layoutWidth: 0,
      overlayed: false,
      loading: true,
      tweets: [],
      numRows: 0,
      activeSkin: null
    };
  },
  mounted() {
    EventBus.$on("skinChanged", skin => {
      this.changeSkin(skin);
    });
  },
  created() {
    this.loading = true;
    axios
      .all([
        this.getTweets("makeschool"),
        this.getTweets("newsycombinator"),
        this.getTweets("ycombinator")
      ])
      .then(
        axios.spread((makeschool, newsycombinator, ycombinator) => {
          this.tweets.push(
            makeschool.data,
            newsycombinator.data,
            ycombinator.data
          );
          this.loading = false;
        })
      )
      .catch(err => {
        this.loading = false;
        console.log(err);
      });

    // // let response = await this.$http.get(
    // //   "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=makeschool"
    // // );
    // // console.log(response.body);
    // // this.tweets = response.body;
    // if (!response.ok) {
    // }
  },
  methods: {
    getTweets(screen_name) {
      return axios.get(
        "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=" +
          screen_name
      );
    },
    editLayoutViewLg() {
      this.overlayed = !this.overlayed;
    },
    editLayoutViewMd() {
      this.overlayed = !this.overlayed;
    },
    changeSkin(skin) {
      this.activeSkin = skin;
      let setUp = localStorage.getItem("x-setup") ? JSON.parse(localStorage.getItem("x-setup")): {};
      setUp.color = skin;
      localStorage.setItem("x-setup", JSON.stringify(setUp))
    },
    changeTweetsNum(num) {
      alert('hjk');
      this.numTweets = num;
      let setUp = localStorage.getItem("x-setup") ? JSON.parse(localStorage.getItem("x-setup")): {};
      setUp.numTweets = num;
      localStorage.setItem("x-setup", JSON.stringify(setUp))
    }
  },
  computed: {
    getLayoutSettings() {
      let setUp = localStorage.getItem("x-setup")
        ? JSON.parse(localStorage.getItem("x-setup"))
        : {};
      return {
        skinColor: setUp.color ? setUp.color : this.activeSkin,
        numTweets: setUp.numTweets ? setUp.numTweets : 30,
        timeRange: setUp.timeRange ? setUp.timeRange : null,
        columnOrder: setUp.columnOrder ? setUp.columnOrder : null
      };
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
