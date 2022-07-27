<template>
    <div>
        <div id="content-box">
            <div id="back-box">
                <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box" :title="init.title">
                </van-nav-bar>
            </div>
            <div id="body-box">
                <van-radio-group v-model="init.checked">
                    <div class="shop-item" @click="onClickItem(item)" v-for="(item, index) in init.shopList"
                        :key="index">
                        <van-card :tag="item.tag" :price="item.price" :desc="item.desc" :title="item.title"
                            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" origin-price="10.00" />
                        <van-radio checked-color="#ee0a24" @change="onClickItem(item)" :name="item.uid"></van-radio>
                    </div>


                </van-radio-group>
            </div>
            <van-submit-bar :price="init.price" :loading="init.subLoading" button-text="提交订单" @submit="onSubmit" />
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
import 'vant/es/toast/style'
import { reactive } from 'vue'

export default {
    setup() {
        const onClickLeft = () => history.back()

        const init = reactive({
            title: "购买套餐",
            subLoading: false,
            checked: '',
            price: 0,
            shopList: [
                {
                    uid: '1',
                    title: '1000金币',
                    tag: '金币',
                    origin_price: '12.00',
                    price: '10.00',
                    desc: '描述下哦',
                },
                {
                    uid: '2',
                    title: '30天｜月卡',
                    tag: 'VIP',
                    origin_price: '120.00',
                    price: '99.00',
                    desc: '描述下哦',
                },
            ],
        })

        const onSubmit = function () {
            if (!init.checked) {
                Toast({
                    message: '请输入或选择关键词！',
                    position: 'top',
                })
                return false
            }
            console.log(init.checked)
        }

        /**
         * 点击详情
         */
        const onClickItem = function (item) {
            console.log(item)
            init.checked = item.uid
            init.price = parseInt(item.price) * 100
        }

        return { onClickLeft, init, onSubmit, onClickItem }
    }
}
</script>

<style  scoped>
#content-box {
    height: 100vh;
}

#content-box::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}

#content-box {
    scrollbar-width: none;
    /* firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
    overflow-x: hidden;
    overflow-y: auto;
}

#back-box {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
}

#body-box {
    margin: 50px 0;
}

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


.van-cell,
.van-cell-group {
    background: #2e2e2e;
}

:deep(.van-field__control) {
    color: #FFFFFF;
}

.van-card {
    position: relative;
    box-sizing: border-box;
    padding: var(--van-card-padding);
    color: #ffffff;
    font-size: var(--van-card-font-size);
    background: #6e6e6e;
    border-radius: 10px;
}

:deep(.van-card__desc) {
    color: #cacaca;
}

:deep(.van-card__price div),
:deep(.van-card__origin-price) {
    color: red;
}

:deep(.van-submit-bar) {
    background: #212121 !important
}

:deep(.van-submit-bar__text) {
    color: #FFFFFF;
}

.van-radio {
    position: relative;
    left: 89%;
    top: -63px;
}
</style>