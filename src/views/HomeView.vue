<template>
  <div class="home bg-dark text-white">
    <div class="container py-5">
      <!-- Sección de Bienvenida -->
      <div class="row justify-content-center text-center">
        <div class="col-md-8">
          <h1 class="display-4 mb-4">Bienvenido a mi Portafolio</h1>
          <p class="lead">
            Este es el espacio donde comparto mis proyectos, habilidades y soluciones tecnológicas. Si buscas innovación, calidad y un enfoque meticuloso, ¡has llegado al lugar correcto!
          </p>
          <router-link class="btn btn-info mt-3" to="/proyectos">Explorar mis Proyectos</router-link>
          <router-link class="btn btn-outline-info mt-3 ml-3" to="/contacto">Contactar</router-link>
        </div>
      </div>

      <!-- Sección de Áreas de Especialización -->
      <div class="row mt-5">
        <div class="col-12 text-center mb-4">
          <h2>Áreas de Especialización</h2>
          <p>Estas son las áreas donde me enfoco para crear soluciones personalizadas:</p>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <i class="fas fa-laptop-code fa-4x mb-3"></i>
            <h4>Desarrollo Web</h4>
            <p>Diseño y desarrollo de sitios web interactivos y funcionales, adaptados a las necesidades de cada cliente.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <i class="fas fa-cogs fa-4x mb-3"></i>
            <h4>Soluciones a Medida</h4>
            <p>Creación de software personalizado para mejorar procesos y aumentar la eficiencia empresarial.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <i class="fas fa-users fa-4x mb-3"></i>
            <h4>Consultoría Tecnológica</h4>
            <p>Brindo asesoría experta en la implementación de tecnologías innovadoras para optimizar proyectos.</p>
          </div>
        </div>
      </div>

      <!-- Sección de Testimonios o Reseñas -->
      <div class="row mt-5">
        <div class="col-12 text-center mb-4">
          <h2>Lo que dicen mis clientes</h2>
        </div>
        <div class="col-md-4">
          <div class="testimonial-item">
            <p>"¡Excelente trabajo! El desarrollo de nuestra plataforma web fue impecable y a tiempo."</p>
            <h5>- Cliente A</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-item">
            <p>"Un enfoque muy profesional y meticuloso. La solución que nos ofreció superó nuestras expectativas."</p>
            <h5>- Cliente B</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-item">
            <p>"Trabajo excelente, siempre superando los plazos y entregando soluciones innovadoras."</p>
            <h5>- Cliente C</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  background-color: #343a40;
}

.service-item, .testimonial-item {
  background-color: #495057;
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
}

.service-item:hover, .testimonial-item:hover {
  background-color: #ffc107;
}

.service-item i, .testimonial-item i {
  color: #ffc107;
}

.service-item h4, .testimonial-item h5 {
  color: #ffc107;
}

.testimonial-item p {
  color: #e0e0e0;
}

@media (max-width: 992px) {
  .home .lead {
    font-size: 1rem;
  }

  .service-item, .testimonial-item {
    margin-bottom: 10px;
  }
}
</style>
