import { message } from '@/components/watch/toast'
import Vue from 'vue'

describe('Watch Toast', () => {
  test('show toast', () => {
    Vue.toasted = jest.fn()
    Vue.toasted.show = jest.fn()

    message('success', 'new message', 'old message')

    expect(Vue.toasted.show).toBeCalledWith('new message', {
      type: 'success',
      position: 'bottom-center',
      duration: 2000
    })
  })
})
