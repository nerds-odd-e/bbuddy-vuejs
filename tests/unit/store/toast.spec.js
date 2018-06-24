import { mutations } from '@/store/toast'
import {
  ADD_ACCOUNT_FAILED,
  ADD_ACCOUNT_SUCCEEDED,
  EDIT_ACCOUNT_FAILED,
  EDIT_ACCOUNT_SUCCEEDED,
  FETCH_ACCOUNTS_FAILED
} from '@/store/accounts'

describe('Store Toast', () => {
  let state
  beforeEach(() => {
    state = require('@/store/toast').state
  })

  test('add account succeeded', () => {
    mutations[ADD_ACCOUNT_SUCCEEDED](state)

    expect(state).toEqual({
      message: 'Add Account Successfully',
      type: 'success'
    })
  })

  test('add account failed', () => {
    mutations[ADD_ACCOUNT_FAILED](state)

    expect(state).toEqual({
      message: 'Add Account Failed',
      type: 'error'
    })
  })

  test('fetch accounts failed', () => {
    mutations[FETCH_ACCOUNTS_FAILED](state)

    expect(state).toEqual({
      message: 'Fetch Accounts Failed',
      type: 'error'
    })
  })

  test('edit account succeeded', () => {
    mutations[EDIT_ACCOUNT_SUCCEEDED](state)

    expect(state).toEqual({
      message: 'Edit Account Successfully',
      type: 'success'
    })
  })

  test('edit account failed', () => {
    mutations[EDIT_ACCOUNT_FAILED](state)

    expect(state).toEqual({
      message: 'Edit Account Failed',
      type: 'error'
    })
  })
})
