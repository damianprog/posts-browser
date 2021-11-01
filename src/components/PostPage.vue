<template>
  <div class="post-page">
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p>{{ user.name }}</p>
      <p>
        {{ post.body }}
      </p>
    </div>
    <p v-else>Nie znaleziono postu</p>
  </div>
</template>

<script>
export default {
  name: "PostPage",

  computed: {
    post() {
      const postId = this.$route.params.id;
      const post = this.$store.getters.getPostById(postId);

      return post;
    },
    user() {
      const userId = this.post.userId;

      const user = this.$store.getters.getUserById(userId);

      return user;
    },
  },
};
</script>

<style scoped lang="scss">
.post-page {
  display: flex;
  justify-content: center;
  .post {
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    max-width: 500px;
    min-height: 300px;

    h3,
    p {
      margin: 0 0 10px 0;
    }
  }
}
</style>