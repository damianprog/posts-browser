<template>
  <div class="dashboard">
    <app-header />
    <posts-list :posts="posts" />
  </div>
</template>

<script>
import axios from "axios";
import PostsList from "./PostsList.vue";
import AppHeader from "./AppHeader.vue";

export default {
  name: "Dashboard",

  components: { PostsList, AppHeader },

  data() {
    return {
      posts: [],
    };
  },

  async mounted() {
    try {
      const fetchedPosts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const fetchedUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      // const usersById = fetchedUsers.reduce()

      this.posts = fetchedPosts.data ? fetchedPosts.data : [];
    } catch (error) {
      console.log("Fetching posts data failed...", error);
    }
  },
};
</script>

<style scoped>
.dashboard {
  padding: 0 40px;
}
</style>