import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        ...Laravel,
        isLoading: true,
        data: {},
    },
    getters:{
        data: state => state.data
    },
    mutations:{
        data(state, data){
            state.data = data
        },
        isLoading(state, data){
            state.isLoading = data
        }
    },
    actions:{},
    modules:{}
});

export default store