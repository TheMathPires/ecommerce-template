import Vue from 'vue'
import VueRouter from 'vue-router'

import Products from '@/components/Products'
import ProductDetail from '@/components/ProductDetail'

Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Products,

    },
    {
        name: 'product-detail',
        path: '/product-detail',
        component: ProductDetail,
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router