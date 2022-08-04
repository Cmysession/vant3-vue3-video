import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Button, Icon, List, NavBar, Tag, Col, Row, Field, CellGroup, Cell, Form, Card, SubmitBar,RadioGroup, Radio 
} from 'vant'
import publicCss from './style/public.css'

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
    .use(Form)
    .use(Card)
    .use(RadioGroup)
    .use(Radio)
    .use(SubmitBar)
    .use(router)
    .mount('#app')
