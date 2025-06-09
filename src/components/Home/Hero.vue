<template>
    <section class="relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div class="text-center md:text-left md:max-w-lg">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Descubre productos increíbles para tu estilo de vida
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
            Explora nuestra colección exclusiva de productos de alta calidad con los mejores precios del mercado.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <v-btn
              color="primary"
              size="large"
              class="font-medium"
              append-icon="mdi-arrow-right"
            >
              Comprar ahora
            </v-btn>
            <v-btn
              color="primary"
              variant="outlined"
              size="large"
              class="font-medium"
            >
              Ver catálogo
            </v-btn>
          </div>
        </div>
      </div>
  
      <div class="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block w-1/3 h-full">
        <img
          src="https://img.heroui.chat/image/fashion?w=600&h=800&u=1"
          alt="Productos destacados"
          class="object-cover w-full h-full"
        />
      </div>
  
      <div class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-200 opacity-50 blur-3xl dark:bg-blue-900/30" />
      <div class="absolute -top-24 right-10 w-72 h-72 rounded-full bg-blue-300 opacity-50 blur-3xl dark:bg-blue-800/30" />
    </section>
  </template>
  
  <script setup>
  // Vuetify ya importa sus propios componentes automáticamente si está bien configurado
  </script>
  