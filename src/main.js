import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueGravatar from "vue3-gravatar";

import router from './router'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueGravatar);
app.mount('#app')
