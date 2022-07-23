<template>
    <div id="search-body-box">
        <header class="header-box">
            <van-row>
                <van-col @click="onClickLeft" span="4">
                    <van-icon name="arrow-left" />返回
                </van-col>
                <van-col span="16">
                    <van-field :disabled="true" class="field-box" v-model="init.searchValue" />
                </van-col>
                <van-col span="4" @click="delSearchValue">
                    <van-icon name="cross" />
                </van-col>
            </van-row>
        </header>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

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
            router.replace({
                name: 'search-view',
                query: { search: init.searchValue }
            })
        }


        /**
         * 清空搜索
         * @param {*} row 
         */
        const delSearchValue = function () {
            router.replace({
                name: 'search-view',
            })
        }

        onMounted(function () {
            if (route.query && route.query.search) {
                init.searchValue = route.query.search
            }
        })

        return { init, onClickLeft, delSearchValue }
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
    padding-left: 20px;
    font-size: 22px;
}

:deep(.field-box) {
    border-radius: 10px;
    height: 35px;
    background: #292929;
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