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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'home',
  computed: mapState({
    accounts: state => state.accounts.list
  }),
  methods: mapActions([
    'fetchAccounts'
  ]),
  mounted () {
    this.fetchAccounts()
  }
}
</script>
