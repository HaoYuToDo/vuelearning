import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import OneTest from '../components/OneTest.vue'
import TwoTest from '../components/TwoTest.vue'
import DeafultTest from '../components/DeafultTest.vue'
import ThreeTest from '../components/ThreeTest.vue'
import FourTest from '../components/FourTest.vue'
import FiveTest from '../components/FiveTest.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello/:id/post/:name',
      name: 'Hello',
      component: Hello,
      children:[
        {
          path:'',
          component: DeafultTest
        },
        {
          path:'onetest/:mm',
          component: OneTest
        },
        {
          path:'twotest',
          //注意 这里是多了个s
          components: {
           a: TwoTest,
           b: ThreeTest
          }
        },
      ]
    },
    {
      path:'/fourtest',
      name:'个人',
    component:FourTest
    },
    {
      path:'/fourtest/:yyy',
      name:'内容',
      component:FiveTest
    }
  ]
})
