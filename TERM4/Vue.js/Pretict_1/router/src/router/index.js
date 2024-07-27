import { createWebHashHistory, createRouter } from 'vue-router'  /// for use routes web
// import { createMemoryHistory, createRouter } from 'vue-router'/// for use routes they don't log
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import CategoryPage from '@/views/CategoryPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryPage
  },

]

const router = createRouter({
//   history: createMemoryHistory(),
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'bg-primary text-white border-bottom',
})

export default router;
