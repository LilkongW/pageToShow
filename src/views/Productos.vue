<template>
  <section class="py-16 px-4 max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold text-primary mb-8">¡Compra Fácil y Rápido Nuestros Productos!</h1>
    
    <v-row dense>
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="rounded-lg" style="height: 100%;">
          <v-badge
            v-if="product.discount != null && product.discount > 0"
            color="error"
            :content="`-${product.discount}%`"
            class="ma-2"
            overlap
            location="top right"
          >
            <v-img
              :src="product.image"
              :alt="product.title"
              height="240"
              cover
              class="rounded-t-lg"
            />
          </v-badge>
          <v-img
            v-else
            :src="product.image"
            :alt="product.title"
            height="240"
            cover
            class="rounded-t-lg"
          />

          <v-card-text class="d-flex flex-column justify-between" style="height: 180px;">
            <div>
              <h3 class="text-subtitle-1 font-weight-semibold">{{ product.title }}</h3>
              <p class="text-body-2 mb-2 description-text">{{ product.description }}</p>
            </div>
            <div class="d-flex align-center gap-2 mt-auto">
              <span
                class="text-lg font-weight-bold"
                :class="(product.discount != null && product.discount > 0) ? 'text-error' : 'text-primary'"
              >
                ${{ discountedPrice(product) }}
              </span>
              <span
                v-if="product.discount != null && product.discount > 0"
                class="text-body-2 text-medium-emphasis text-decoration-line-through"
              >
                ${{ product.price.toFixed(2) }}
              </span>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" block @click="addToCart(product.productId)">
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
import { products } from '../data/products'

const discountedPrice = (product: typeof products[number]) => {
  if (product.discount != null && product.discount > 0) {
    return (product.price * (1 - product.discount / 100)).toFixed(2)
  }
  return product.price.toFixed(2)
}

const addToCart = (id: string) => {
  alert(`Añadido producto con ID ${id} al carrito`)
}
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}

/* Limitar altura de la descripción y agregar puntos suspensivos si es muy larga */
.description-text {
  max-height: 3.6em; /* aprox 2 líneas */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* cortar en 2 líneas */
  line-clamp: 2; /* cortar en 2 líneas */
  -webkit-box-orient: vertical;
}
</style>
