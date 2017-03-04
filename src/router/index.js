import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Feed from '@/components/Feed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/feed/:term',
      name: 'Feed',
      component: Feed,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
