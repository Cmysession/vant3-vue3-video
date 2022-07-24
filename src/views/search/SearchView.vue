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
    </div>
</template>
<script>

import { onMounted, reactive } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { Toast } from 'vant'
export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        const init = reactive({
            searchValue: '',
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
                Toast('请输入关键字!')
                return false
            }
            router.replace({ name: name, query: { search: init.searchValue } })
        }

        onMounted(function () {
            if (route.query && route.query.search) {
                init.searchValue = route.query.search
            }
        })

        return { init, onClickLeft, onToView }
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
    padding-left: 16px;
}

#search-body-box .header-box .van-col:nth-child(3) {
    padding-left: 10px;
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
</style>