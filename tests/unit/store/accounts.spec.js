import {
  ADD_ACCOUNT,
  ADD_ACCOUNT_SUCCEEDED,
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_FAILED,
  FETCH_ACCOUNTS_SUCCEEDED,
  mutations
} from '@/store/accounts'
import { deepClone } from '../helper'

describe('Accounts', () => {
  let state, initialState
  beforeEach(() => {
    initialState = deepClone(require('@/store/accounts').state)
  })
  const account = {name: 'account', balance: 100}

  test('fetch accounts', () => {
    state = {
      ...initialState,
      pending: false
    }

    mutations[FETCH_ACCOUNTS](state)

    expect(state).toEqual({
      ...initialState,
      pending: true
    })
  })

  test('fetch accounts succeeded', () => {
    state = {
      ...initialState,
      list: [],
      pending: true
    }

    mutations[FETCH_ACCOUNTS_SUCCEEDED](state, {
      data: [account]
    })

    expect(state).toEqual({
      ...initialState,
      list: [account],
      pending: false
    })
  })

  test('fetch accounts failed', () => {
    state = {
      ...initialState,
      list: [account],
      pending: true
    }

    mutations[FETCH_ACCOUNTS_FAILED](state)

    expect(state).toEqual({
      ...initialState,
      list: [],
      pending: false
    })
  })

  test('add account', () => {
    state = initialState

    mutations[ADD_ACCOUNT](state)

    expect(state).toEqual(initialState)
  })

  test('add account succeeded', () => {
    state = {
      ...initialState,
      current: account
    }

    mutations[ADD_ACCOUNT_SUCCEEDED](state)

    expect(state).toEqual({
      ...initialState,
      current: {}
    })
  })
})
