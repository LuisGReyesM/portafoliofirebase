<template>
  <div class="container">
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-12 col-md-4 mb-4">
        <div class="card">
          <img v-if="project.imgProject" :src="project.imgProject" alt="Imagen del proyecto" class="card-img-top project-image" />
          <div class="card-body">
            <h5 class="card-title">{{ project.nameProject }}</h5>   
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ListarProyectos',

  computed: {
    ...mapState({
      projects: state => state.projects,
    }),
  },

  mounted() {
    console.log('Cargando proyectos...');
    this.$store.dispatch('getProjects');
  },

  methods: {
    ...mapActions(['removeProject']),
  },
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  /* Aumentado para pantallas más grandes */
  margin: 0 auto;
}

h2 {
  color: #ffc107;
  /* Amarillo para el título */
  font-family: 'Arial', sans-serif;
  /* Fuente moderna */
}

.card {
  background-color: #495057;
  /* Fondo oscuro para las tarjetas */
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Sombra suave */
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.2rem;
  color: #ffc107;
  /* Amarillo para los nombres de los proyectos */
}

.project-image {
  width: 100%;
  /* La imagen ocupa todo el ancho del contenedor */
  height: 200px;
  /* Altura fija para la imagen */
  object-fit: cover;
  /* Mantiene la relación de aspecto y recorta la imagen si es necesario */
  border-radius: 5px;
  margin-top: 10px;
  /* Separación de la imagen del contenido */
}

@media (max-width: 767px) {
  .project-image {
    height: 150px;
    /* Ajustar el tamaño de la imagen en pantallas pequeñas */
  }
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
