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
export default {
  created() {
    if (this.$route.path === '/') {
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