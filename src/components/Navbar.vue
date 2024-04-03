<template>
  <div>
    <!-- Letakkan tombol toggle di luar div .wrap_navbar -->
    <button class="navbar-toggler" type="button" @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="wrap_navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid wrap navbar pt-3">
          <a class="navbar-brand" href="#"><h4 class="mb-0">PORTOFOLIO</h4></a>
          <!-- Buat div untuk navbar-collapse -->
          <div :class="['collapse', { show: isNavbarOpen }]" class="navbar-collapse">
            <div class="navbar-nav ml-auto">
              <a @click="scrollToSection('home')" class="nav-link">Home</a>
              <a @click="scrollToSection('eksperience')" class="nav-link">Experience</a>
              <a @click="scrollToSection('contactme')" class="nav-link">Contact Me</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isScrolled: false,
      isNavbarOpen: false // Tambahkan state untuk mengontrol tampilan navbar di tampilan seluler
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        })
        this.toggleNavbar() // Tutup navbar setelah mengklik tautan di tampilan seluler
      }
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen // Toggle nilai state untuk mengubah tampilan navbar di tampilan seluler
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.wrap_navbar {
  height: 80px;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  background-color: #000000;
  z-index: 99999;
  border-bottom: 1px solid #00a1f7;
}

.navbar-scrolled {
  background-color: rgba(0, 0, 0, 0.7);
}

.navbar-brand h4 {
  color: #00a2f7;
  margin-right: 5rem;
  font-size: 2rem;
}

.navbar-nav a {
  font-weight: 600;
  color: #ffffff;
  transition: 0.2s ease-in-out;
  margin-right: 2.5rem;
}

.navbar-nav {
  padding-right: 15rem;
}

.navbar-brand {
  padding-left: 5rem;
}

@media (max-width: 767px) {
  .wrap_navbar {
    height: auto;
    padding: 15px;
    position: fixed;
  }

  .navbar-toggler {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 999;
  }

  .navbar-collapse {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #000000;
    transition: transform 0.3s ease;
    transform: translateY(-100%);
  }

  .show .navbar-collapse {
    transform: translateY(0);
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    color: #ffffff;
    margin: 10px 0;
    text-decoration: none;
    font-weight: 600;
  }

  /* Penyesuaian untuk tampilan seluler */
  .wrap_navbar {
    padding: 10px;
  }

  .navbar-brand h4 {
    margin-right: 0; /* Menghapus margin */
    font-size: 1.5rem; /* Mengurangi ukuran font */
  }

  .navbar-nav {
    padding-right: 0; /* Menghapus padding */
  }

  .navbar-collapse {
    top: 60px; /* Menyesuaikan jarak atas */
    padding-top: 10px; /* Menambahkan padding atas */
  }
}
</style>
