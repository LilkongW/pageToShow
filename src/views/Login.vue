<template>
  <div class="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-content2/50">
    <div class="w-full max-w-md relative">
      <div class="absolute top-4 left-4">
        <button
          class="p-2 rounded-full hover:bg-default-100"
          aria-label="Volver"
          @click="onClose"
        >
          <Icon icon="lucide:arrow-left" class="h-5 w-5" />
        </button>
      </div>

      <div class="bg-content1 border border-default-200 rounded-xl shadow p-6">
        <div class="flex flex-col items-center gap-2">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
            <Icon icon="lucide:shopping-bag" class="text-primary text-2xl" />
          </div>
          <h1 class="text-2xl font-bold text-foreground">Iniciar sesión</h1>
          <p class="text-sm text-foreground-500 text-center">
            Accede a tu cuenta para gestionar tus pedidos
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
          <div
            v-if="error"
            class="p-3 rounded-medium bg-danger-50 border border-danger text-danger text-sm"
          >
            {{ error }}
          </div>

          <div>
            <label class="block text-sm font-medium mb-1" for="email">Correo electrónico</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon icon="lucide:mail" class="text-default-400 text-sm" />
              </span>
              <input
                id="email"
                type="email"
                v-model="email"
                class="pl-10 w-full border border-default-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1" for="password">Contraseña</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon icon="lucide:lock" class="text-default-400 text-sm" />
              </span>
              <input
                id="password"
                type="password"
                v-model="password"
                class="pl-10 w-full border border-default-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="rememberMe"
                class="form-checkbox text-primary rounded-sm"
              />
              <span>Recordarme</span>
            </label>
            <a href="#" class="text-primary">¿Olvidaste tu contraseña?</a>
          </div>

          <button
            type="submit"
            class="w-full bg-primary text-white font-medium py-2 rounded-lg hover:bg-primary/90 transition duration-150 disabled:opacity-50"
            :disabled="isLoading"
          >
            <span v-if="isLoading">Cargando...</span>
            <span v-else>Iniciar sesión</span>
          </button>

          <div class="relative my-4">
            <hr class="border-default-200" />
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-content1 px-2 text-foreground-500 text-sm"
            >
              o continúa con
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <button
              type="button"
              class="border border-default-200 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-default-100 transition"
            >
              <Icon icon="logos:google-icon" class="h-5 w-5" />
              <span class="text-sm">Google</span>
            </button>
            <button
              type="button"
              class="border border-default-200 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-default-100 transition"
            >
              <Icon icon="logos:facebook" class="h-5 w-5" />
              <span class="text-sm">Facebook</span>
            </button>
          </div>

          <div class="text-center mt-6 text-sm text-foreground-500">
            ¿No tienes una cuenta?
            <a href="#" class="text-primary font-medium">Regístrate</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

// Props
defineProps({
  onLoginSuccess: Function,
  onClose: Function
});

// State
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const isLoading = ref(false);
const error = ref("");

// Submit handler
function handleSubmit() {
  error.value = "";

  if (!email.value || !password.value) {
    error.value = "Por favor, complete todos los campos.";
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    if (typeof onLoginSuccess === "function") {
      onLoginSuccess();
    }
  }, 1500);
}
</script>
