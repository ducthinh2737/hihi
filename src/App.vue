<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <Home />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import Footer from './components/Footer.vue';
</script>