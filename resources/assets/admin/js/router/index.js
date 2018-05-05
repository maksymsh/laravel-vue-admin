import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter);

const routes = [
    {
        path: '/admin',
        component: () => import('../components/Dashboard')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});



router.beforeEach((to, from, next) => {


    store.commit('isLoading', true);

    axios.get(to.path).then(resp => {
        store.commit('data', resp.data);
            next();
            setTimeout(() => {
                store.commit('isLoading', false);
            }, 300);
        })
        .catch(err => {
            console.log(err);
        })
})

export default router