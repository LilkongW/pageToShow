<template>
    <section class="py-16 bg-surface">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Título -->
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold text-primary">Explora por Categoría</h2>
          <p class="text-medium-emphasis mt-2">Encuentra exactamente lo que estás buscando</p>
        </div>
  
        <!-- Categorías -->
        <v-row dense>
          <v-col
            v-for="category in categories"
            :key="category.id"
            cols="12"
            sm="6"
            lg="3"
          >
            <v-card
              class="rounded-lg overflow-hidden h-64"
              hover
            >
              <div class="relative h-100">
                <v-img
                  :src="category.image"
                  :alt="category.name"
                  class="absolute inset-0"
                  height="100%"
                  cover
                />
                <div class="absolute inset-0 d-flex flex-column justify-end px-4 py-3"
                     style="background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);">
                  <div class="d-flex align-center mb-2">
                    <div class="w-10 h-10 rounded-circle bg-white bg-opacity-20 backdrop-blur-sm d-flex align-center justify-center">
                      <v-icon color="white">{{ category.icon }}</v-icon>
                    </div>
                  </div>
                  <h3 class="text-white text-subtitle-1 font-weight-semibold">{{ category.name }}</h3>
                  <p class="text-white text-body-2">{{ category.count }} productos</p>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
  
        <!-- Botón -->
        <div class="mt-10 text-center">
          <v-btn
            color="primary"
            variant="outlined"
            size="large"
          >
            Ver todas las categorías
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const categories = [
    {
      id: 1,
      name: 'Electrónica',
      icon: 'mdi-cpu-64-bit',
      image: 'https://img.heroui.chat/image/fashion?w=400&h=300&u=21',
      count: 120,
    },
    {
      id: 2,
      name: 'Ropa',
      icon: 'mdi-tshirt-crew',
      image: 'https://img.heroui.chat/image/clothing?w=400&h=300&u=22',
      count: 250,
    },
    {
      id: 3,
      name: 'Hogar',
      icon: 'mdi-home-outline',
      image: 'https://img.heroui.chat/image/furniture?w=400&h=300&u=23',
      count: 180,
    },
    {
      id: 4,
      name: 'Deportes',
      icon: 'mdi-dumbbell',
      image: 'https://img.heroui.chat/image/sports?w=400&h=300&u=24',
      count: 95,
    },
  ]
  </script>
  