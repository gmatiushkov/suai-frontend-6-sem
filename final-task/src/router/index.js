import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Home', component: () => import('../views/HomePage.vue') },
    { path: '/tech', name: 'Tech', component: () => import('../views/TechPage.vue') },
    { path: '/issues', name: 'Issues', component: () => import('../views/IssuesPage.vue') },
    { path: '/form', name: 'Form', component: () => import('../views/FormPage.vue') }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;