<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
    <div class="relative">
      <span
        v-if="icon"
        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        <Icon :icon="icon" class="w-4 h-4" />
      </span>
      <input
        :type="type"
        @input="handleInput"
        class="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        :class="{
          'pl-10': icon,
          'border-red-500': error
        }"
        :required="required"
      />
    </div>
    <p v-if="error" class="text-xs text-red-500 mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  modelValue: string | File | null;
  label: string;
  icon?: string;
  type?: string;
  error?: string;
  required?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (!target) return;

  if (props.type === "file") {
    emit("update:modelValue", target.files?.[0] || null);
  } else {
    emit("update:modelValue", target.value);
  }
}
</script>
