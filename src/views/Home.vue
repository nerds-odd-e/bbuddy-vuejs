<style type="text/css">
  .accounts {
    list-style-type: none;
  }
</style>
<template>
  <div class="home">
    <ul class="accounts">
      <li v-bind:key="account.id" v-for="account in accounts">
        <router-link :to="{ name: 'edit', params: {id: account.id } }">
          {{account.name}}
        </router-link>
        {{account.balance}}
      </li>
    </ul>
    <Toast/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Toast from '@/components/Toast.vue'

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
  },
  components: {
    Toast
  }
}
</script>
