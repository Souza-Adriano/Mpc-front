import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/components/Home/Home'
import KeyPad from '@/components/KeyPad/KeyPad'

const routes = [{
    name: 'Home',
    path: '/',
    component: Home
},{
    name: 'KeyPad',
    path: '/keypad',
    component: KeyPad
}]

export default new VueRouter({
    mode: 'history',
    routes
})