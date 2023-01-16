import { createApp } from "vue/dist/vue.esm-bundler";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const app = createApp({});
app.use(router);
app.use(vuetify);
app.mount("#app");
