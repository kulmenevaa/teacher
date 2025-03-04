import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import ('@/pages/Home.vue'),
        meta: {
            breadcrumb: 'Главная',
            middleware: []
        }
    },
]

export default routes