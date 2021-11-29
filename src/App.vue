<template>
  <app-header />
  <router-view v-if="!loading"></router-view>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",

  components: { AppHeader },

  data() {
    return {
      loading: true,
    };
  },

  async mounted() {
    await this.$store.dispatch("setPosts");
    await this.$store.dispatch("setUsers");

    this.loading = false;
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
