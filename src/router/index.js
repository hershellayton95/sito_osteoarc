import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Associazione from '../views/Associazione.vue'
import Ricerca from '../views/Ricerca.vue'
import Educativi from '../views/Educativi.vue'
import Contatti from '../views/Contatti.vue'
import Privacy from '../views/Privacy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/associazione', name: 'associazione', component: Associazione },
    { path: '/ricerca', name: 'ricerca', component: Ricerca },
    { path: '/educativi', name: 'educativi', component: Educativi },
    { path: '/contatti', name: 'contatti', component: Contatti },
    { path: '/privacy', name: 'privacy', component: Privacy },
    { path: '/:pathMatch(.*)', name: 'ifnotexist', redirect: { name: 'home' } },
  ],
})

export default router
