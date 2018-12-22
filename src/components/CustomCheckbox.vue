<template>
  <div class="field">
    <input
      class="is-checkradio has-background-color"
      :class="getColor"
      :id="'exampleCheckBoxBackgroundColor'+color"
      :name="'exampleCheckBoxBackgroundColor'+color"
      type="checkbox"
      :checked="checked? 'checked' : false"
      v-model="pageSkin"
    >
    <label for="exampleCheckboxBackgroundColorDefault">{{this.color}}</label>
  </div>
</template>

<script>
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
  }
};
</script>

<style>
</style>
