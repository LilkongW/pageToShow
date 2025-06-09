<template>
<div class="min-h-screen bg-background">
    <!-- Contenido principal -->
    <main>
    <Hero />
    <FeaturedProducts />
    <CategorySection />
    <TestimonialSection />
    <NewsletterSection />
    </main>

    <!-- Footer -->
    <Footer />
</div>
</template>
  
<script setup lang="ts">
import Hero from '../components/Home/Hero.vue'
import FeaturedProducts from '../components/Home/FeaturedProducts.vue'
import CategorySection from '../components/Home/CategorySection.vue'
import TestimonialSection from '../components/Home/TestimonialSection.vue'
import NewsletterSection from '../components/Home/NewsletterSection.vue'
</script>
