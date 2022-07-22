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
import { setSessionItem } from '@/tools/DataInfo';

export default {
  created() {
    if (this.$route.path === '/') {
      setSessionItem('tpScrollTop', 0)
      setSessionItem('btScrollLeft', 0)
      this.$router.push('/home');
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped>
</style>