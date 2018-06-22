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
      <button v-on:click="addAccount">Add Account</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-account',
  data: () => ({
    name: '',
    balance: ''
  }),
  methods: {
    addAccount () {
    }
  }
}
</script>
