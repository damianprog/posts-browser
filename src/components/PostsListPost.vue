<template>
  <article class="posts-list-post">
    <div class="text-content">
      <h3>{{ post.title }}</h3>
      <p>
        {{ shortenedPostText }}
      </p>
    </div>

    <a class="more-button">Zobacz więcej</a>
  </article>
</template>

<script>
export default {
  name: "PostsListPost",

  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    shortenedPostText() {
      return this.post.body ? `${this.post.body.slice(0, 60)}...` : "";
    },
  },
};
</script>

<style scoped lang="scss">
.posts-list-post {
  border-radius: 8px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h3,
  p {
    margin: 0 0 10px 0;
  }

  .more-button {
    color: #8a2be2;
    background: #f3eafc;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
  }
}
</style>