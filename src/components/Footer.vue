<template>
  <div class="footer bg-secondary py-3">
    <div class="container text-white">
      <div class="row justify-content-center">

        <a href="https://www.instagram.com/oblibium/" class="nav-link col-3 text-center" target="_blank"
          rel="noopener noreferrer">
          <i class="fab fa-instagram"></i>
          <span class="d-block">Instagram</span>
        </a>

        <a href="https://www.facebook.com/Oblivium" class="nav-link col-3 text-center" target="_blank"
          rel="noopener noreferrer">
          <i class="fab fa-facebook-f"></i>
          <span class="d-block">Facebook</span>
        </a>

        <a href="https://www.linkedin.com/in/luisreyesmiranda/" class="nav-link col-3 text-center" target="_blank"
          rel="noopener noreferrer">
          <i class="fab fa-linkedin-in"></i>
          <span class="d-block">LinkedIn</span>
        </a>

        <router-link class="nav-link col-3 text-center" to="/contacto">
          <i class="fas fa-envelope"></i>
          <span class="d-block">Contacto</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  background-color: #343a40;
}

.nav-link {
  color: white;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffc107;
}

.nav-link i {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.nav-link span {
  display: block;
  font-size: 0.9rem;
}
</style>
