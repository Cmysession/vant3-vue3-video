<template>
    <div>
        <div id="home-content">
            <div :style="{ 'margin-top': init.initScrollNum + 'vh' }" class="header-box">
                <!-- 头部 -->
                <header id="home-index-top">
                    <!-- LOGO -->
                    <div class="logo-box">
                        <img class="logo-img" :src="init.logo">
                        <div class="logo-title">YouTuBe</div>
                    </div>
                    <!-- 搜索 -->
                    <div class="search-box" @click="onToView('search-view')">
                        <van-icon name="search" color="#FFFFFF" size="28" />
                    </div>
                    <!-- 我的信息 -->
                    <div class="user-box" @click="onToView('users-view')">
                        <van-icon name="user-circle-o" color="#FFFFFF" size="28" />
                    </div>
                </header>
                <!-- 分类 -->
                <div id="sort">
                    <van-button v-for="(item) in init.sortLists" @click="sortOnClick(item.uid)" :key="item.uid"
                        v-bind:class="[item.uid === init.sortChecked ? 'checked' : '', 'sort-btn']">{{ item.title }}
                    </van-button>
                </div>
            </div>
            <!-- 内容页面 -->
            <div id="data-list-box" @scroll="dataScroll">
                <van-list v-model:loading="init.loading" :finished="init.finished" finished-text="没有更多了" @load="onLoad">
                    <div class="item-box" v-for="(item, index) in init.dataLists" :key="index" @click="rowInfo(item)">
                        <div class="cover-box">
                            <img :src="item.cover">
                            <div v-if="!item.is_ad" class="times-box">{{ item.times }}</div>
                        </div>
                        <div class="title-box">
                            {{ item.title }}
                        </div>
                        <div class="info-box" v-if="!item.is_ad">
                            <div><span class="dian">.</span>{{ item.views }}次观看</div>
                            <div><span class="dian">.</span>{{ item.history }}</div>
                        </div>
                        <div class="ad-box" v-if="item.is_ad">
                            <van-button type="primary" block
                                color="linear-gradient(to right, rgb(135 135 135), rgb(101 101 101))">
                                {{ item.btn_txt }}
                            </van-button>
                        </div>
                    </div>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { onBeforeRouteLeave, useRouter } from "vue-router"
import { setData, setSessionItem, getSessionItem } from '@/tools/DataInfo'
export default {

    setup() {
        const router = useRouter()

        const init = reactive({
            sortChecked: '1q',
            logo: require('@/assets/logo.png'),
            sortLists: [
                { uid: '1q', title: '全部' },
                { uid: '2a', title: '游戏' },
                { uid: '3a', title: '合集' },
                { uid: '4a', title: '音乐' },
                { uid: '5a', title: '直播' },
                { uid: '6a', title: '动作冒险' },
                { uid: '7a', title: '最近上传' },
            ],
            dataLists: [
                {
                    cover: 'https://i.ytimg.com/vi/nhUNJhM_NAk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsb3JqJRzblxGurHeuZ7RQGiWq1w',
                    title: '小米34寸带鱼屏显示器对比体验，不输三星和宏碁，看完就知道该买谁了！',
                    times: '9:37',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    is_ad: true,// 是否广告
                    jump_out: true, //  外跳。内跳
                    link: 'www.baidu.com',
                    btn_txt: '点击下载',
                },
                {
                    cover: 'https://i.ytimg.com/vi/q2zj74iK1MI/hqdefault.jpg',
                    title: '最新会员免费了了哦',
                    times: '0:15',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    is_ad: true,// 是否广告
                    jump_out: false,
                    link: '/combo',
                    btn_txt: '点击访问',
                },
                {
                    cover: 'https://i.ytimg.com/vi/7ev9uLONeQo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBLeAnXvkPSrr9_6oICQK5Q9i7PhA',
                    title: '【小品】《你好！打劫》#文松 #杨树林 #田娃 #娇娇 #贾舒涵 — 蠢贼误闯片场遇同行，打劫不成转演戏~【SMG上海东方卫视欢乐频道】',
                    times: '13:15',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    is_ad: false,
                    jump_out: false,
                    link: 'www.baidu.com',
                },
                {
                    cover: 'https://i.ytimg.com/vi/8QgeDkfjrk0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhXhrh28qsNIzI6ijgCJ2Ayw2vdA',
                    title: '三国战记：史诗级赵云秒14突破极限！里程碑式的突破！【深邃狼眼睛】',
                    times: '1:07:35',
                    views: '1000',
                    history: '2021-01-03 12:30',
                    is_ad: false,
                    jump_out: false,
                    link: 'www.baidu.com',
                }
            ],
            loading: false,
            finished: false,
            initScroll: 0,
            initScrollNum: 0,
            isShowScroll: true
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
         * 点击分类
         * @param {*} uid 
         */
        const sortOnClick = function (uid) {
            // 加载状态结束
            init.loading = true
            init.finished = false
            init.dataLists = []
            init.sortChecked = uid
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
                init.loading = false
                // 数据全部加载完成
                if (init.dataLists.length >= 40) {
                    init.finished = true
                }
            }, 1000);
        }

        /**
         * 显示头部
         */
        const showHeader = function () {
            if (init.isShowScroll) return
            let _timeOut = setInterval(function () {
                init.initScrollNum += 0.1
                if (init.initScrollNum >= 0) {
                    init.initScrollNum = 0
                    init.isShowScroll = true
                    clearInterval(_timeOut)
                }
            }, 1)
        }

        /**
         * 隐藏头部
         */
        const clearHeader = function () {
            if (!init.isShowScroll) return
            let _timeOut = setInterval(function () {
                init.initScrollNum -= 0.1
                if (init.initScrollNum <= -12) {
                    init.isShowScroll = false
                    clearInterval(_timeOut)
                }
            }, 1)
        }

        /**
         * 上拉加载
         */
        const dataScroll = function () {
            let tpScrollTop = document.getElementById('data-list-box').scrollTop;
            // 上拉
            if (tpScrollTop > init.initScroll) {
                if (tpScrollTop > 60) {
                    clearHeader()
                }
            }
            // 下拉
            if (tpScrollTop < init.initScroll) {
                showHeader()
            }
            init.initScroll = tpScrollTop
        }

        /**
         * 视频详情
         * @param {*} row 
         */
        const rowInfo = function (row) {
            if (row.is_ad) {
                if (row.jump_out) {
                    // 外跳广告
                    toLink(row.link)
                    return false
                }
                // 内跳广告
                router.push(row.link)
                return false
            }

            router.push({
                name: 'video-view',
                query: {
                    row: setData(row)
                }
            })
        }

        /**
         * 点击广告
         * @param {*} item 
         */
        const toLink = function (link) {
            window.open('//' + link, link)
        }

        // 在页面离开时记录滚动位置
        onBeforeRouteLeave(function () {
            let tpScrollTop = document.getElementById('data-list-box').scrollTop
            let btScrollLeft = document.getElementById('sort').scrollLeft
            setSessionItem('tpScrollTop', tpScrollTop)
            setSessionItem('btScrollLeft', btScrollLeft)
        })

        /**
         * 跳转其他页面
         * @param {*} name 
         */
        const onToView = function (name) {
            router.push({ name: name })
        }

        onMounted(function () {

        })

        return {
            init, sortOnClick, dataScroll, onLoad, rowInfo, onToView
        }
    },

    /**
     * 进来时执行
     */
    activated() {
        /**
         * 记住滚动状态
         */
        let tpScrollTop = getSessionItem('tpScrollTop')
        let btScrollLeft = getSessionItem('btScrollLeft')
        if (tpScrollTop) {
            document.getElementById('data-list-box').scrollTop = tpScrollTop
        }
        if (btScrollLeft) {
            document.getElementById('sort').scrollLeft = btScrollLeft
        }
        setSessionItem('tpScrollTop', 0)
        setSessionItem('btScrollLeft', 0)
    },

}
</script>

