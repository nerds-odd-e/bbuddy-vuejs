import Vue from 'vue'
import Vuex from 'vuex'
import promisePlugin from 'vuex-promise-middleware'
import accounts from './accounts'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [promisePlugin],
  modules: {
    accounts
  }
})
