import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Transition from '../views/Transition.vue'
import DevSkills from '../views/DevSkills.vue'
import Work from '../views/Work.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'Skills',
    component: DevSkills
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/transition',
    name: 'Transition',
    component: Transition
  },
   {
    path: '/work',
    name: 'work',
    component: Work
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
