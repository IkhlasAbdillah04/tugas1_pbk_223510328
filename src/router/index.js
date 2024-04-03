import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/Home.vue'
import EksperienceComponent from '../components/Eksperience.vue'
import ContactMe from '../components/ContactMe.vue'
import FooterComponent from '../components/FooterComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/eksperience',
      name: 'eksperience',
      component: EksperienceComponent
    },
    {
      path: '/contactme',
      name: 'contactme',
      component: ContactMe
    },
    {
      path: '/footer',
      name: 'footer',
      component: FooterComponent
    }
  ]
})

export default router
