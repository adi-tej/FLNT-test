import { createApp } from 'vue/dist/vue.esm-bundler'
import router from "./router"
import vuetify from "@/plugins/vuetify"
import "vuetify/dist/vuetify.min.css"

const app = createApp({
    vuetify
})
app.use(router)
app.mount('#app')
