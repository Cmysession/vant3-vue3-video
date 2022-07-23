<template>
    <div>

    </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter,useRoute } from 'vue-router'
export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        onMounted(function () {
            let path = route.query.path
            let row = route.query.row
            router.replace({
                name: path,
                query: {
                    row: row
                }
            })
        })
        return {}
    }
}

</script>

<style>
</style>