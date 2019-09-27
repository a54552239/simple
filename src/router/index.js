import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Home from './home';
import config from "../config/config";

Vue.use(Router);
const routes = [].concat(
    Home
);
// const router = new Router({
//     routes: routers
// });
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            children: routes
        },
        {
            name: 'home',
            path: '/home',
            component: resolve => require(['@/views/home'], resolve),
            meta: {model: 'Home'},
        },
    ]
});

router.beforeEach((to, from, next) => {
    const HOME_PAGE = config.HOME_PAGE;
    //页面中转
    if (to.name === 'index' || to.path === '/index' || to.path === '/') {
        next({path: HOME_PAGE});
        return false;
    }
    next();
});
router.afterEach(route => {
    //预留
    // window.scrollTo(0,0)
});

export default router
