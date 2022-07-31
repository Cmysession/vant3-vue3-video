<template>
    <div>
        <div id="back-box">
            <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box" :title="init.title">
            </van-nav-bar>
        </div>
        <div id="body-box">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="init.code" autocomplete="off" name="code" label="兑换码" placeholder="请输入兑换码"
                        :rules="[{ required: true, message: '请填写兑换码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        {{init.title}}
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    setup() {
        const onClickLeft = () => history.back()

        const init = reactive({
            title: "福利兑换",
            code: "",
        })

        const onSubmit = (values) => {
            console.log('submit', values);
        }
        return { onClickLeft, init, onSubmit }
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
    margin-top: 10px;
}

.van-cell,
.van-cell-group {
    background: #2e2e2e;
}

:deep(.van-field__control) {
    color: #FFFFFF;
}
</style>