<template>
  <div class="field">
    <input
      class="is-checkradio has-background-color"
      :class="getColor"
      :id="'exampleRadioBackgroundColor'+color"
      name="exampleRadioBackgroundColor"
      type="radio"
      :checked="checked? 'ckecked' : ''"
      @click="colorChange"
    >
    <label :for="'exampleRadioBackgroundColor'+color">{{this.color}}</label>
  </div>
</template>

<script>
import { EventBus } from "../eventBus.js";
export default {
  name: "customCheckBox",
  props: ["color", "checked"],
  data() {
    return {
      pageSkin: ""
    };
  },
  computed: {
    getColor: function() {
      switch (this.color.toLowerCase()) {
        case "default":
          return "is-primary";
        case "green":
          return "is-success";
        case "orange":
          return "is-warning";
        case "red":
          return "is-danger";
        case "blue":
          return "is-info";
        default:
          return "";
      }
    }
  },
  methods: {
    colorChange() {
      EventBus.$emit("skinChanged", this.getColor);
    }
  }
};
</script>

<style>
</style>
