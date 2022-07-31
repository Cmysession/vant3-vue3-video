<template>
    <div>
        <div id="back-box">
            <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box" :title="init.title">
            </van-nav-bar>
        </div>
        <div id="body-box">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="init.oldPassword" type="password" autocomplete="off" name="oldPassword" label="旧密码" placeholder="旧密码"
                        :rules="[{ required: true, message: '请填旧密码' }]" />
                    <van-field v-model="init.newPassword" type="password" autocomplete="off" name="newPassword" label="新密码" placeholder="新密码"
                        :rules="[{ required: true, message: '请填写新密码' }]" />
                    <van-field v-model="init.rePassword" type="password" autocomplete="off" name="rePassword" label="确认密码" placeholder="确认密码"
                        :rules="[{ required: true, message: '请确认密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        {{ init.title }}
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
            title: "修改密码",
            oldPassword: "",
            newPassword: "",
            rePassword: ""
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