<style>
#home-index-top {
    height: 6vh;
    /* height: 48px; */
    border-bottom: 1px inset #313131;
    position: relative;
}

#sort {
    border-top: 1px inset #757575;
    /* height: 48px; */
    height: 6vh;
    text-align: center;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    /* Firefox */
    scrollbar-width: none;
    /* IE 10+ */
    -ms-overflow-style: none;
}

#sort::-webkit-scrollbar {
    /* Chrome Safari */
    display: none;
}

#sort .sort-btn {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    -webkit-transition: background-color .5s cubic-bezier(.05, 0, 0, 1);
    transition: background-color .5s cubic-bezier(.05, 0, 0, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    height: 32px;
    margin: 5px;
}

#sort .checked {
    background-color: #fff;
    color: rgb(0, 0, 0);
}



#home-index-top .logo-box {
    position: absolute;
    left: 0;
}

#home-index-top .logo-img {
    position: absolute;
    width: 34px;
    margin: 7px;
}

#home-index-top .logo-title {
    position: absolute;
    left: 50px;
    /* line-height: 48px; */
    line-height: 6vh;
    color: #FFFFFF;

}

#home-index-top .search-box {
    position: absolute;
    right: 50px;
    margin: 10px;
}

#home-index-top .user-box {
    position: absolute;
    right: 0;
    margin: 10px;
}

#data-list-box {
    height: 88vh;
    width: 100%;
    padding-top: 12vh;
}

#data-list-box::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}

#data-list-box {
    scrollbar-width: none;
    /* firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
    overflow-x: hidden;
    overflow-y: auto;
}

#data-list-box .item-box {
    width: 100%;
    /* height: 310px; */
    color: #FFFFFF;
    margin-bottom: 30px;
}

#data-list-box .cover-box {
    position: relative;
    height: 210px;
    width: 100%;
}

#data-list-box .cover-box img {
    width: 100%;
    height: 210px;
}

#data-list-box .cover-box .times-box {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #FFFFFF;
    background: #000000cc;
    padding: 2px 5px;
    border-radius: 5px;
}

#data-list-box .title-box {
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

#data-list-box .info-box {
    color: #6a6969;
    font-size: 10px;
    /* text-align: center; */
    position: relative;
}

#data-list-box .info-box div:nth-child(1) {
    position: absolute;
    left: 30px;
}

#data-list-box .info-box div:nth-child(2) {
    position: absolute;
    right: 40px;
}

#data-list-box .ad-box {
    position: relative;
    bottom: -10px;

}

#data-list-box .ad-box .van-button {
    letter-spacing: 10px;
}


#data-list-box .dian {
    width: 10px;
    height: 10px;
    font-size: 25px;
    font-weight: bold;
    position: absolute;
    left: -10px;
    bottom: 20px;
}

#home-content .header-box {
    position: fixed;
    width: 100%;
    background: #212121f7;
    height: 12vh;
    z-index: 99;
}
</style>