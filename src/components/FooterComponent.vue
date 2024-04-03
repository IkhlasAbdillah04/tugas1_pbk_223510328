<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">© 2024 Copyright. "Built using Vue.js"</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.footer {
  background-color: #190440;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: 50px;
}

.footer-text {
  margin: 0;
  font-size: 14px;
}
</style>
