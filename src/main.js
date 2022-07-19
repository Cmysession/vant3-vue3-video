import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant'
import { Icon } from 'vant'

createApp(App)
    .use(store)
    .use(Button)
    .use(Icon)
    .use(router)
    .mount('#app')
