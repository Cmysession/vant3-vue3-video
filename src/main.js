import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Icon,List } from 'vant'


createApp(App)
    .use(store)
    .use(Button)
    .use(Icon)
    .use(List)
    .use(router)
    .mount('#app')
