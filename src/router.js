import Vue from 'vue'
import Router from 'vue-router'
import exo1 from './views/exo1.vue'
import exo2 from './views/exo2.vue'
import exo3 from './views/exo3.vue'
import exo4 from './views/exo4.vue'
import exo5 from './views/exo5.vue'
import exo6 from './views/exo6.vue'
import exo7 from './views/exo7.vue'
import exo8 from './views/exo8.vue'
import exo9 from './views/exo9.vue'
import exo10 from './views/exo10.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exo1',
      name: 'exo1',
      component: exo1
    },
    {
      path: '/exo2',
      name: 'exo2',
      component: exo2
    },
    {
      path: '/exo3',
      name: 'exo3',
      component: exo3
    },
    {
      path: '/exo4',
      name: 'exo4',
      component: exo4
    },
    {
      path: '/exo5',
      name: 'exo5',
      component: exo5
    },
    {
      path: '/exo6',
      name: 'exo6',
      component: exo6
    },
    {
      path: '/exo7',
      name: 'exo7',
      component: exo7
    },
    {
      path: '/exo8',
      name: 'exo8',
      component: exo8
    },
    {
      path: '/exo9',
      name: 'exo9',
      component: exo9
    },
    {
      path: '/exo10',
      name: 'exo10',
      component: exo10
    }
  ]
})
