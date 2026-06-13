import Home from './home.js'
import Associazione from './associazione.js'
import Ricerca from './ricerca.js'
import Educativi from './educativi.js'
import Contatti from './contatti.js'
import Privacy from './privacy.js'
import NotFound from './notfound.js'


const { createApp } = Vue;


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/index.html',  redirect: { name: 'home' } },
    { path: '/associazione', component: Associazione },
    { path: '/ricerca', component: Ricerca },
    { path: '/educativi', component: Educativi },
    { path: '/contatti', component: Contatti },
    { path: '/privacy', component: Privacy },
    { path: '/:pathMatch(.*)', redirect: { name: 'home' } },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
});

const app = createApp({
    data() {
        return {
        };
    },
});

app.use(router);


const mountedApp = app.mount("#app");
