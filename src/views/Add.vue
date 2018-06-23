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
    <Toast/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import Toast from '@/components/Toast.vue'

export default {
  name: 'add-account',
  computed: {
    ...mapFields([
      'accounts.current.name',
      'accounts.current.balance'
    ])
  },
  methods: mapActions([
    'addAccount'
  ]),
  components: {
    Toast
  }
}
</script>
