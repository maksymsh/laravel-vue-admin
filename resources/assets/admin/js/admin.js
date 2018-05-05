require('./bootstrap');

import Vue from 'vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import App from './components/App';

sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');