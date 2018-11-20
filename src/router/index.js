import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Body from '@/components/Body'
import Header from '@/components/Header'
import parent from '@/components/sonparent/parent'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/body',
            name: 'Body',
            component: Body
        },
        {
            path:'/header',
            name:'Header',
            component:Header
        },
        {
            path:'/parent',
            name:'parent',
            component:parent
        }
    ]
})
