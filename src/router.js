import Vue from 'vue'
import Router from 'vue-router'


const Table = () => import('./views/table/Table.vue')
const Other = () => import('./views/other/Other.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/table'
        },
        {
            path: '/table',
            name: 'table',
            component: Table
        },
        {
            path: '/other',
            name: 'other',
            component: Other
        }

    ]
})
