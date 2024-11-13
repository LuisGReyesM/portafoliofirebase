<template>
    <div class="container mt-4">
      <h2 class="text-center mb-4">Lista de Projectos</h2>
      
      <ul class="list-group">
        <li v-for="project in projects" :key="project.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>Nombre :{{ project.nameProject }}</strong><br />
            <span>Imagen :{{ project.imgProject }}</span>
          </div>
          <!-- Botón para eliminar el usuario -->
          <!-- <button @click="removeUsuario(usuario.id)" class="btn btn-danger btn-sm">
            Eliminar
          </button> -->
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'; 
  
  export default {
    name: 'ListarProyectos',  
  
    computed: {
      // Utiliza 'mapState' para mapear el estado global de Vuex a las propiedades locales del componente
      ...mapState({      
        projects: state => state.projects,  
      }),
    },
  
    mounted() {
    // Cargar datos o ejecutar acciones que necesitan que el DOM esté disponible.
    console.log('Cargando proyectos...');
    this.$store.dispatch('getProjects');
  },
  
    methods: {
      // Mapea la acción 'removeUsuario' del store global a un método local en el componente
    //   ...mapActions(['removeUsuario']),  
    },
  };
  </script>
  
  <style scoped>
  </style>
  