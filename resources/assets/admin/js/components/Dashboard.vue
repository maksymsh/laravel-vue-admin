<template>
    <div id="page-dashboard">
        Dashboard
        {{ settings }}
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['data', 'settings'])
        },
        mounted() {
            console.log('Dashboard mounted.')
        }
    }
</script>

<style scoped>

</style>