<template>
    <div id="content-box">
        <div id="top-box">
            <div id="back-box">
                <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box" right-text="刷新"
                    @click-right="onClickRight" :title="init.rowData.title">
                </van-nav-bar>
            </div>

            <div id="videoInfo">
                <videoPlay v-if="options.src" ref="videoRef" v-bind="options" :src="options.src" :type="options.type"
                    :poster='options.poster' />
                <div class="txt-info" @click="onClickRight" v-if="!options.src">加载失败!点击重新加载!</div>
            </div>
        </div>

        <div id="body-box">
            <div class="title-box">
                <van-icon class="vip-box" v-if="!init.rowData.is_ad && init.rowData.vip" name="medal" />{{
                        init.rowData.title
                }}
            </div>
            <div class="info-box">
                <van-row>
                    <van-col span="9"><span class="dian">.</span>100次观看</van-col>
                    <van-col span="11"><span class="dian">.</span>2021-10-02 12:20</van-col>
                    <van-col span="4">
                        <van-icon color="red" name="star" />
                    </van-col>
                </van-row>
            </div>
            <div class="tags-box">
                <van-tag color="#ffe1e1" size="large" text-color="#ad0000">标签</van-tag>
                <van-tag color="#ffe1e1" size="large" text-color="#ad0000">标签</van-tag>
                <van-tag color="#ffe1e1" size="large" text-color="#ad0000">标签</van-tag>
                <van-tag color="#ffe1e1" size="large" text-color="#ad0000">标签</van-tag>
                <van-tag color="#ffe1e1" size="large" text-color="#ad0000">标签</van-tag>
            </div>

            <div id="recommend-box">
                <div class="recommend-title">
                    推荐其他
                </div>
                <div id="list-box">
                    <van-list v-model:loading="init.loading" :finished="init.finished" finished-text="没有更多了"
                        @load="onLoad">
                        <div class="item-box" v-for="(item, index) in init.dataLists" :key="index"
                            @click="rowInfo(item)">
                            <div class="cover-box">
                                <img :src="item.cover">
                                <div v-if="!item.is_ad && item.vip" class="vip-box">
                                    <van-icon class="icons-box" name="medal" />
                                </div>
                                <div v-if="!item.is_ad" class="times-box">{{ item.times }}</div>
                            </div>
                            <div class="title-box">
                                {{ item.title }}
                            </div>
                            <!-- <div class="info-box">
                                <div><span class="dian">.</span>{{ item.views }}次观看</div>
                                <div><span class="dian">.</span>{{ item.history }}</div>
                            </div> -->
                            <div class="info-box" v-if="!item.is_ad">
                                <div><span class="dian">.</span>{{ item.views }}次观看</div>
                                <div><span class="dian">.</span>{{ item.history }}</div>
                            </div>
                            <div class="ad-box" v-if="item.is_ad">
                                <van-button type="primary" block
                                    color="linear-gradient(to right, rgb(135 135 135), rgb(101 101 101))">
                                    {{ item.is_dow === true ? "点击下载" : "点击访问" }}
                                </van-button>
                            </div>
                        </div>
                    </van-list>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getData, setData } from '@/tools/DataInfo'
import 'vant/es/dialog/style'
import { Dialog } from 'vant'
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeRouteUpdate } from "vue-router"

import "vue3-video-play/dist/style.css" // 引入css
import { videoPlay } from "vue3-video-play" // 引入组件

