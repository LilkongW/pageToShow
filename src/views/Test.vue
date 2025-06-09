<template>
    <div class="min-h-screen flex flex-col items-center p-6">
      <h1 class="text-4xl font-bold text-blue-600 mb-8">Página de Test</h1>
  
      <ProductCard
        title="Producto 1"
        description="Este es un producto increíble que puedes comprar."
        :price="20.00"
        image="https://via.placeholder.com/300"
        productId="prod-1"
      />
      
      <ProductCard
        title="Producto 2"
        description="Este es otro producto increíble para ti."
        :price="30.00"
        image="https://via.placeholder.com/300"
        productId="prod-2"
      />
  
      <!-- Puedes agregar más <ProductCard /> según sea necesario -->
    </div>
  </template>
  
  <script setup lang="ts">
  import ProductCard from '../components/ProductCard.vue'  // Importa el componente ProductCard
  </script>
  
  <style scoped>
  /* Puedes agregar estilos específicos para la página aquí */
  </style>
  