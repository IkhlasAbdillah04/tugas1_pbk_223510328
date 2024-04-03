<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="judul">
          <h1>{{ judul }}</h1>
        </div>
        <div class="penjelasan">
          <p>{{ deskripsi }}</p>
        </div>
        <div class="eksperience">
          <h5>{{ judul2 }}</h5>
          <p>{{ bio2 }}</p>
          <h5>{{ judul3 }}</h5>
          <p>{{ bio3 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EksperienceComponent',
  data() {
    return {
      judul: 'EXPERIENCE',
      deskripsi:
        'Being a dedicated beginner in this sector, I offer a wide range of experience and knowledge to every project. I can flourish in a fast-paced, dynamic atmosphere because of this.',
      judul2: 'FRONT-END DEVELOPER',
      bio2: 'My job as a website interface developer is to help create user interfaces for websites that are customized to match the demands of users. To guarantee smooth alignment between the server and interface functionalities, extensive collaboration with the backend team is required. My main goal is to design interfaces that improve user experience by being both aesthetically pleasing and functionally optimized. In order to do this, I use my proficiency with HTML, CSS, and JavaScript to create immersive, responsive user interfaces that successfully draw in and hold on to users.',
      judul3: 'BACK-END DEVELOPER',
      bio3: 'My job as a back-end application developer will engage me in many significant facets of software development. Application architecture, API development, database management, business logic development, application security, and other duties are some of the ones I would have to do.'
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.container {
  margin-top: 50px;
}

.judul h1 {
  color: #032063;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
}

.penjelasan p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5;
  text-align: center;
  margin-top: 20px;
}

.eksperience {
  text-align: left;
  margin-top: 20px;
}

.eksperience h5 {
  color: #00a1f7;
  font-weight: 600;
  margin-bottom: 10px;
}

.eksperience p {
  font-size: 0, 5rem;
  color: #666;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 10px;
}

.container {
  animation: zoomIn 2s ease-in-out;
}

@keyframes zoomIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
