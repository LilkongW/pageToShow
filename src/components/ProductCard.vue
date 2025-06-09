<template>
    <div class="bg-white shadow-md rounded-lg p-4 w-64">
      <img :src="image" alt="Product Image" class="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 class="text-2xl font-semibold text-gray-800">{{ title }}</h2>
      <p class="text-gray-600 mt-2">{{ description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-xl font-bold text-green-600">${{ price }}</span>
        <!-- Botón de compra -->
        <router-link :to="`/product/${productId}`">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Comprar
          </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    defineProps({
      title: String,
      description: String,
      price: String,
      image: String,
      productId: String  // Agregar un ID único para cada producto
    })
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales para la card aquí */
  </style>
  