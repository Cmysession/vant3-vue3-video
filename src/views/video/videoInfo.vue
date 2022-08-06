<template>
    <div>
        <div id="mui-player" controls="controls"></div>
    </div>
</template>
<script>


import { onMounted, reactive } from 'vue'

// 引入video.js先关的js和css
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
import Hls from 'hls.js'
export default {
    components: {

    },
    setup() {
        const options = reactive({
            poster: '//vjs.zencdn.net/v/oceans.png', //视频图片
            playbackRates: [0.5, 1, 1.5, 2],
            autoplay: true, // 如果true,浏览器准备好时开始播放。
            muted: true, // 默认情况下将会消除任何音频。
            loop: true, // 导致视频一结束就重新开始。
            preload: 'auto', // auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',  //汉化
            fluid: true, // 当true时，播放器将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
                // type: '',
                // src:  '//test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' //视频播放地址
            }],
            notSupportedMessage: '此视频暂无法播放，请稍后再试', // 无法播放媒体源时显示的默认信息。
            controlBar: {
                timeDivider: true,
                durationDisplay: true,  //视频时长时间显示
                remainingTimeDisplay: false,  //剩余时间显示
                fullscreenToggle: true // 全屏按钮
            },
            errorDisplay: false,  //错误显示
            posterImage: false,  //视频的预览海报图片显示
            bigPlayButton: true,  //视频中间的播放按钮显示
            textTrackDisplay: false
        })



        /**
         * 获取URL
         * @param {*} variable 
         */
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
                title: '标题',
                src: '//test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                parse: {
                    type: 'hls',
                    loader: Hls,
                    config: {
                        debug: false,
                    },
                },
            })
            let videoBox = document.getElementsByTagName("video")[0]
            if (videoBox) {
                videoBox.setAttribute('webkit-playsinline', true)
                videoBox.setAttribute('playsinline', true)
            }
        })
        return { options }

    }
}
</script>

<style scoped>
#my-player {
    width: 100%;
    height: 250px;
}

:deep(#mui-player) {
    height: 250px !important;
}
</style>