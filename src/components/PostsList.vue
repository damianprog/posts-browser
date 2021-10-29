<template>
  <div class="posts-list">
    <div class="posts-list-items">
      <posts-list-post
        v-for="post in currentPagePosts"
        :key="post.id"
        :post="post"
      >
      </posts-list-post>
    </div>

    <div class="posts-list-pagination">
      <pagination :pagesQuantity="pagesQuantity" @change="changePage($event)" />
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import PostsListPost from "./PostsListPost.vue";

export default {
  name: "PostsList",

  components: { PostsListPost, Pagination },

  props: {
    posts: Array,
    default: () => [],
  },

  data() {
    return {
      currentPage: 1,
      postsPerPage: 10,
    };
  },

  computed: {
    currentPagePosts() {
      const indexOfLastPost = this.currentPage * this.postsPerPage;
      const indexOfFirstPost = indexOfLastPost - this.postsPerPage;
      const currentPosts = this.posts.slice(indexOfFirstPost, indexOfLastPost);

      return currentPosts;
    },
    pagesQuantity() {
      return Math.ceil(this.posts.length / 10);
    },
  },

  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>

<style scoped lang="scss">
.posts-list {
  .posts-list-items {
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 240px;
  }
  @media (max-width: 1200px) {
    .posts-list-items {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .posts-list-items {
      grid-template-columns: 1fr;
    }
  }

  .posts-list-pagination {
    display: flex;
    justify-content: center;
    margin: 45px 0;
  }
}
</style>