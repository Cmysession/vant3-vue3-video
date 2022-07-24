<template>
    <div id="search-body-box">
        <header class="header-box">
            <van-row>
                <van-col @click="onClickLeft" span="4">
                    <van-icon name="arrow-left" />返回
                </van-col>
                <van-col span="16">
                    <van-field :disabled="true" class="field-box" v-model="init.searchValue" />
                </van-col>
                <van-col span="4" @click="delSearchValue">
                    <van-icon name="cross" />
                </van-col>
            </van-row>
        </header>

        <!-- 内容页面 -->
        <div id="search-list-box" @scroll="dataScroll">
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
                            {{ item.is_dow === true ? "点击下载" : "点击访问" }}
                        </van-button>
                    </div>
                </div>
            </van-list>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { getSessionItem, setData, setSessionItem } from '@/tools/DataInfo'

export default {
    setup() {
        const route = useRoute()
        const router = useRouter()

        const init = reactive({
            searchValue: '',
            dataLists: [],
            loading: false,
            finished: false,
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
            router.replace({
                name: 'search-view',
                query: { search: init.searchValue }
            })
        }

        // 在页面离开时记录滚动位置
        onBeforeRouteLeave(function () {
            let searchScrollTop = document.getElementById('search-list-box').scrollTop
            setSessionItem('searchScrollTop', searchScrollTop)
        })

        /**
         * 清空搜索
         * @param {*} row 
         */
        const delSearchValue = function () {
            router.replace({
                name: 'search-view',
            })
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


        onMounted(function () {

        })

        onMounted(function () {
            if (route.query && route.query.search) {
                init.searchValue = route.query.search
            }
        })

        return { init, onClickLeft, delSearchValue, onLoad, rowInfo }
    },
    /**
     * 进来时执行
     */
    activated() {
        /**
         * 记住滚动状态
         */
        let searchScrollTop = getSessionItem('SearchScrollTop')
        if (searchScrollTop) {
            document.getElementById('search-list-box').scrollTop = searchScrollTop
        }
    
        setSessionItem('searchScrollTop', 0)
    },
}
</script>

<style scoped>
#search-body-box .header-box {
    width: 100%;
    height: 46px;
    background: #212121;
    border-bottom: 1px inset #313131;
}

#search-body-box .header-box .van-col {
    font-size: 14px;
    color: #c3c3c3;
    position: relative;
    display: flex;
    align-items: center;
}

#search-body-box .header-box .van-col:nth-child(1) {
    padding-left: 16px;
}

#search-body-box .header-box .van-col:nth-child(3) {
    padding-left: 20px;
    font-size: 22px;
}

:deep(.field-box) {
    border-radius: 10px;
    height: 35px;
    background: #292929;
}

.van-row {
    margin-top: 10px;
}

:deep(.van-field__value) {
    overflow: inherit;
}

:deep(.van-field__control) {
    color: #FFFFFF;
    margin-top: -5px;
}

#search-list-box {
    height: 88vh;
    width: 100%;
    overflow-y: auto;
    padding-top: 1vh;
    scrollbar-width: none;
    /* Firefox */

    -ms-overflow-style: none;
    /* IE 10+ */
}

#search-list-box::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}

#search-list-box .item-box {
    width: 100%;
    /* height: 310px; */
    color: #FFFFFF;
    margin-bottom: 30px;
}

#search-list-box .cover-box {
    position: relative;
    height: 210px;
    width: 100%;
}

#search-list-box .cover-box img {
    width: 100%;
    height: 210px;
}

#search-list-box .cover-box .times-box {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #FFFFFF;
    background: #000000cc;
    padding: 2px 5px;
    border-radius: 5px;
}

#search-list-box .title-box {
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

#search-list-box .info-box {
    color: #6a6969;
    font-size: 10px;
    /* text-align: center; */
    position: relative;
}

#search-list-box .info-box div:nth-child(1) {
    position: absolute;
    left: 30px;
}

#search-list-box .info-box div:nth-child(2) {
    position: absolute;
    right: 40px;
}

#search-list-box .ad-box {
    position: relative;
    bottom: -10px;

}

#search-list-box .ad-box .van-button {
    letter-spacing: 10px;
}


#search-list-box .dian {
    width: 10px;
    height: 10px;
    font-size: 25px;
    font-weight: bold;
    position: absolute;
    left: -10px;
    bottom: 20px;
}
</style>