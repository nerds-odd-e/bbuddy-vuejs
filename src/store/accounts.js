import { callApi } from '../api'

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
export const FETCH_ACCOUNTS_SUCCEEDED = 'FETCH_ACCOUNTS_SUCCEEDED'
export const FETCH_ACCOUNTS_FAILED = 'FETCH_ACCOUNTS_FAILED'

const state = {
  accounts: [],
  pending: false,
  error: null
}

const mutations = {
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
}

const actions = {
  fetchAccounts ({commit}) {
    commit(FETCH_ACCOUNTS, callApi('accounts', 'get', {})())
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
