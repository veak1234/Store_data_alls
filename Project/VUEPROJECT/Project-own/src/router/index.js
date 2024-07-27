import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'bg-danger text-white border-bottom',
  })
  
  export default router;