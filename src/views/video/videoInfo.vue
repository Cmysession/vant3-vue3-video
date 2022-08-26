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
            src: '',
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
                poster: 'https://i.ytimg.com/vi/nhUNJhM_NAk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsb3JqJRzblxGurHeuZ7RQGiWq1w',
                title: '',
                src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                autoplay: true,
                dragSpotShape: "square",
                videoAttribute: [
                    { attrKey: 'webkit-playsinline', attrValue: 'webkit-playsinline' },
                    { attrKey: 'playsinline', attrValue: 'playsinline' },
                    { attrKey: 'x5-video-player-type', attrValue: 'h5-page' },
                ],
                parse: {
                    type: 'hls',
                    loader: Hls,
                    config: {
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
#my-player {
    width: 100%;
    height: 250px;
}

:deep(#mui-player) {
    height: 250px !important;
}

:deep(.mplayer-header .title-groupt .back-button svg) {
    display: none;
}
</style>