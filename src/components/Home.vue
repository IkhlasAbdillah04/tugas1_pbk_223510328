<template>
  <div class="container">
    <div class="row pembungkus">
      <div class="col-lg-6 section">
        <div class="nama">
          <h1>Hi, I'm {{ fullname }}</h1>
        </div>
        <div class="asal">
          <h3>{{ asal }}</h3>
          <div class="deskripsi">
            <p>{{ deskripsi }}</p>
          </div>
          <div style="padding-bottom: 4rem">
            <div class="tombol">
              <a href="https://wa.me/6281261924817?text=Hai%20Ikhlas,%20saya%20ingin%20menghubungi%20Anda"
                >Contact me</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 image-col">
        <img src="@/assets/image/paspoto.png" class="img-fluid" alt="Ikhlas Abdillah's photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      fullname: 'Ikhlas Abdillah',
      asal: 'Full-Stack Programmer',
      deskripsi:
        'twenty years old Im a fourth-semester student from Pekanbaru, and I enjoy working with technology a lot. Im not sure why, but I truly enjoy it. I initially became interested in programming languages since I saw them in the game About Me, which is similar to creating a script to act as a gaming bot. Thats a little about me.'
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

.pembungkus {
  padding-top: 4rem;
  display: flex;
  align-items: center;
}

.nama h1 {
  color: #032063;
  font-size: 4rem;
  font-weight: 600;
}

.asal h3 {
  color: #00a2f7;
  padding-bottom: 1rem;
}

.deskripsi {
  text-decoration: none;
  font-weight: 300;
  padding-bottom: 1.5rem;
}

.image-col {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.tombol a {
  text-decoration: none;
  color: #00a2f7;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #00a2f7;
  font-weight: 700;
  transition: 2s ease-in-out;
  border-radius: 20px;
}

.tombol a:hover {
  background-color: #00a2f7;
  color: #0f172a;
}

.section {
  padding-bottom: 3rem;
}

.tombol-sosmed a {
  padding: 1rem 1.5rem;
  color: #00a2f7;
  background-color: transparent;
  border: 1px solid #00a2f7;
  border-radius: 50px;
  margin-right: 1.5rem;
  transition: -2s easein-out;
  font-size: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.tombol-sosmed a:hover {
  background-color: #00a2f7;
  color: #0f172a;
}

.pembungkus-tombol {
  display: flex;
  align-items: center;
}

.row {
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
