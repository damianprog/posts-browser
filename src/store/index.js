import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
    users: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },

    setUsers(state, users) {
      state.users = users;
    },

    deletePost(state, postId) {
      const filteredPosts = state.posts.filter(
        (post) => post.id !== Number(postId)
      );
      state.posts = filteredPosts;
    },
  },
  getters: {
    getPostById: (state) => (id) => {
      const foundPost = state.posts.find((post) => post.id === Number(id));
      return foundPost;
    },
    getUserById: (state) => (id) => {
      const foundUser = state.users.find((user) => user.id === Number(id));
      return foundUser;
    },
  },
  modules: {},
});
