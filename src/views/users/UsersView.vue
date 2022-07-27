<template>
    <div>
        <div id="back-box">
            <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box" :title="init.title">
            </van-nav-bar>
        </div>
        <div id="body-box">
            <div id="content-box">
                <van-cell-group inset>
                    <van-cell :title="init.username" label="邀请码：CODEOUIO">
                    </van-cell>
                </van-cell-group>

                <div class="my-money-info">
                    <van-cell-group inset>
                        <van-cell>
                            <van-grid :column-num="3" :border="false">
                                <van-grid-item icon="medal-o" text="等级:V1" />
                                <van-grid-item icon="gold-coin-o" text="余额:100" />
                                <van-grid-item icon="cash-back-record" text="充值" />
                            </van-grid>
                        </van-cell>
                        <van-cell>
                            <van-grid class="tx" direction="horizontal" :column-num="2" :border="false">
                                <van-grid-item icon="star-o" text="我的收藏" />
                                <van-grid-item icon="browsing-history-o" text="观影历史" />
                            </van-grid>
                        </van-cell>
                    </van-cell-group>
                </div>

                <div class="oth-box">

                    <van-cell-group inset>
                        <van-cell icon="setting-o" title="绑定账号" is-link to="/bind-user" />
                    </van-cell-group>
                    
                    <van-cell-group inset>
                        <van-cell icon="balance-list-o" title="消费记录" is-link to="/" />
                    </van-cell-group>

                    <van-cell-group inset>
                        <van-cell icon="service-o" title="联系客服" is-link to="/" />
                    </van-cell-group>

                </div>

                <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" round="" type="primary" block>
                    切换账号
                </van-button>
            </div>

        </div>
    </div>
</template>

<script >
import { reactive } from 'vue'

export default {
    setup() {
        const onClickLeft = () => history.back()

        const init = reactive({
            title: "我的信息",
            username: "xiaomu"
        })


        return {
            onClickLeft,
            init
        }
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


#content-box {
    margin-top: 10px;
}

.custom-title {
    margin-right: 4px;
    vertical-align: middle;
}

.search-icon {
    font-size: 16px;
    line-height: inherit;
}

.van-cell-group {
    background: none;
}

.my-avatar {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 3.5rem;
    background-size: 3.5rem;
}

:deep(.van-cell__label) {
    color: #d4d4d4 !important;
}

.van-cell {
    background: #484848;
    color: #ffffff;
    font-size: 1.2rem;
}

.oth-box .van-cell {
    background: #ffffff00;
    color: #ffffff;
    font-size: 0.5rem;
}

.oth-box {
    margin-top: 0.5rem;
}

.oth-box .van-cell-group {
    margin-top: 0.2rem;
}

.my-money-info {
    margin-top: 0.3rem;
}


.van-grid-item {
    height: 4rem;
}

:deep(.van-grid-item) {
    height: 3.5rem;
}

:deep(.tx .van-icon) {
    color: #b74b4b !important;
}

:deep(.tx .van-grid-item) {
    height: 2.5rem;
}

:deep(.van-grid-item__content) {
    background: #484848;
}

:deep(.van-grid-item__icon) {
    color: #ffffff;
}

:deep(.van-grid-item__text) {
    color: #e3e3e3;
}

:deep(.my-money-info .van-cell) {
    background: #2f2e2e;
}

:deep(.my-money-info .van-grid-item__content) {
    background: rgb(255 0 0 / 0%);
}

:deep(.my-money-info .van-grid-item__icon) {
    color: rgb(174 164 255);
}

:deep(.van-cell__right-icon) {
    color: #ffffff;
}

:deep(.van-button--block) {
    width: 90%;
    margin: 1rem 1rem;
}

:deep(.oth-box .van-cell__left-icon) {
    color: rgb(255 149 183);
}
</style>