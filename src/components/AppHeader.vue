<template>
  <header class="app-header">
    <h2 @click="redirectToPostsList">Posts Browser</h2>
  </header>
</template>

<script>
export default {
  name: "AppHeader",

  methods: {
    redirectToPostsList() {
      this.$router.push({ name: "posts-list" });
    },
  },
};
</script>

<style scoped lang="scss">
.app-header {
  font-weight: normal;

  h2 {
    cursor: pointer;
    display: inline-block;
  }
}
</style>