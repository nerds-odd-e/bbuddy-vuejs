<style type="text/css">
  .accounts {
    list-style-type: none;
  }
</style>
<template>
  <div class="home">
    <ul class="accounts">
      <li v-bind:key="account.id" v-for="account in accounts">
        {{account.name}} {{account.balance}}
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const {mapActions, mapState} = createNamespacedHelpers('accounts')

export default {
  name: 'home',
  computed: mapState([
    'accounts'
  ]),
  methods: mapActions([
    'fetchAccounts'
  ]),
  mounted () {
    this.fetchAccounts()
  }
}
</script>
