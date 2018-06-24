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
      <button>Save</button>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapMutations } from 'vuex'

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
    })
  },
  mounted () {
    this.selectAccount(this.id)
  }
}
</script>
