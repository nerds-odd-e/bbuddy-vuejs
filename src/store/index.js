import Vue from 'vue'
import Vuex from 'vuex'
import promisePlugin from 'vuex-promise-middleware'
import accounts from './accounts'
import { getField, updateField } from 'vuex-map-fields'
import toast from './toast'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [promisePlugin],
  modules: {
    accounts,
    toast
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  }
})
