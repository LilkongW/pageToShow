<template>
<section class="py-16 px-4 mx-auto max-w-7xl">
    <div class="text-center mb-12">
    <h2 class="text-3xl font-bold text-foreground">Lo que dicen nuestros clientes</h2>
    <p class="text-foreground-500 mt-2">Opiniones de clientes satisfechos</p>
    </div>

    <v-row dense>
    <v-col
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        cols="12"
        md="4"
    >
        <v-card class="border">
        <v-card-text class="pa-6">
            <div class="d-flex justify-space-between mb-4">
            <div class="d-flex align-center">
                <v-avatar size="56" class="me-3">
                <v-img :src="testimonial.avatar" />
                </v-avatar>
                <div>
                <h4 class="font-weight-semibold text-foreground">
                    {{ testimonial.name }}
                </h4>
                <p class="text-foreground-500 text-sm">{{ testimonial.role }}</p>
                </div>
            </div>
            <div class="d-flex">
                <v-icon
                v-for="i in testimonial.rating"
                :key="i"
                color="warning"
                size="20"
                >
                mdi-star
                </v-icon>
            </div>
            </div>
            <div class="mt-2">
            <v-icon color="primary" class="mb-2" size="32" style="opacity: 0.5">
                mdi-format-quote-open
            </v-icon>
            <p class="text-foreground-600">{{ testimonial.content }}</p>
            </div>
        </v-card-text>
        </v-card>
    </v-col>
    </v-row>
</section>
</template>

<script setup>
const testimonials = [
{
    id: 1,
    name: "María González",
    role: "Cliente frecuente",
    avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=31",
    content:
    "Los productos son de excelente calidad. El envío fue rápido y el servicio al cliente excepcional. Definitivamente volveré a comprar aquí.",
    rating: 5,
},
{
    id: 2,
    name: "Carlos Rodríguez",
    role: "Cliente nuevo",
    avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=32",
    content:
    "Quedé impresionado con la calidad de los productos y la rapidez del envío. La experiencia de compra fue muy sencilla.",
    rating: 4,
},
{
    id: 3,
    name: "Ana Martínez",
    role: "Cliente VIP",
    avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=33",
    content:
    "Llevo años comprando en esta tienda y nunca me han decepcionado. Los productos son duraderos y el servicio es impecable.",
    rating: 5,
},
];
</script>

<style scoped>
.text-foreground {
color: #1f2937;
}
.text-foreground-500 {
color: #6b7280;
}
.text-foreground-600 {
color: #4b5563;
}
.border {
border: 1px solid #e5e7eb;
}
</style>
