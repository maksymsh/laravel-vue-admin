<template>
    <div id="wrapper">
        <navigation></navigation>


        <div id="page-wrapper">
            <ring-loader :loading="isLoading" color="#337ab7"></ring-loader>

            <div class="row" v-if="!isLoading">
                <div class="col-lg-12">
                    <h1 class="page-header">Forms</h1>
                </div>

                <div class="col-lg-12">

                    <router-view></router-view>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->


</template>

<script>
    import Navigation from './Navigation';
    import RingLoader from 'vue-spinner/src/RingLoader';
    import { mapState } from 'vuex';

    export default {
        components:{
            Navigation, RingLoader
        },
        computed: {
            ...mapState(['isLoading'])
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
