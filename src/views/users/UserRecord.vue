<template>
    <div id="content-box">
        <div id="back-box">
            <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box" :title="init.title">
            </van-nav-bar>
        </div>
        <div id="body-box">
            <div>
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
                <van-cell center title="2021-20-20 10:99" value="¥ 20 元" label="购买会员" />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    setup() {
        const onClickLeft = () => history.back()

        const init = reactive({
            title: "消费记录",

        })

        return { init, onClickLeft }
    }
}
</script>

<style  scoped>
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
#back-box {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
}

#body-box {
    margin: 60px 0;
}
.van-cell {
    color: rgb(255, 255, 255);
    background: #ffffff00;
}
.van-cell__value {
    color: red;
}
:deep(.van-cell__value) {
    font-size: 15px;
    font-weight: bold;
    color: #b34d4d;
}

#content-box {
    height: 100vh;
    position: relative;
    overflow-y: auto;
    scrollbar-width: none;
    /* Firefox */

    -ms-overflow-style: none;
    /* IE 10+ */
}

#content-box::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}

</style>