<template>
  <div class="acerca-de-mi bg-secondary text-white py-5">
    <div class="container">
      <h1 class="text-center mb-4">Acerca de mí</h1>
      <div class="row">
        <div class="col-md-6">
          <p class="lead">
            ¡Hola! Vivo en Valparaíso. Me apasiona la programación, la tecnología y los deportes en general. A lo largo de mi carrera he tenido la oportunidad de trabajar en proyectos fascinantes que me han permitido desarrollar soluciones innovadoras y eficaces.
          </p>
          <p class="lead">
            Me considero una persona alegre, perseverante y metódica. Creo que el trabajo en equipo y la comunicación son fundamentales para alcanzar grandes resultados. En mi tiempo libre, disfruto practicar deportes, especialmente actividades al aire libre, lo que me ayuda a mantenerme equilibrado tanto física como mentalmente.
          </p>
        </div>
        <div class="col-md-6 text-center">
          <img src="https://via.placeholder.com/300" alt="Foto de perfil" class="img-fluid rounded-circle">
        </div>
      </div>

      <div class="mt-5 text-center">
        <h3 class="mb-4">Habilidades y pasiones</h3>
        <div class="row">
          <div class="col-md-4">
            <div class="skill-item">
              <i class="fas fa-laptop-code fa-3x mb-2"></i>
              <h5>Programación</h5>
              <p>Me apasiona escribir código limpio y eficiente, siempre buscando mejorar la calidad y optimización de las soluciones.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="skill-item">
              <i class="fas fa-running fa-3x mb-2"></i>
              <h5>Deportes</h5>
              <p>El deporte me ayuda a mantenerme en forma y enfocado. Practico diversas actividades al aire libre.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="skill-item">
              <i class="fas fa-users fa-3x mb-2"></i>
              <h5>Trabajo en equipo</h5>
              <p>Me encanta colaborar con otros, intercambiar ideas y aprender de los demás para lograr grandes objetivos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcercaDeMi'
}
</script>

<style scoped>
.acerca-de-mi {
  background-color: #343a40;
}

.lead {
  font-size: 1.2rem;
  line-height: 1.6;
}

img {
  max-width: 300px;
  border-radius: 50%;
}

.skill-item {
  background-color: #495057;
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  transition: background-color 0.3s ease;
}

.skill-item:hover {
  background-color: #ffc107;
}

.skill-item i {
  color: #ffc107;
}

.skill-item h5 {
  margin-top: 10px;
  color: #ffc107;
}

@media (max-width: 992px) {
  .acerca-de-mi .lead {
    font-size: 1rem;
  }
}
</style>
