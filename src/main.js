import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Button, Icon, List, NavBar, Tag, Col, Row, Field, CellGroup,Cell
} from 'vant'
import publicCss from './style/public.css'
import vue3videoPlay from "vue3-video-play" // 引入组件
import "vue3-video-play/dist/style.css" // 引入css

createApp(App)
    .use(store)
    .use(publicCss)
    .use(Button)
    .use(Icon)
    .use(List)
    .use(NavBar)
    .use(Tag)
    .use(Col)
    .use(Row)
    .use(Field)
    .use(Cell)
    .use(CellGroup)
    .use(vue3videoPlay)
    .use(router)
    .mount('#app')
