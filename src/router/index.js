
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductListPage from '../views/ProductListPage.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/san-pham/:id',
        name: 'ProductList',
        component: ProductListPage,
        props: true
    },
    {
        path: '/san-pham/chi-tiet/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else {
            return { top: 0 }
        }
    }
})

export default router
