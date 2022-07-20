<template>
    <div>
        <div id="content-box">
            <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box"
                :title="init.rowData.title" />
        </div>
    </div>
</template>

<script>
import { getData } from '@/tools/DataInfo'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
export default {
    setup() {
        const route = useRoute()
        const onClickLeft = () => history.back();
        const init = reactive({
            rowData: {},
        })
        onMounted(function () {
            init.rowData = getData(route.query.row)
        })
        return { init, onClickLeft }
    }
}
</script>

<style scoped>
:deep(.van-nav-bar) {
    background: #212121;
    border-bottom: 1px inset #313131;
}

:deep(.van-nav-bar__title) {
    color: rgb(255, 255, 255);
}

:deep([class*=van-hairline]:after) {
    border: 0;
}

:deep(.van-nav-bar .van-icon),
:deep(.van-nav-bar__text) {
    color: #c3c3c3;
}
</style>