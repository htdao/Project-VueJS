import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import auth from './modules/auth'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    modules: {
        home,
        auth,
        user
    }
})

export default store