export default {
    components: {
        videoPlay,
        [Dialog.Component.name]: Dialog.Component,
    },
    setup() {
        const router = useRouter()
        const videoRef = ref(null)
        const options = reactive({
            poster: '', //视频图片
            width: "100%",
            height: '250px',
            src: "", //视频源
            type: "m3u8", //视频类型
            title: '',
            autoPlay: true,
            muted: false,
            speedRate: ["2.0", "1.0", "1.5", "1.25", "0.75", "0.5"],
        });
        const route = useRoute()


        const init = reactive({
            rowData: {},
            dataLists: [
                {
                    cover: 'https://i.ytimg.com/vi/nhUNJhM_NAk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsb3JqJRzblxGurHeuZ7RQGiWq1w',
                    title: '小米34寸带鱼屏显示器对比体验，不输三星和宏碁，看完就知道该买谁了！',
                    times: '9:37',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    is_ad: true,// 是否广告
                    is_dow: true,
                    vip: true,
                    link: 'www.baidu.com',
                },
                {
                    cover: 'https://i.ytimg.com/vi/q2zj74iK1MI/hqdefault.jpg',
                    title: '合辑 - 房東的貓 - 【春風十里】MV 我說所有的酒都不如你',
                    times: '0:15',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    vip: true,
                    is_ad: true,// 是否广告
                    is_dow: false,
                    link: 'www.baidu.com',
                },
                {
                    cover: 'https://i.ytimg.com/vi/nhUNJhM_NAk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsb3JqJRzblxGurHeuZ7RQGiWq1w',
                    title: '小米34寸带鱼屏显示器对比体验，不输三星和宏碁，看完就知道该买谁了！',
                    times: '9:37',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    vip: true,
                    is_ad: false,// 是否广告
                    is_dow: false,
                    link: 'www.baidu.com',
                },
                {
                    cover: 'https://i.ytimg.com/vi/q2zj74iK1MI/hqdefault.jpg',
                    title: '合辑 - 房東的貓 - 【春風十里】MV 我說所有的酒都不如你',
                    times: '0:15',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    vip: true,
                    is_ad: false,// 是否广告
                    is_dow: false,
                    link: 'www.baidu.com',
                },
                {
                    cover: 'https://i.ytimg.com/vi/7ev9uLONeQo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBLeAnXvkPSrr9_6oICQK5Q9i7PhA',
                    title: '【小品】《你好！打劫》#文松 #杨树林 #田娃 #娇娇 #贾舒涵 — 蠢贼误闯片场遇同行，打劫不成转演戏~【SMG上海东方卫视欢乐频道】',
                    times: '13:15',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    is_ad: false,
                    is_dow: false,
                    link: 'www.baidu.com',
                },
                {
                    cover: 'https://i.ytimg.com/vi/8QgeDkfjrk0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhXhrh28qsNIzI6ijgCJ2Ayw2vdA',
                    title: '三国战记：史诗级赵云秒14突破极限！里程碑式的突破！【深邃狼眼睛】',
                    times: '1:07:35',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    is_ad: false,
                    is_dow: false,
                }
            ],
        })


        onBeforeRouteUpdate((to) => {
            if (options.src) {
                videoRef.value.pause()
            }
            options.src = null
            // 当更URL换时重新获取数据
            init.rowData = getData(to.query.row)
            init.dataLists = []
            options.title = init.rowData.title
            options.options = init.rowData.cover
            if (init.rowData.vip) {
                Dialog.alert({
                    message: '此视频需要开通会员！',
                }).then(() => {
                    router.push('/combo')
                    return false
                })
                return
            }
            options.src = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
        });

        const onLoad = () => {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    init.dataLists.push({
                        cover: 'https://i.ytimg.com/vi/nhUNJhM_NAk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsb3JqJRzblxGurHeuZ7RQGiWq1w',
                        title: '小米34寸带鱼屏显示器对比体验，不输三星和宏碁，看完就知道该买谁了！',
                        times: '9:37',
                        views: '1000',
                        history: '2021-01-03 12:30',
                    });
                }
                // 加载状态结束
                init.loading = false;
                // 数据全部加载完成
                if (init.dataLists.length >= 40) {
                    init.finished = true;
                }
            }, 1000);
        }


        /**
         * 返回事件
         */
        const onClickLeft = function () {
            // 清除播放数据
            if (options.src) {
                videoRef.value.pause()
            }
            options.src = null
            history.back()
        }

        /**
         * 视频详情
         * @param {*} row 
         */
        const rowInfo = function (row) {
            if (row.is_ad) {
                toLink(row.link)
                return false
            }
            if (options.src) {
                videoRef.value.pause()
            } // 停止播放
            options.src = null
            router.replace({
                name: 'video-view',
                query: {
                    row: setData(row)
                }
            })
        }

        /**
         * 刷新
         */
        const onClickRight = function () {
            // console.log(videoRef.value)
            // videoRef.value.togglePlay()
            // videoRef.value.dispose()
            // if (options.src) {
            //     videoRef.value.pause()
            // } // 停止播放
            // options.src = null
            // window.location.reload()
            // let video = document.getElementById('dPlayerVideoMain')
            // // video.pause();
            // // video.removeAttribute('src','123123'); // empty source
            // video.load();  
        }

        /**
         * 跳转其他页面
         * @param {*} name 
         */
        const onToView = function (name) {
            if (options.src) {
                videoRef.value.pause()
            } // 停止播放
            options.src = null
            router.push({ name: name })
        }

        /**
         * 点击广告
         * @param {*} item 
         */
        const toLink = function (link) {
            if (options.src) {
                videoRef.value.pause()
            } // 停止播放
            window.open('//' + link, link)
        }

        const getInfo = function () {

            init.rowData = getData(route.query.row)

            if (init.rowData.vip) {
                Dialog.alert({
                    message: '此视频需要开通会员！',
                }).then(() => {
                    router.push('/combo')
                    return false
                })
                return
            }

            options.title = init.rowData.title
            options.options = init.rowData.cover
            options.src = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
        }


        onMounted(function () {
            getInfo()
        })
        return {
            init, onClickLeft, options, onLoad, rowInfo, videoRef, onToView, onClickRight
        }
    }
}
</script>

