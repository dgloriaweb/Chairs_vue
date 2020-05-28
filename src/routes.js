import Vue from 'vue'
import Router from 'vue-router'
import ChairsList from '@/components/ChairsList'
import ChairDetail from '@/components/ChairDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Chairs List',
      component: ChairsList,
    },
    {
      path: '/chair/:id',
      name: 'Chairs Detail',
      component: ChairDetail,
    },
  ],
})
