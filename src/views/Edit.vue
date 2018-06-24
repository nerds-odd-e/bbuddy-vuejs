<template>
  <div class="edit-account">
    <div>
      <span>Name: </span>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <span>Balance: </span>
      <input type="text" v-model="balance"/>
    </div>
    <div>
      <button v-on:click="editAccount">Save</button>
    </div>
    <Toast/>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions, mapMutations } from 'vuex'
import Toast from '@/components/Toast.vue'

export default {
  name: 'edit-account',
  props: ['id'],
  computed: {
    ...mapFields([
      'accounts.current.name',
      'accounts.current.balance'
    ])
  },
  methods: {
    ...mapMutations({
      selectAccount: 'SELECT_ACCOUNT'
    }),
    ...mapActions([
      'editAccount'
    ])
  },
  mounted () {
    this.selectAccount(this.id)
  },
  components: {
    Toast
  }
}
</script>
