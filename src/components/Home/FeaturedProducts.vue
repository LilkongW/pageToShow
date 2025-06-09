<template>
    <section class="py-16 px-4 max-w-7xl mx-auto">
      <!-- Título y botón -->
      <div class="d-flex flex-column flex-md-row justify-space-between align-center mb-10">
        <div>
          <h2 class="text-h4 font-weight-bold text-primary">Productos Destacados</h2>
          <p class="text-medium-emphasis mt-2">
            Descubre nuestra selección de productos más populares
          </p>
        </div>
        <v-btn class="mt-4 mt-md-0" color="primary" variant="text">
          Ver todos los productos
          <v-icon end>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
  
      <!-- Lista de productos -->
      <v-row dense>
        <v-col
          v-for="product in featuredProducts"
          :key="product.id"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-card class="rounded-lg">
            <div class="relative">
              <v-img
                :src="product.image"
                :alt="product.name"
                height="240"
                cover
                class="rounded-t-lg"
              />
              <v-badge
                v-if="product.discount > 0"
                color="error"
                :content="`-${product.discount}%`"
                class="position-absolute top-0 right-0 ma-2"
              />
            </div>
  
            <v-card-text>
              <h3 class="text-subtitle-1 font-weight-semibold">
                {{ product.name }}
              </h3>
              <div class="d-flex align-center my-2">
                <v-icon size="18" color="warning">mdi-star</v-icon>
                <span class="ml-1 text-body-2 text-medium-emphasis">
                  {{ product.rating }}
                </span>
              </div>
              <div class="d-flex align-center gap-2">
                <span
                  class="text-lg font-weight-bold"
                  :class="product.discount > 0 ? 'text-error' : 'text-primary'"
                >
                  ${{ discountedPrice(product) }}
                </span>
                <span
                  v-if="product.discount > 0"
                  class="text-body-2 text-medium-emphasis text-decoration-line-through"
                >
                  ${{ product.price.toFixed(2) }}
                </span>
              </div>
            </v-card-text>
  
            <v-card-actions>
              <v-btn color="primary" block>
                Añadir al carrito
                <v-icon end>mdi-cart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </template>
  
  <script setup lang="ts">
  interface Product {
    id: number
    name: string
    price: number
    image: string
    discount: number
    rating: number
  }
  
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Auriculares Premium',
      price: 129.99,
      image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=11',
      discount: 15,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Smartwatch Series 7',
      price: 249.99,
      image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=12',
      discount: 0,
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Zapatillas Deportivas',
      price: 89.99,
      image: 'https://img.heroui.chat/image/shoes?w=400&h=400&u=13',
      discount: 20,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Cámara Instantánea',
      price: 69.99,
      image: 'https://img.heroui.chat/image/fashion?w=400&h=400&u=14',
      discount: 0,
      rating: 4.5,
    },
  ]
  
  const discountedPrice = (product: Product): string => {
    if (product.discount > 0) {
      return (product.price * (1 - product.discount / 100)).toFixed(2)
    }
    return product.price.toFixed(2)
  }
  </script>
  
  <style scoped>
  .text-decoration-line-through {
    text-decoration: line-through;
  }
  .relative {
    position: relative;
  }
  .position-absolute {
    position: absolute;
  }
  .top-0 {
    top: 0;
  }
  .right-0 {
    right: 0;
  }
  </style>
  