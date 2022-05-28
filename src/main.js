import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueGravatar from "vue3-gravatar";
<<<<<<< Updated upstream
=======
import MDialogPlugin from 'vue-m-dialog'
import 'vue-m-dialog/dist/style.css'
>>>>>>> Stashed changes

import router from './router'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueGravatar);
<<<<<<< Updated upstream
=======
app.use(MDialogPlugin)
>>>>>>> Stashed changes
app.mount('#app')
