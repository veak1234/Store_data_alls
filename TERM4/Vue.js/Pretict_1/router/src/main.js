import { createApp } from 'vue'
import App from './App.vue'
import Route from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js' 

createApp(App).use(Route).use(bootstrap).mount('#app')

// import { createApp } from 'vue'
// import categroyPage from './views/CategoryPaye.vue';
// import router from './router';
// import 'bootstrap/dist/css/bootstrap.css'
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js' 

// createApp(categroyPage).use(bootstrap).use(router).mount('#app')