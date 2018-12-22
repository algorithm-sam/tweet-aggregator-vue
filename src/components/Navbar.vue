<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" :class="color">
    <!-- <div class="container"> -->
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="../assets/images/Twitter_Logo_Blue.svg" width="50" height="60">
        <h1 style="font-weight:700; font-size:1.2em">Tweet Aggregator</h1>
      </a>
      
      <a role="button" class="navbar-burger burger" @click="toggleEditLayoutMedium()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" @click="toggleEditLayoutLarge()">
          Edit Layouts
          <span style="padding-left:5px">
            <i class="fa fa-eye"></i>
          </span>
        </a>
      </div>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script>
import { EventBus } from "../eventBus.js";
export default {
  name: "SiteNavigation",
  props: ["color"],
  data() {
    return {};
  },
  mounted() {
    EventBus.$on("skinChanged", payload => {
      this.changeSkin();
    });
  },
  methods: {
    toggleEditLayoutLarge() {
      //emit an event to the parent container to initiate the animation;
      this.$emit("toggleLayoutViewLg");
    },
    toggleEditLayoutMedium() {
      this.$emit("toggleLayoutViewMd");
    }
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
