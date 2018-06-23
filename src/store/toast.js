import { ADD_ACCOUNT_SUCCEEDED } from './accounts'

const state = {
  message: ''
}

const mutations = {

  [ADD_ACCOUNT_SUCCEEDED] (state) {
    state.message = 'Add Account Successfully'
  }

}

export default {
  state,
  mutations
}
