import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Intro from '@/components/Intro'
import Training from '@/components/Training'
import News from '@/components/News'
import Apply from '@/components/Apply'
import Template from '@/components/Template'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/training',
      name: 'Training',
      component: Training
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ]
})
