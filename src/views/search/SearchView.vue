<template>
    <div id="search-body-box">
        <header class="header-box">
            <van-row>
                <van-col @click="onClickLeft" span="4">
                    <van-icon name="arrow-left" />返回
                </van-col>
                <van-col span="16">
                    <van-field class="field-box" />
                </van-col>
                <van-col span="4">
                    <van-button type="primary" size="small">搜索</van-button>
                </van-col>
            </van-row>
        </header>
    </div>
</template>

<script>
import { Toast } from 'vant';
import { reactive } from 'vue'

export default {
    setup() {
        const init = reactive({
            value: '',
        })

        /**
         * 返回事件
         */
        const onClickLeft = function () {
            history.back()
        }

        const onSearch = (val) => Toast(val);
        const onClickButton = () => Toast(init.value);
        return { init, onSearch, onClickButton, onClickLeft }
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

}
</style>