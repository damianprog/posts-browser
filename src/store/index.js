import { createStore } from 'vuex';
import { RepositoryFactory } from '../api/repository-factory.js';
const PostsRepository = RepositoryFactory.get('posts');
const UsersRepository = RepositoryFactory.get('users');

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
  actions: {
    async setPosts({ commit }) {
      let posts = await PostsRepository.get();

      if (!posts) posts = [];

      commit('setPosts', posts);
    },
    async setUsers({ commit }) {
      let users = await UsersRepository.get();

      if (!users) users = [];

      commit('setUsers', users);
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
