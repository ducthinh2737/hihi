<template>
  <nav class="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-primary flex items-center gap-2">
        <span class="bg-primary text-orange p-1 rounded">XUXU</span> 
      </a>

      <ul class="hidden md:flex space-x-8 font-medium">
        <li v-for="item in menuItems" :key="item.id">
          <a :href="item.link" class="hover:text-primary transition duration-300">{{ item.name }}</a>
        </li>
      </ul>

      <button @click="isOpen = !isOpen" class="md:hidden text-dark focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <div v-if="isOpen" class="md:hidden bg-white border-t">
      <ul class="flex flex-col p-4 space-y-3">
        <li v-for="item in menuItems" :key="item.id">
          <a :href="item.link" @click="isOpen = false" class="block hover:text-primary">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const menuItems = [
  { id: 1, name: 'Trang chủ', link: '#home' },
  { id: 2, name: 'Giới thiệu', link: '#about' },
  { id: 3, name: 'Dịch vụ', link: '#services' },
  { id: 4, name: 'FAQ', link: '#faq' },
  { id: 5, name: 'Liên hệ', link: '#contact' },
];
</script>