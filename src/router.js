import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

const routes = [
    { path: '/', name: 'App', component: App },
    { path: '/home', name: 'Home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
