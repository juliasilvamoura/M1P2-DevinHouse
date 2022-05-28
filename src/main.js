import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueGravatar from "vue3-gravatar";
import MDialogPlugin from 'vue-m-dialog'
import 'vue-m-dialog/dist/style.css'


import router from './router'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueGravatar);
app.use(MDialogPlugin)
app.mount('#app')
