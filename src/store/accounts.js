import { callApi } from '../api'

const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
const FETCH_ACCOUNTS_SUCCEEDED = 'FETCH_ACCOUNTS_SUCCEEDED'
const FETCH_ACCOUNTS_FAILED = 'FETCH_ACCOUNTS_FAILED'

const state = {
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
  }
}

const actions = {
  fetchAccounts ({commit}) {
    commit(FETCH_ACCOUNTS, callApi('accounts', 'get', {})())
  }
}

export default {
  state,
  mutations,
  actions
}
