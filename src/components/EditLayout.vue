<template>
  <aside class="layoutOption animated" :class="{'slideInRight': overlay, 'slideOutRight':!overlay}">
    <h1>Layout Controls</h1>
    <p class="menu-label">No of Tweets Per Column</p>
    <section style="padding-left: 20px;">
      <div class="field">
        <b-radio v-model="numTweet" native-value="10">10</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numTweet" native-value="15">15</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numTweet" native-value="20">20</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numTweet" native-value="25">25</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numTweet" native-value="30">30</b-radio>
      </div>
    </section>

    <p class="menu-label">Page Skin</p>
    <section>
      <!-- <div class="field">
        <b-checkbox :value="true">Default</b-checkbox>
      </div>
      <div class="field">
        <b-checkbox :value="true" type="is-info">Info</b-checkbox>
      </div>
      <div class="field">
        <b-checkbox :value="true" type="is-success">Success</b-checkbox>
      </div>
      <div class="field">
        <b-checkbox :value="true" type="is-danger">Danger</b-checkbox>
      </div>
      <div class="field">
        <b-checkbox :value="true" type="is-warning">Warning</b-checkbox>
      </div>-->
      <custom-checkbox
        v-for="(layoutOption,index) in pageSkins"
        :checked="layoutOption.active"
        :key="index"
        :value="index"
        :color="layoutOption.name"
      ></custom-checkbox>
    </section>

    <p class="menu-label">Show Tweets From</p>
    <div class="field">
      <input
        id="sliderWithValue"
        class="slider has-output"
        min="10"
        max="300"
        :value="tweets"
        step="5"
        type="range"
      >
      <output for="sliderWithValue">2days ago</output>
    </div>

    <div class="field">
      <div class="control">
        <a class="button is-primary is-rounded">
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
import "bulma-slider/dist/css/bulma-slider.min.css";
export default {
  name: "EditLayout",
  props: ["overlay", "settings"],
  components: {
    CustomCheckbox
  },
  data() {
    return {
      numTweet: 3,
      activeSkin: "",
      pageSkins: [
        {
          color: "#fff",
          name: "Default",
          active: false
        },
        {
          color: "#fff",
          name: "Green",
          active: true
        },
        {
          color: "#fff",
          name: "Orange",
          active: false
        },
        {
          color: "#fff",
          name: "Red",
          active: false
        },
        {
          color: "#fff",
          name: "Blue",
          active: false
        }
      ]
    };
  }
};
</script>

<style>
.layoutOption {
  position: fixed;
  top: 0;
  padding-top: 60px;
  right: 0;
  width: auto;
  height: 100vh;
  background: rgb(255, 255, 255);
  transform: translateX(100%);
  border-left: 1px solid #7957d5;
  padding-left: 10px;
  /* transition: all 0.5s ease-in; */
}
.overlay {
  background: red;
  transform: translateX(0%);
}
</style>
