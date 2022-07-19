<template>
    <div>

        <div id="home-content">
            <!-- 头部 -->
            <header id="home-index-top">
                <!-- LOGO -->
                <div class="logo-box">
                    <img class="logo-img" :src="init.logo">
                    <div class="logo-title">YouTuBe</div>
                </div>
                <!-- 搜索 -->
                <div class="search-box">
                    <van-icon name="search" color="#FFFFFF" size="28" />
                </div>
                <!-- 我的信息 -->
                <div class="user-box">
                    <van-icon name="user-circle-o" color="#FFFFFF" size="28" />
                </div>
            </header>
            <!-- 分类 -->
            <div id="sort">
                <van-button v-for="(item) in init.sortLists" @click="sortOnClick(item.uid)" :key="item.uid"
                    v-bind:class="[item.uid === init.sortChecked ? 'checked' : '', 'sort-btn']">{{ item.title }}
                </van-button>
            </div>
            <!-- 内容页面 -->
            <div id="data-list-box">
                <div class="item-box" v-for="(item, index) in init.dataLists" :key="index">
                    <!-- 封面 -->
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
                <!-- <div class="item-box">
                    <div class="cover-box">
                        <img src="https://i.ytimg.com/vi/q2zj74iK1MI/hqdefault.jpg">
                        <div class="times-box">1:07:35</div>
                    </div>
                    <div class="title-box">
                        小米34寸带鱼屏显示器对比体验，不输三星和宏碁，看完就知道该买谁了！
                    </div>
                    <div class="info-box">
                        <div><span class="dian">.</span>92323次观看</div>
                        <div><span class="dian">.</span>1天前</div>
                    </div>
                </div> -->
            </div>
        </div>

    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup() {
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
                },
                {
                    cover: 'https://i.ytimg.com/vi/7ev9uLONeQo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBLeAnXvkPSrr9_6oICQK5Q9i7PhA',
                    title: '【小品】《你好！打劫》#文松 #杨树林 #田娃 #娇娇 #贾舒涵 — 蠢贼误闯片场遇同行，打劫不成转演戏~【SMG上海东方卫视欢乐频道】',
                    times: '13:15',
                    views: '1000',
                    history: '2021-01-03 12:30',
                },
                {
                    cover: 'https://i.ytimg.com/vi/8QgeDkfjrk0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhXhrh28qsNIzI6ijgCJ2Ayw2vdA',
                    title: '三国战记：史诗级赵云秒14突破极限！里程碑式的突破！【深邃狼眼睛】',
                    times: '1:07:35',
                    views: '1000',
                    history: '2021-01-03 12:30',
                },
                {
                    cover: 'https://i.ytimg.com/vi/q2zj74iK1MI/hqdefault.jpg',
                    title: '合辑 - 房東的貓 - 【春風十里】MV 我說所有的酒都不如你',
                    times: '0:15',
                    views: '1000',
                    history: '2021-01-03 12:30',
                },
            ],
        })
        /**
             * 点击分类
             * @param {*} uid 
             */
        const sortOnClick = function (uid) {
            console.log(init.sortChecked)
            init.sortChecked = uid

        }
        return { init, sortOnClick }
    }
}
</script>

<style>
body {
    background: #212121;
    margin: 0;
    padding: 0;
}

#home-index-top {
    height: 48px;
    border-bottom: 1px inset #313131;
    position: relative;
}

#sort {
    border-top: 1px inset #757575;
    height: 48px;
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
    line-height: 48px;
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
    width: 100%;
}

#data-list-box .item-box {
    width: 100%;
    height: 310px;
    color: #FFFFFF;
}

#data-list-box .cover-box {
    position: relative;
    height: 235px;
    width: 100%;
}

#data-list-box .cover-box img {
    width: 100%;
    height: 235px;
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

#data-list-box .dian {
    width: 10px;
    height: 10px;
    font-size: 25px;
    font-weight: bold;
    position: absolute;
    left: -10px;
    bottom: 20px;
}
</style>