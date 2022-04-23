import { createRouter, createWebHistory } from "vue-router";

import ExemplosIndex from '../components/exemplos/ExemplosIndex'
import ExemplosCreate from '../components/exemplos/ExemplosCreate'
import ExemplosEdit from '../components/exemplos/ExemplosEdit'

const routes = [
    {
        path: '/dashboard',
        name: 'exemplos.index',
        component: ExemplosIndex
    },
    {
        path: '/exemplos/create',
        name: 'exemplos.create',
        component: ExemplosCreate
    },
    {
        path: '/exemplos/:id/edit',
        name: 'exemplos.edit',
        component: ExemplosEdit,
        props: true
    }
    
]

export default createRouter({
    history: createWebHistory(),
    routes
})
