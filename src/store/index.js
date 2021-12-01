import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: window.localStorage.getItem('isLogin') || '',
    token: "dcb9af35-cf99-4376-9efd-9afb9bd92db4",
    content: ''
  },
  mutations: {
    changeLogin (state, loginStatus) {
      state.isLogin = loginStatus
      window.localStorage.isLogin = loginStatus
      // console.log(this.state.isLogin);
      // console.log(loginStatus);
    }
  },
  actions: {
  },
  modules: {
  }
})
