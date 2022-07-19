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
</style>