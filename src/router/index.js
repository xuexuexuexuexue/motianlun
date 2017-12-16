import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import Home from '@/components/Home'
import Show from '@/components/Show'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import Showinfo from '@/components/Showinfo'
import Personal from '@/components/Personal'
import Myorder from '@/components/Myorder'
import Myaddr from '@/components/Myaddr'
import Checkticket from '@/components/Checkticket'
import Confirmorder from '@/components/Confirmorder'
import Checkcity from '@/components/Checkcity'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: "/home"
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/show',
            name: 'Show',
            component: Show
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/showinfo/:showOID',
            name: 'Showinfo',
            component: Showinfo
        },
        {
            path: '/personal',
            name: 'Personal',
            component: Personal
        },
        {
            path: '/myorder',
            name: 'Myorder',
            component: Myorder
        },
        {
            path: '/myaddr',
            name: 'Myaddr',
            component: Myaddr
        },
        {
            path: '/checkticket',
            name: 'Checkticket',
            component: Checkticket
        },
        {
            path: '/confirmorder',
            name: 'Confirmorder',
            component: Confirmorder
        },
        {
            path: '/checkcity',
            name: 'Checkcity',
            component: Checkcity
        }
    ]
})