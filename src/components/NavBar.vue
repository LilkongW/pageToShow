<template>
  <nav class="bg-background border-b border-default-200 w-full">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Brand -->
        <RouterLink to="/" class="flex items-center space-x-2">
          <Icon icon="lucide:shopping-bag" class="text-primary text-2xl" />
          <span class="font-bold text-foreground">TIENDA</span>
        </RouterLink>

        <!-- Center links -->
        <div class="hidden sm:flex space-x-6">
          <RouterLink
            to="/"
            class="text-sm text-foreground hover:text-primary font-medium"
            :class="{ 'text-primary': isActiveRoute('/') }"
          >
            Inicio
          </RouterLink>
          <RouterLink
            to="/productos"
            class="text-sm text-foreground hover:text-primary font-medium"
            :class="{ 'text-primary': isActiveRoute('/productos') }"
          >
            Productos
          </RouterLink>

           <!--
            <RouterLink
              to="/categorias"
              class="text-sm text-foreground hover:text-primary font-medium"
              :class="{ 'text-primary': isActiveRoute('/categorias') }"
            >
              Categorías
            </RouterLink>
            <RouterLink
              to="/ofertas"
              class="text-sm text-foreground hover:text-primary font-medium"
              :class="{ 'text-primary': isActiveRoute('/ofertas') }"
            >
              Ofertas
            </RouterLink>
          -->
          

        </div>

        <!-- Right section -->
        <div class="flex items-center space-x-4">
          <RouterLink
            to="/login"
            class="hidden lg:inline-block text-sm text-foreground hover:text-primary font-medium"
          >
            Iniciar sesión
          </RouterLink>
          <RouterLink
            to="/register"
            class="hidden lg:inline-block text-sm text-foreground hover:text-primary font-medium"
          >
            Registrarse
          </RouterLink>
          <RouterLink
            to="/carrito"
            class="inline-flex items-center space-x-2 bg-primary/10 text-primary text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary/20 transition"
          >
            <Icon icon="lucide:shopping-cart" class="text-lg" />
            <span>Carrito</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

const route = useRoute();

function isActiveRoute(path: string) {
  return route.path === path;
}
</script>

<style scoped>
/* Opcional: para personalizar el fondo y los colores si usas un theme */
</style>
