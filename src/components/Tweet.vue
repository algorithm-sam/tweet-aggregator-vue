<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="tweet.user.profile_image_url" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{tweet.user.name}}</p>
            <!-- <p class="title is-4">{{tweet.user.screen_name}}</p> -->
          </div>
        </div>

        <div class="content">
          <p>{{tweet.text}}</p>
          <p v-if="userMentions.length>0">Mentions:
            <b-tag
              v-for="(mention,index) in userMentions"
              :key="index"
              rounded
              class="is-primary mentions"
            >{{mention.name}}</b-tag>
          </p>
          <br>
          <time datetime="2016-1-1">{{this.tweet.created_at}}</time>
        </div>
        <div class="is-clearfix">
          <a
            class="button is-primary is-rounded is-pulled-right"
            :href="tweet.entities.urls[0].url"
            target="_blank"
          >Read on Twitter</a>
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
  },
  computed: {
    formattedDate() {
      return Date.today();
    },
    userMentions() {
      return this.tweet.entities.user_mentions;
    }
  }
};
</script>

<style scoped>
.card .content {
  height: 100px;
  max-height: 100px;
}
.mentions {
  margin-right: 5px;
}
</style>
