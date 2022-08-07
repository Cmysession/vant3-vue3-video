<template>
    <div>
        <div id="back-box" @click="onClickLeft">
            返回
        </div>
        <div id="body-box">
            <iframe id="iframe-box" :src="init.link" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>

import { onMounted, reactive } from 'vue'

export default {
    setup() {
        const onClickLeft = () => history.back()


        const init = reactive({
            link: "",
        })

        onMounted(function(){
            console.log()
            init.link = '//www.baidu.com'
        })
        return { onClickLeft, init }
    }
}
</script>

<style  scoped>
#back-box{
    position: fixed;
    top: 10px;
    left: 10px;
    height: 45px;
    width: 45px;
    line-height: 45px;
    text-align: center;
    background: rgb(41, 41, 41);
    font-size: 13px;
    font-weight: bold;
    border-radius: 50px;
    border: 2px red solid;
}
#body-box,#iframe-box{
    width: 100%;
    height: 100vh;
    background: #212121;
}
</style>