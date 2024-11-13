<template>
  <div class="contacto bg-secondary text-white py-5">
    <div class="container">
      <h1 class="text-center mb-4">Página de Contacto</h1>
      <form class="contact-form">
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" placeholder="Tu nombre">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email" class="form-control" id="email" placeholder="Tu correo electrónico">
        </div>
        <div class="mb-3">
          <label for="subject" class="form-label">Asunto</label>
          <input type="text" class="form-control" id="subject" placeholder="Asunto">
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensaje</label>
          <textarea class="form-control" id="message" rows="5" placeholder="Tu mensaje"></textarea>
        </div>
        <button type="submit" class="btn btn-info"><i class="fas fa-paper-plane"></i> Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacto'
}
</script>

<style scoped>
.contacto {
  background-color: #343a40;
}

.contact-form .form-control {
  background-color: #495057;
  border: none;
  color: white;
}

.contact-form .form-control:focus {
  background-color: #495057;
  color: white;
  border-color: #ffc107;
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
}

.contact-form label {
  color: #ffc107;
}

.contact-form .btn {
  color: white;
  transition: background-color 0.3s ease;
}

.contact-form .btn:hover {
  background-color: #ffc107;
  color: #343a40;
}
</style>
