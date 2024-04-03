<template>
  <div id="app">
    <div class="content">
      <NavbarComponent />
      <header></header>
      <HomeComponent />
      <div id="eksperience">
        <EksperienceComponent />
      </div>
      <div id="contactme">
        <ContactMe />
      </div>
      <div id="footer">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<script setup>
import NavbarComponent from './components/Navbar.vue'
import HomeComponent from './components/Home.vue'
import EksperienceComponent from './components/Eksperience.vue'
import FooterComponent from './components/FooterComponent.vue'
import './assets/main.css'
import ContactMe from './components/ContactMe.vue'
</script>

<style></style>
