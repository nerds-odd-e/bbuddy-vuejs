import { callApi } from '../api'

const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
const FETCH_ACCOUNTS_SUCCEEDED = 'FETCH_ACCOUNTS_SUCCEEDED'
const FETCH_ACCOUNTS_FAILED = 'FETCH_ACCOUNTS_FAILED'
export const ADD_ACCOUNT = 'ADD_ACCOUNT'
const ADD_ACCOUNT_SUCCEEDED = 'ADD_ACCOUNT_SUCCEEDED'

const state = {
  current: {},
  list: [],
  pending: false,
  error: null
}

const mutations = {
  [FETCH_ACCOUNTS] (state) {
    state.pending = true
    state.error = null
  },

  [FETCH_ACCOUNTS_SUCCEEDED] (state, payload) {
    state.list = payload.data
    state.pending = false
    state.error = null
  },

  [FETCH_ACCOUNTS_FAILED] (state, payload) {
    state.pending = false
    state.error = payload
    state.list = []
  },

  [ADD_ACCOUNT] (state) {
    state.pending = true
    state.error = null
  },

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
