<template>
    <div>
       
    </div>
</template>
<script>


import { onMounted, reactive } from 'vue'


export default {
    components: {

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
            // new MuiPlayer({
            //     container: '#mui-player',
            //     title: options.title,
            //     src: options.src,
            //     plugins: [

            //     ],
            //     parse: {
            //         type: 'hls',
            //         loader: Hls,
            //         config: { // hls config to：https://github.com/video-dev/hls.js/blob/HEAD/docs/API.md#fine-tuning
            //             debug: false,
            //         },
            //     },
            // })
        })
        return { options }
    }
}
</script>

<style scoped>
</style>