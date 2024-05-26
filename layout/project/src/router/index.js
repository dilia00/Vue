import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import ArticlesPage from '@/pages/ArticlesPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/blog/:page?',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/blog-details/:id?',
            name: 'blog-details',
            component: ArticlesPage,
            props: true,
        },
        {
            path: '/project/:page?',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/project-details/:id',
            name: 'project-details',
            component: ProjectDetailsPage,
            props: true,
        },
        {
            path: '/404',
            name: 'error',
            component: ErrorPage
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]

})