<template>
    <div>
        <div id="back-box">
            <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box" :title="init.title">
            </van-nav-bar>
        </div>
        <div id="body-box">
            <p>1. 会员可以在【购买套产】内购买,购买后可以享受在此平台免费观看所有视频。</p>
            <p>2. 金币可以在【购买套产】内购买,购买后可以在此平台购买视频。</p>
            <p>2. 有的视频需要购买会员后再次需要金币支付。</p>
            <p>3. 此产品会不定期在平台发售福利兑换,请持续关注此产品。</p>
            <p>4. 资源来之不易,希望大家多多支持此产品。</p>
            <p>5. 如有遇到问题请联系客服。</p>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    setup() {
        const onClickLeft = () => history.back()

        const init = reactive({
            title: "产品介绍",

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

#body-box {
    margin: 10px;
}
</style>