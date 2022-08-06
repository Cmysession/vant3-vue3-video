<template>
    <div>
        <!-- <videoPlay v-if="options.src" ref="videoRef" v-bind="options" :src="options.src" :type="options.type"
            :poster='options.poster' /> -->
        <div id="mui-player"></div>
    </div>
</template>
<script>

import "vue3-video-play/dist/style.css" // 引入css
// import { videoPlay } from "vue3-video-play" // 引入组件
import { onMounted, reactive } from 'vue'
// 使用模块管理器引入插件
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
import Hls from 'hls.js'

export default {
    components: {
        // videoPlay,
    },
    setup() {
        const options = reactive({
            poster: '', //视频图片
            width: "100%",
            height: '250px',
            src: "", //视频源
            type: "m3u8", //视频类型
            title: '123',
            autoPlay: true,
            speedRate: ["2.0", "1.0", "1.5", "1.25", "0.75", "0.5"],
        })

        function getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) { return pair[1]; }
            }
            return (false);
        }
        onMounted(function () {
            options.src = getQueryVariable('src')
            new MuiPlayer({
                container: '#mui-player',
                title: options.title,
                src: options.src,
                plugins: [

                ],
                parse: {
                    type: 'hls',
                    loader: Hls,
                    config: { // hls config to：https://github.com/video-dev/hls.js/blob/HEAD/docs/API.md#fine-tuning
                        debug: false,
                    },
                },
            })
        })
        return { options }
    }
}
</script>

<style scoped>
</style>