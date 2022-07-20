import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Icon,List } from 'vant'
import publicCss from './style/public.css'

createApp(App)
    .use(store)
    .use(publicCss)
    .use(Button)
    .use(Icon)
    .use(List)
    .use(router)
    .mount('#app')
