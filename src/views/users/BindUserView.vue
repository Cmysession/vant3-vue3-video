<template>
    <div>
        <div id="back-box">
            <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box" :title="init.title">
            </van-nav-bar>
        </div>
        <div id="body-box">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="init.username" autocomplete="off" name="username" label="登陆账号" placeholder="绑定账号后无法更改"
                        :rules="[{ required: true, message: '请填写登陆账号' }]" />
                    <van-field v-model="init.password" autocomplete="off" name="password" type="password" label="登陆密码" placeholder="登陆密码"
                        :rules="[{ required: true, message: '请填写登陆密码' }]" />
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
            title: "绑定账号",
            username: "",
            password: "",
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

#back-box {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
}

#body-box {
    margin: 60px 0;
}

.van-cell,
.van-cell-group {
    background: #2e2e2e;
}

:deep(.van-field__control) {
    color: #FFFFFF;
}
</style>