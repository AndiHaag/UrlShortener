import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import Intro from './components/Intro.vue'

const routes=[
    {
        name:'Intro',
        component:Intro,
        path:'/'
    },
    {
        name:'Home',
        component:Home,
        path:'/home'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;