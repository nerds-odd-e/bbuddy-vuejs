import Vue from 'vue'

export const message = (type, newValue, oldValue) => {
  Vue.toasted.show(newValue, {
    type: type,
    position: 'bottom-center',
    duration: 2000
  })
}
