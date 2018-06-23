<template>
  <div class="toast">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'toast',
  computed: mapState({
    message: state => state.toast.message,
    type: state => state.toast.type
  }),
  watch: {
    message (newValue, oldValue) {
      this.$toasted.show(newValue, {
        type: this.type,
        position: 'bottom-center',
        duration: 2000
      })
    }
  }
}
</script>