<style scoped>
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

#content-box {
    height: 100vh;
    position: relative;
    overflow-y: auto;
    scrollbar-width: none;
    /* Firefox */

    -ms-overflow-style: none;
    /* IE 10+ */
}

#content-box::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}

#top-box {
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 99;
}

#body-box {
    margin-top: 310px;
    margin-left: 10px;
    margin-right: 10px;
}

#body-box .title-box {
    font-size: 14px;
    font-weight: bold;
}

#body-box .info-box {
    text-align: center;
    font-size: 13px;
    color: #808080;
    margin: 2px 0;

}

#body-box .info-box .van-col:nth-child(1),
#body-box .info-box .van-col:nth-child(2) {
    margin-top: -5px;
}

#body-box .info-box .van-col:nth-child(3) {
    font-size: 23px;
}



#body-box .dian {
    width: 10px;
    height: 10px;
    font-size: 25px;
    font-weight: bold;
    position: relative;
    left: -2px;
    top: -2px;
    color: #808080;
}


#body-box .tags-box span {
    margin: 5px;
}

#body-box #recommend-box {
    margin: 10px 0;
}

#videoInfo {
    height: 250px;
    background: #000000;
    text-align: center;
}

#videoInfo .txt-info {
    font-weight: bold;
    line-height: 250px;
}

#body-box #recommend-box .recommend-title {
    font-weight: bold;
    margin-bottom: 10px;
}


#list-box .item-box {
    width: 100%;
    color: #FFFFFF;
    margin-bottom: 30px;
}

#list-box .cover-box {
    position: relative;
    height: 190px;
    width: 100%;
}

#list-box .cover-box img {
    width: 100%;
    height: 190px;
}

#list-box .cover-box .times-box {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #FFFFFF;
    background: #000000cc;
    padding: 2px 5px;
    border-radius: 5px;
}

#list-box .cover-box .vip-box {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 30px;
    color: rgb(233, 68, 27);
    padding: 2px 5px;
    border-radius: 5px;
}

#list-box .title-box {
    font-size: 14px;
    font-weight: bold;
    margin: 5px 8px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
}

#list-box .info-box {
    color: #6a6969;
    font-size: 10px;
    position: relative;
}

#list-box .info-box div {
    margin-top: -10px;
}

#list-box .info-box div:nth-child(1) {
    position: absolute;
    left: 30px;
}

#list-box .info-box div:nth-child(2) {
    position: absolute;
    right: 40px;
}


#list-box .dian {
    width: 10px;
    height: 10px;
    font-size: 25px;
    font-weight: bold;

}

#list-box .ad-box {
    position: relative;
    bottom: -10px;

}

#list-box .ad-box .van-button {
    letter-spacing: 10px;
}

:deep(.van-nav-bar__title) {
    max-width: 70%;
    margin-left: 18%;
}

.vip-box {
    font-size: 20px;
    color: red;
}

:deep(.van-popup),
:deep(.van-dialog__message) {
    background: red !important;
}
</style>
