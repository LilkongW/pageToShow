<template>
    <footer class="bg-content1 border-t border-default-200">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Sección de la tienda -->
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center mb-4">
              <Icon icon="lucide:shopping-bag" class="text-primary text-2xl" />
              <p class="font-bold text-inherit ml-2">TIENDA</p>
            </div>
            <p class="text-foreground-500 text-sm mb-4">
              Ofreciendo productos de calidad desde 2010. Tu satisfacción es nuestra prioridad.
            </p>
            <div class="flex space-x-4">
              <RouterLink to="#" class="text-foreground-500 hover:text-primary">
                <Icon icon="lucide:facebook" class="h-5 w-5" />
              </RouterLink>
              <RouterLink to="#" class="text-foreground-500 hover:text-primary">
                <Icon icon="lucide:instagram" class="h-5 w-5" />
              </RouterLink>
              <RouterLink to="#" class="text-foreground-500 hover:text-primary">
                <Icon icon="lucide:twitter" class="h-5 w-5" />
              </RouterLink>
              <RouterLink to="#" class="text-foreground-500 hover:text-primary">
                <Icon icon="lucide:youtube" class="h-5 w-5" />
              </RouterLink>
            </div>
          </div>
  
          <!-- Productos -->
          <div>
            <h3 class="font-semibold text-foreground mb-4">Productos</h3>
            <ul class="space-y-2">
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Novedades</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Más vendidos</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Ofertas</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Descuentos</RouterLink>
              </li>
            </ul>
          </div>
  
          <!-- Información -->
          <div>
            <h3 class="font-semibold text-foreground mb-4">Información</h3>
            <ul class="space-y-2">
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Sobre nosotros</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Contacto</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Política de privacidad</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Términos y condiciones</RouterLink>
              </li>
            </ul>
          </div>
  
          <!-- Servicio al cliente -->
          <div>
            <h3 class="font-semibold text-foreground mb-4">Servicio al cliente</h3>
            <ul class="space-y-2">
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Mi cuenta</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Seguimiento de pedidos</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Devoluciones</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="text-foreground-500 hover:text-primary">Ayuda</RouterLink>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Sección inferior -->
        <div class="border-t border-default-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-foreground-500 text-sm">
            © {{ year }} TIENDA. Todos los derechos reservados.
          </p>
          <div class="flex items-center space-x-4 mt-4 md:mt-0">
            <img
              src="https://img.heroui.chat/image/finance?w=40&h=25&u=visa"
              alt="Visa"
              class="h-6"
            />
            <img
              src="https://img.heroui.chat/image/finance?w=40&h=25&u=mastercard"
              alt="Mastercard"
              class="h-6"
            />
            <img
              src="https://img.heroui.chat/image/finance?w=40&h=25&u=paypal"
              alt="PayPal"
              class="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { Icon } from "@iconify/vue";
  import { RouterLink } from "vue-router";
  
  const year = new Date().getFullYear();
  </script>
  
  <style scoped>
  /* Si necesitas añadir estilos específicos, puedes hacerlo aquí */
  </style>
  