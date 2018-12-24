<template>
  <aside class="layoutOption animated" :class="{'slideInRight': overlay, 'slideOutRight':!overlay}">
    <h1>Layout Controls</h1>
    <p class="menu-label">No of Tweets Per Column</p>
    <section style="padding-left: 20px;">
      <div class="field">
        <b-radio v-model="numTweets" native-value="10" @changed="numTweetsChanged">10</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numTweets" native-value="15" @changed="numTweetsChanged">15</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numTweets" native-value="20" @changed="numTweetsChanged">20</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numTweets" native-value="25" @changed="numTweetsChanged">25</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numTweets" native-value="30" @changed="numTweetsChanged">30</b-radio>
      </div>
    </section>

    <p class="menu-label">Page Skin</p>

    <custom-checkbox
      v-for="(layoutOption,index) in pageSkins"
      :checked="pageSkins[index].active"
      :key="index"
      :value="index"
      :color="layoutOption.name"
    ></custom-checkbox>

    <p class="menu-label">Show Tweets From</p>
    <div class="field">
      <input
        id="sliderWithValue"
        class="slider is-fullwidth"
        min="1"
        max="5"
        v-model="weekAgo"
        step="1"
        type="range"
        @change="dateChanged"
      >
      <div>
        <span style="font-weight:600; font-size:.8em">Tweets from:</span>
        <b-tag rounded class="is-dark">less than {{weekAgo}} week</b-tag>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <a class="button is-rounded" :class="activeSkin">
          <span class="icon">
            <i class="fa fa-check"></i>
          </span>
          <span>Save Settings</span>
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import CustomCheckbox from "./CustomCheckbox";
import { EventBus } from "../eventBus.js";
import "bulma-slider/dist/css/bulma-slider.min.css";
export default {
  name: "EditLayout",
  props: ["overlay", "settings"],
  components: {
    CustomCheckbox
  },
  data() {
    return {
      numTweets: this.settings.numTweets,
      weekAgo: 1,
      activeSkin: "",
      pageSkins: [
        {
          name: "Light",
          class: "transparent",
          active: true
        },
        {
          name: "Default",
          class: "primary",
          active: false
        },
        {
          name: "Green",
          class: "sucess",
          active: false
        },
        {
          name: "Orange",
          class: "warning",
          active: false
        },
        {
          name: "Red",
          class: "danger",
          active: false
        },
        {
          name: "Blue",
          class: "info",
          active: false
        }
      ]
    };
  },

  methods: {
    dateChanged() {
      EventBus.emit("dateChanged", this.weekAgo);
    },

    numTweetsChanged() {
      alert("this.numTweets")
      // this.$emit("numTweetssChanged", this.numTweets);
    },
    changeSkin(skin) {
      alert(this.numTweets)
      this.activeSkin = skin;
    }
  },
  mounted() {
    EventBus.$on("skinChanged", className => {
      this.changeSkin(className);
    });
  }
};
</script>

<style>
.layoutOption {
  position: fixed;
  top: 0;
  padding: 60px 15px 0 15px;
  right: 0;
  width: auto;
  height: 100vh;
  background: rgb(255, 255, 255);
  transform: translateX(100%);
  border-left: 1px solid #7957d5;
  transition: all 0.5s ease-in;
}
.overlay {
  background: red;
  transform: translateX(0%);
}
</style>
