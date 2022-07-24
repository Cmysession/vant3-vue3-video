<template>
    <div id="search-body-box">
        <header class="header-box">
            <van-row>
                <van-col @click="onClickLeft" span="4">
                    <van-icon name="arrow-left" />返回
                </van-col>
                <van-col span="16">
                    <van-field autocomplete="off" v-model="init.searchValue" class="field-box" />
                </van-col>
                <van-col span="4">
                    <van-button type="primary" @click="onToView('search-info-view')" size="small">搜索</van-button>
                </van-col>
            </van-row>
        </header>

        <div id="keys" class="bot-co">
            <div class="title">推荐关键词</div>
            <div>
                <van-button @click="onClickKeys(item)" v-for="(item, index) in init.keys" :key="index" type="default"
                    color="linear-gradient(to right, rgb(80 79 79), rgb(46 45 45))" size="small">
                    {{ item.name }}
                </van-button>
            </div>
        </div>

        <div id="tags" class="bot-co">
            <div class="title">推荐标签</div>
            <div>
                <van-tag @click="onClickTages(item)" color="#ffe1e1" v-for="(item, index) in init.tags" :key="index" size="large"
                    text-color="#ad0000"> #{{ item.name }}</van-tag>
            </div>
        </div>
    </div>
</template>
<script>

import { onMounted, reactive } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { Toast } from 'vant'
import 'vant/es/toast/style'
export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        const init = reactive({
            searchValue: '',
            keys: [
                { uid: '1', name: '丧失人性' },
                { uid: '2', name: '美玉无瑕' },
                { uid: '3', name: '设置原则' },
            ],
            tags: [
                { uid: '1', name: '使用' },
                { uid: '2', name: '图书管学' },
                { uid: '3', name: '技巧' },
                { uid: '4', name: '设置原则' },
                { uid: '5', name: '文献' },
                { uid: '6', name: '排名' },
                { uid: '7', name: '热门预测' },
                { uid: '8', name: '分布' },
            ]
        })

        /**
         * 返回事件
         */
        const onClickLeft = function () {
            router.go(-1)
        }

        /**
         * 跳转其他页面
         * @param {*} name 
         */
        const onToView = function (name) {
            if (init.searchValue.length <= 0) {
                Toast({
                    message: '请输入或选择关键词！',
                    position: 'top',
                });
                return false
            }
            router.replace({ name: name, query: { search: init.searchValue } })
        }

        /**
         * 点击关键字
         * @param {*} item 
         */
        const onClickKeys = function (item) {
            init.searchValue = item.name
            onToView('search-info-view')
        }

        /**
         * 点击标签
         * @param {*} item 
         */
        const onClickTages = function (item) {
            init.searchValue += "#"+item.name
        }

        onMounted(function () {
            if (route.query && route.query.search) {
                init.searchValue = route.query.search
            }
        })

        return { init, onClickLeft, onToView, onClickKeys,onClickTages }
    }
}
</script>

<style scoped>
#search-body-box .header-box {
    width: 100%;
    height: 46px;
    background: #212121;
    border-bottom: 1px inset #313131;
}

#search-body-box .header-box .van-col {
    font-size: 14px;
    color: #c3c3c3;
    position: relative;
    display: flex;
    align-items: center;
}

#search-body-box .header-box .van-col:nth-child(1) {
    padding-left: 10px;
}

#search-body-box .header-box .van-col:nth-child(3) {
    padding-left: 5px;
}

#search-body-box .header-box .van-col:nth-child(3) button {
    border-radius: 12px;
    padding: 12px;
}

:deep(.field-box) {
    border-radius: 10px;
    height: 35px;
    background: #3d3d3d;
}

.van-row {
    margin-top: 10px;
}

:deep(.van-field__value) {
    overflow: inherit;
}

:deep(.van-field__control) {
    color: #FFFFFF;
    margin-top: -5px;
}

#keys button {
    margin: 5px;
    border-radius: 10px;
    padding: 0 15px;
}

.bot-co {
    width: 100%;
    background: #212121;
    border-bottom: 1px inset #313131;
    padding: 10px 0;
}

.bot-co .title {
    font-size: 14px;
    margin: 0px 0px 10px 5px;
    font-weight: bold;
}

#tags span {
    margin: 5px;
}
</style>