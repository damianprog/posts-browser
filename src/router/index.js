import { createWebHistory, createRouter } from 'vue-router';
import PostsList from '../components/PostsList.vue';
import PostPage from '../components/PostPage.vue';

const routes = [
  {
    path: '/',
    name: 'posts-list',
    component: PostsList,
  },
  {
    path: '/post/:id',
    name: 'post-page',
    component: PostPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
