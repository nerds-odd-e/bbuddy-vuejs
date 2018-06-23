import { callApi } from '../api'

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
export const FETCH_ACCOUNTS_SUCCEEDED = 'FETCH_ACCOUNTS_SUCCEEDED'
export const FETCH_ACCOUNTS_FAILED = 'FETCH_ACCOUNTS_FAILED'
export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const ADD_ACCOUNT_SUCCEEDED = 'ADD_ACCOUNT_SUCCEEDED'
export const ADD_ACCOUNT_FAILED = 'ADD_ACCOUNT_FAILED'

export const state = {
  current: {},
  list: [],
  pending: false
}

export const mutations = {
  [FETCH_ACCOUNTS] (state) {
    state.pending = true
  },

  [FETCH_ACCOUNTS_SUCCEEDED] (state, payload) {
    state.list = payload.data
    state.pending = false
  },

  [FETCH_ACCOUNTS_FAILED] (state, payload) {
    state.pending = false
    state.list = []
  },

  [ADD_ACCOUNT] (state) { },

  [ADD_ACCOUNT_SUCCEEDED] (state, payload) {
    state.current = {}
  }
}

const actions = {
  fetchAccounts ({commit}) {
    commit(FETCH_ACCOUNTS, callApi('accounts', 'get', {}))
  },
  addAccount ({state, commit}) {
    commit(ADD_ACCOUNT, callApi('accounts', 'post', {...state.current}))
  }
}

export default {
  state,
  mutations,
  actions
}
