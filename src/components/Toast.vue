<template>
  <div class="toast">
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { message } from './watch/toast'

export default {
  name: 'toast',
  computed: mapState({
    message: state => state.toast.message,
    type: state => state.toast.type
  }),
  watch: {
    message (newValue, oldValue) {
      message(this.type, newValue, oldValue)
    }
  }
}
</script>
