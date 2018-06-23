import { ADD_ACCOUNT_FAILED, ADD_ACCOUNT_SUCCEEDED } from './accounts'

const state = {
  message: '',
  type: 'info'
}

const mutations = {

  [ADD_ACCOUNT_SUCCEEDED] (state) {
    state.message = 'Add Account Successfully'
    state.type = 'success'
  },

  [ADD_ACCOUNT_FAILED] (state) {
    state.message = 'Add Account Failed'
    state.type = 'error'
  }

}

export default {
  state,
  mutations
}
