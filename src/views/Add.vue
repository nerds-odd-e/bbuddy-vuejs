<template>
  <div class="add-account">
    <div>
      <span>Name: </span>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <span>Balance: </span>
      <input type="text" v-model="balance"/>
    </div>
    <div>
      <button v-on:click="addAccount">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import Vue from 'vue'

export default {
  name: 'add-account',
  computed: {
    ...mapFields([
      'accounts.current.name',
      'accounts.current.balance'
    ]),
    ...mapState({
      message: state => state.toast.message
    })
  },
  methods: mapActions([
    'addAccount'
  ]),
  watch: {
    message: (newValue, oldValue) => {
      Vue.toasted.success(newValue, {
        position: 'bottom-center',
        duration: 2000
      })
    }
  }
}
</script>
