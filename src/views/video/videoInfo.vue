<template>
    <div>
       <videoPlay v-if="options.src" ref="videoRef" v-bind="options" :src="options.src" :type="options.type"
                :poster='options.poster' />
    </div>
</template>
<script>

import "vue3-video-play/dist/style.css" // 引入css
import { videoPlay } from "vue3-video-play" // 引入组件
import { reactive } from 'vue'

export default {
    components: {
        videoPlay,
    },
    setup() {
        const options = reactive({
            poster: '', //视频图片
            width: "100%",
            height: '250px',
            src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', //视频源
            type: "m3u8", //视频类型
            title: '123',
            autoPlay: true,
            speedRate: ["2.0", "1.0", "1.5", "1.25", "0.75", "0.5"],
        });
        return { options }
    }
}
</script>

<style scoped>
</style>