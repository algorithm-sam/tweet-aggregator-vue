<template>
  <aside class="layoutOption animated" :class="{'slideInRight': overlay, 'slideOutRight':!overlay}">
    <h1>Layout Controls</h1>
    <p class="menu-label">No of Tweets Per Row</p>
    <section style="padding-left: 20px;">
      <div class="field">
        <b-radio v-model="numCol" native-value="3">3</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numCol" native-value="4">4</b-radio>
      </div>
      <div class="field">
        <b-radio v-model="numCol" native-value="5">5</b-radio>
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
      <div class="field">
        <input
          class="is-checkradio has-background-color"
          id="exampleCheckboxBackgroundColorDefault"
          type="checkbox"
          name="exampleCheckboxBackgroundColorDefault"
          :checked="pageSkin === 1"
          v-model="pageSkin"
        >
        <label for="exampleCheckboxBackgroundColorDefault">Default</label>
      </div>

      <div class="field">
        <input
          class="is-checkradio has-background-color is-success"
          id="exampleCheckboxBackgroundColorSuccess"
          type="checkbox"
          name="exampleCheckboxBackgroundColorSuccess"
          :checked="pageSkin === 2"
          v-model="pageSkin"
        >
        <label for="exampleCheckboxBackgroundColorSuccess">Green</label>
      </div>

      <div class="field">
        <input
          class="is-checkradio has-background-color is-warning"
          id="exampleCheckboxBackgroundColorWarning"
          type="checkbox"
          name="exampleCheckboxBackgroundColorWarning"
          :checked="pageSkin === 3"
          v-model="pageSkin"
        >
        <label for="exampleCheckboxBackgroundColorWarning">Orange</label>
      </div>

      <div class="field">
        <input
          class="is-checkradio has-background-color is-danger"
          id="exampleCheckboxBackgroundColorDanger"
          type="checkbox"
          name="exampleCheckboxBackgroundColorDanger"
          :checked="pageSkin === 4"
          v-model="pageSkin"
        >
        <label for="exampleCheckboxBackgroundColorDanger">Red</label>
      </div>

      <div class="field">
        <input
          class="is-checkradio has-background-color is-info"
          id="exampleCheckboxBackgroundColorInfo"
          type="checkbox"
          name="exampleCheckboxBackgroundColorInfo"
          :checked="pageSkin === 5"
          v-model="pageSkin"
        >
        <label for="exampleCheckboxBackgroundColorInfo">Blue</label>
      </div>
    </section>

    <p class="menu-label">Show Tweets From</p>
    <div class="field">
      <input
        id="sliderWithValue"
        class="slider has-output-tooltip"
        min="0"
        max="100"
        value="50"
        step="1"
        type="range"
      >
      <output for="sliderWithValue">2days ago</output>
    </div>
  </aside>
</template>

<script>
export default {
  name: "EditLayout",
  props: ["overlay", "width"],
  data() {
    return {
      numCol: 3,
      pageSkin: 1
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
