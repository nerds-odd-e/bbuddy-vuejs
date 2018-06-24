import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Add from './views/Add.vue'
import Edit from './views/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      props: true
    }
  ]
})
