<template>
<div class="p-6 max-w-2xl mx-auto">
    <h1 class="text-4xl font-bold text-blue-600 mb-8">Formulario de Pago</h1>

    <div class="bg-white shadow-md rounded-lg p-4">
    <h2 class="text-2xl font-semibold text-gray-800">{{ product.title }}</h2>
    <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-lg mb-4" />
    <p class="text-gray-600 mt-2">{{ product.description }}</p>
    <span class="text-xl font-bold text-green-600">${{ product.price }}</span>

    <form class="mt-6">
        <div class="mb-4">
        <label for="name" class="block text-gray-700">Nombre Completo</label>
        <input type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div class="mb-4">
        <label for="card" class="block text-gray-700">Número de Tarjeta</label>
        <input type="text" id="card" name="card" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div class="mb-4">
        <label for="expiry" class="block text-gray-700">Fecha de Expiración</label>
        <input type="text" id="expiry" name="expiry" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div class="mb-4">
        <label for="cvv" class="block text-gray-700">CVV</label>
        <input type="text" id="cvv" name="cvv" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Realizar Pago
        </button>
    </form>
    </div>
</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { products } from '../data/products'  // Importas el mismo array

const route = useRoute()
const productId = route.params.id as string

const product = products.find(p => p.productId === productId) || {
  title: 'Producto no encontrado',
  description: 'Producto no disponible',
  price: '0.00',
  image: 'https://via.placeholder.com/300'
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales para la página de pago aquí */
</style>
