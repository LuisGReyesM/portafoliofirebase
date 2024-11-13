<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-secondary py-3">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <router-link class="nav-link text-center" to="/">
              <i class="fas fa-home"></i>
              <span class="d-block">Home</span>
            </router-link> 
            <router-link class="nav-link text-center" to="/about">
              <i class="fas fa-user"></i>
              <span class="d-block">Acerca de mí</span>
            </router-link> 
            <router-link class="nav-link text-center" to="/proyectos">
              <i class="fas fa-briefcase"></i>
              <span class="d-block">Mis proyectos</span>
            </router-link> 
            <router-link class="nav-link text-center" to="/contacto">
              <i class="fas fa-envelope"></i>
              <span class="d-block">Contacto</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #343a40;
}

.nav-link {
  color: white;
  transition: color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-link:hover {
  color: #ffc107;
}

.nav-link i {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.nav-link span {
  font-size: 0.9rem;
}
</style>
