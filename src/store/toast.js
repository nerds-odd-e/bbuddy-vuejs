import {
  ADD_ACCOUNT_FAILED,
  ADD_ACCOUNT_SUCCEEDED,
  EDIT_ACCOUNT_FAILED,
  EDIT_ACCOUNT_SUCCEEDED,
  FETCH_ACCOUNTS_FAILED
} from './accounts'

export const state = {
  message: '',
  type: 'info'
}

export const mutations = {

  [ADD_ACCOUNT_SUCCEEDED] (state) {
    state.message = 'Add Account Successfully'
    state.type = 'success'
  },

  [ADD_ACCOUNT_FAILED] (state) {
    state.message = 'Add Account Failed'
    state.type = 'error'
  },

  [FETCH_ACCOUNTS_FAILED] (state) {
    state.message = 'Fetch Accounts Failed'
    state.type = 'error'
  },

  [EDIT_ACCOUNT_SUCCEEDED] (state) {
    state.message = 'Edit Account Successfully'
    state.type = 'success'
  },

  [EDIT_ACCOUNT_FAILED] (state) {
    state.message = 'Edit Account Failed'
    state.type = 'error'
  }
}

export default {
  state,
  mutations
}
