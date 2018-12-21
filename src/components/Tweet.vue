<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          {{tweet.text}}
          <a>@bulmaio</a>.
          <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">{{tweet.created_at}}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tweet",
  props: ["tweet"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
</style>
