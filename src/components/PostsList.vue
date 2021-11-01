<template>
  <div class="posts-list">
    <div class="filters">
      <users-select @selectUser="onSelectUser($event)" />
      <search @textInput="onSearchInput($event)" />
    </div>
    <div v-if="filteredPosts.length > 0" class="posts-list-items">
      <posts-list-post
        v-for="post in currentPagePosts"
        :key="getPostKey(post)"
        :post="post"
      >
      </posts-list-post>
    </div>
    <p v-else>Nie znaleziono postów</p>
    <div class="posts-list-pagination">
      <pagination
        :pagesQuantity="pagesQuantity"
        :selectedPage="currentPage"
        @change="changePage($event)"
      />
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import PostsListPost from "./PostsListPost.vue";
import Search from "./Search.vue";
import UsersSelect from "./UsersSelect.vue";

export default {
  name: "PostsList",

  components: { PostsListPost, Pagination, Search, UsersSelect },

  data() {
    return {
      currentPage: 1,
      postsPerPage: 10,
      filters: {
        title: "",
        userId: "",
      },
    };
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },
    filteredPosts() {
      const filteredPosts = this.posts.filter(
        (post) =>
          post.title.includes(this.filters.title) &&
          (this.filters.userId === "" || post.userId === this.filters.userId)
      );

      return filteredPosts;
    },
    currentPagePosts() {
      const indexOfLastPost = this.currentPage * this.postsPerPage;
      const indexOfFirstPost = indexOfLastPost - this.postsPerPage;
      const currentPosts = this.filteredPosts.slice(
        indexOfFirstPost,
        indexOfLastPost
      );

      return currentPosts;
    },
    pagesQuantity() {
      return Math.ceil(this.filteredPosts.length / 10);
    },
  },

  methods: {
    getPostKey(post) {
      return `${post.id}-post`;
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    onSearchInput(text) {
      this.filters.title = text;
      this.changePage(1);
    },
    onSelectUser(user) {
      this.filters.userId = user ? user.id : "";
      this.changePage(1);
    },
  },
};
</script>

<style scoped lang="scss">
.posts-list {
  .filters {
    display: flex;
    justify-content: flex-end;
  }

  .users-select,
  .search {
    margin-bottom: 20px;
  }

  .posts-list-items {
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 240px;
  }

  .users-select {
    margin-right: 20px;
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

    .filters {
      flex-direction: column;
    }
  }

  .posts-list-pagination {
    display: flex;
    justify-content: center;
    margin: 45px 0;
  }
}
</style>