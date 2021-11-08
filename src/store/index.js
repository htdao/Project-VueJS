import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import auth from './modules/auth'
import user from './modules/user'
import router from "../router"
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    modules: {
        home,
        auth,
        user
    },
    plugins: [createPersistedState({paths: ['auth']})],
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !store.state.auth.isAuthenticated) {
        next({ name: 'Login'})
    } else if(to.name === 'Login' && store.state.auth.isAuthenticated) {
        next({ name: 'Home' })
    } else {
        next()
    }
})

export default store