<template>
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <v-card class="newsletter-card">
          <v-card-text class="pa-8 pa-md-12 text-center">
            <v-icon color="primary" size="48" class="mb-4">mdi-email-outline</v-icon>
            <h2 class="text-2xl md:text-3xl font-weight-bold text-foreground mb-2">
              Suscríbete a nuestro boletín
            </h2>
            <p class="text-foreground-600 mb-6 mx-auto" style="max-width: 32rem;">
              Recibe las últimas novedades, ofertas exclusivas y descuentos directamente en tu correo.
            </p>
  
            <div class="d-flex flex-column flex-sm-row gap-4 mx-auto" style="max-width: 32rem;">
              <v-text-field
                v-model="email"
                type="email"
                placeholder="Tu correo electrónico"
                variant="outlined"
                density="comfortable"
                class="flex-grow"
                hide-details
              />
              <v-btn color="primary" size="large" class="font-weight-medium">
                Suscribirse
              </v-btn>
            </div>
  
            <p class="text-foreground-500 text-sm mt-4">
              No enviamos spam. Puedes cancelar la suscripción en cualquier momento.
            </p>
          </v-card-text>
        </v-card>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  </script>
  
  <style scoped>
  .text-foreground {
    color: #1f2937;
  }
  .text-foreground-500 {
    color: #6b7280;
  }
  .text-foreground-600 {
    color: #4b5563;
  }
  
  .newsletter-card {
    border: 1px solid #e5e7eb;
    background: linear-gradient(to right, #f0f9ff, #e0f2fe);
  }
  .dark .newsletter-card {
    background: linear-gradient(to right, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2));
  }
  </style>
  