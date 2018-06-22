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
import { callApi } from '@/api'

export default {
  name: 'add-account',
  data: () => ({
    name: '',
    balance: ''
  }),
  methods: {
    addAccount () {
      callApi('accounts', 'post', {
        name: this.name,
        balance: this.balance
      })()
    }
  }
}
</script>
