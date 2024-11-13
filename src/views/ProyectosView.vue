<template>
  <div class="proyectos-view">
    <div class="container mt-4">
      <h2 class="text-center mb-4">Mis Proyectos</h2>

      <!-- Aquí se incluirá el componente ListarProyectos -->
      <ListarProyectos />
    </div>
  </div>
</template>

<script>
// Importa el componente ListarProyectos
import ListarProyectos from '@/components/ProyectoItem.vue'; // Ruta correcta

export default {
  name: 'ProyectosView',
  components: {
    ListarProyectos
  }
};
</script>

<style scoped>
.proyectos-view {
  background-color: #f8f9fa;
  padding: 20px 0;
}

h2 {
  font-size: 2rem;
  color: #343a40;
  font-weight: 600;
}
</style>
