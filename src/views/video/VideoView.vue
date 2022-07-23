<template>
    <div id="content-box">
        <div id="top-box">
            <div id="back-box">
                <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" class="header-box"
                    :title="init.rowData.title">
                    <template #right>
                        <van-icon name="search" size="25" />
                    </template>
                </van-nav-bar>
            </div>

            <div id="videoInfo">
                <vue3VideoPlay v-bind="options" :src="options.src" :type="options.type" :poster='options.poster' />
            </div>
        </div>

        <div id="body-box">
            <div class="title-box">
                {{ init.rowData.title }}
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
                <van-tag @click="onClickTags('1')" color="#ffe1e1" text-color="#ad0000">标签</van-tag>
                <van-tag @click="onClickTags('2')" color="#ffe1e1" text-color="#ad0000">标签</van-tag>
                <van-tag @click="onClickTags('3')" color="#ffe1e1" text-color="#ad0000">标签</van-tag>
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
                                <div class="times-box">{{ item.times }}</div>
                            </div>
                            <div class="title-box">
                                {{ item.title }}
                            </div>
                            <div class="info-box">
                                <div><span class="dian">.</span>{{ item.views }}次观看</div>
                                <div><span class="dian">.</span>{{ item.history }}</div>
                            </div>
                        </div>
                    </van-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getData } from '@/tools/DataInfo'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
export default {
    setup() {
        // const router = useRouter()
        const options = reactive({
            poster: '', //视频类型
            width: "100%",
            height: '250px',
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", //视频源
            type: "m3u8", //视频类型
            title: '',
            autoPlay: true,
            muted: false,
            speedRate: ["2.0", "1.0", "1.5", "1.25", "0.75", "0.5"],
        });
        const route = useRoute()


        const init = reactive({
            rowData: {},
            dataLists: [],
        })

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
            options.src = null
            history.back()
        }

        /**
         * 点击标签
         * @param {*} value 
         */
        const onClickTags = function (value) {
            console.log(value)
        }


        /**
         * 视频详情
         * @param {*} row 
         */
        const rowInfo = function (row) {
            console.log(row)
            // router.push({
            //     name: 'video-view',
            //     query: {
            //         row: setData(row)
            //     }
            // })
        }
        onMounted(function () {
            init.rowData = getData(route.query.row)
            console.log(init.rowData)
            options.title = init.rowData.title
            options.options = init.rowData.cover
        })
        return { init, onClickLeft, options, onClickTags, onLoad, rowInfo }
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

#body-box #recommend-box .recommend-title {
    font-weight: bold;
    margin-bottom: 10px;
}


#list-box .item-box {
    width: 100%;
    /* height: 310px; */
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
</style>