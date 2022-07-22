<template>
  <div id="lay-box">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.path" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
</template>


<script>
import { getSessionItem } from '@/tools/DataInfo';
import { onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router';
export default {
  created() {
    if (this.$route.path === '/') {
      this.$router.push('/home');
    }
  },
  setup() {
    onMounted(function () {
      console.log(getSessionItem('tpScrollTop'))
    })
    onBeforeRouteUpdate((to) => {
      console.log(to, "=====");
      if (to.path === "/home") {
        console.log(getSessionItem('tpScrollTop'))
        console.log(getSessionItem('btScrollLeft'))
      }
    });


    return {}
  }
}
</script>

<style scoped>
</style>