import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: Boolean,
  },
  mutations: {
    changeLogin () {
      state.isLogin = !state.isLogin
    }
  },
  actions: {
  },
  modules: {
  }
})
