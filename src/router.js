import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", name: "App", component: App },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
