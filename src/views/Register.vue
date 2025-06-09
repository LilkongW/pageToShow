<template>
  <div class="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-100">
    <div class="w-full max-w-md relative">
      <button
        @click="onClose"
        class="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-100 transition"
        aria-label="Volver"
      >
        <Icon icon="lucide:arrow-left" class="h-5 w-5 text-gray-600" />
      </button>

      <div class="bg-white shadow-md rounded-xl border border-gray-200 p-6">
        <div class="flex flex-col items-center text-center gap-2">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-2">
            <Icon icon="lucide:user-plus" class="text-blue-600 text-2xl" />
          </div>
          <h1 class="text-2xl font-bold text-gray-900">Crear cuenta</h1>
          <p class="text-sm text-gray-500">Regístrate para disfrutar de todos nuestros servicios</p>
        </div>

        <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <InputField
                type="text"
                label="Nombre"
                v-model="formData.firstName"
                :error="errors.firstName"
                required
              />
            </div>
            <div>
              <InputField
                type="text"
                label="Apellido"
                v-model="formData.lastName"
                :error="errors.lastName"
                required
              />
            </div>
          </div>

          <InputField
            type="email"
            label="Correo electrónico"
            icon="lucide:mail"
            v-model="formData.email"
            :error="errors.email"
            required
          />

          <InputField
            type="password"
            label="Contraseña"
            icon="lucide:lock"
            v-model="formData.password"
            :error="errors.password"
            required
          />

          <InputField
            type="password"
            label="Confirmar contraseña"
            icon="lucide:lock"
            v-model="formData.confirmPassword"
            :error="errors.confirmPassword"
            required
          />

          <div>
            <label class="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                v-model="acceptTerms"
                class="mt-1 rounded border-gray-300"
              />
              <span>
                Acepto los
                <a href="#" class="text-blue-600 underline">términos y condiciones</a> y la
                <a href="#" class="text-blue-600 underline">política de privacidad</a>.
              </span>
            </label>
            <p v-if="errors.terms" class="text-xs text-red-500 mt-1">{{ errors.terms }}</p>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            :disabled="isLoading"
          >
            <span v-if="!isLoading">Crear cuenta</span>
            <span v-else>Cargando...</span>
          </button>

          <div class="relative my-4">
            <hr />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500 text-sm">
              o regístrate con
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <button class="border rounded-md py-2 flex justify-center items-center gap-2 hover:bg-gray-50">
              <Icon icon="logos:google-icon" class="h-5 w-5" />
              Google
            </button>
            <button class="border rounded-md py-2 flex justify-center items-center gap-2 hover:bg-gray-50">
              <Icon icon="logos:facebook" class="h-5 w-5" />
              Facebook
            </button>
          </div>

          <p class="text-sm text-center text-gray-500 mt-6">
            ¿Ya tienes una cuenta?
            <a href="#" @click.prevent="onLoginClick" class="text-blue-600 font-medium">Iniciar sesión</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Icon } from "@iconify/vue";
import InputField from "../components/InputField.vue";

interface Props {
  onRegisterSuccess: () => void;
  onClose: () => void;
  onLoginClick: () => void;
}
defineProps<Props>();

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
});
const acceptTerms = ref(false);
const isLoading = ref(false);
const errors = reactive<Record<string, string>>({});

const validateForm = () => {
  Object.keys(errors).forEach(key => errors[key] = "");

  if (!formData.firstName.trim()) errors.firstName = "El nombre es obligatorio";
  if (!formData.lastName.trim()) errors.lastName = "El apellido es obligatorio";
  if (!formData.email.trim()) {
    errors.email = "El correo es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Correo inválido";
  }
  if (!formData.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (formData.password.length < 8) {
    errors.password = "Debe tener al menos 8 caracteres";
  }
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }
  if (!acceptTerms.value) {
    errors.terms = "Debes aceptar los términos";
  }

  return Object.keys(errors).every(key => !errors[key]);
};

const handleSubmit = () => {
  if (!validateForm()) return;
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    defineProps().onRegisterSuccess();
  }, 1500);
};
</script>
