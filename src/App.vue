<template>
  <app-header />
  <router-view v-if="!loading"></router-view>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import axios from "axios";

export default {
  name: "App",

  components: { AppHeader },

  data() {
    return {
      loading: true,
    };
  },

  methods: {
    getObjectData(object) {
      let objectData = [];

      if (object && object.data) {
        objectData = object.data;
      }

      return objectData;
    },
    async fetchPosts() {
      const fetchedPosts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const fetchedPostsData = this.getObjectData(fetchedPosts);

      return fetchedPostsData;
    },
    async fetchUsers() {
      const fetchedUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const fetchedUsersData = this.getObjectData(fetchedUsers);

      return fetchedUsersData;
    },
  },

  async mounted() {
    try {
      const posts = await this.fetchPosts();
      this.$store.commit("setPosts", posts);

      const users = await this.fetchUsers();
      this.$store.commit("setUsers", users);

      this.loading = false;
    } catch (error) {
      console.log("Fetching data failed...", error);
    }
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0 40px;
  min-height: 100vh;
  background: #eeeeee;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
