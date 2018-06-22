import Vue from 'vue'
import Vuex from 'vuex'
import VuexPromiseMiddleware from 'vuex-promise-middleware'
import { callApi } from './api'

Vue.use(Vuex)

const plugins = [VuexPromiseMiddleware]

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
export const FETCH_ACCOUNTS_SUCCEEDED = 'FETCH_ACCOUNTS_SUCCEEDED'
export const FETCH_ACCOUNTS_FAILED = 'FETCH_ACCOUNTS_FAILED'

export default new Vuex.Store({
  plugins,
  state: {
    accounts: [],
    pending: false,
    error: null
  },
  mutations: {
    [FETCH_ACCOUNTS] (state) {
      state.pending = true
      state.error = null
    },

    [FETCH_ACCOUNTS_SUCCEEDED] (state, payload) {
      state.accounts = payload.data
      state.pending = false
      state.error = null
    },

    [FETCH_ACCOUNTS_FAILED] (state, payload) {
      state.pending = false
      state.error = payload
      state.accounts = []
    }
  },
  actions: {
    [FETCH_ACCOUNTS] ({commit}) {
      commit(FETCH_ACCOUNTS)
      callApi('accounts', 'get', {})().
        then(response => commit(FETCH_ACCOUNTS_SUCCEEDED, response)).
        catch(respones => commit(FETCH_ACCOUNTS_FAILED, respones))
    }
  }
})
