<template>
  <div class="container mx-auto px-4 py-8 mt-20">
    <h1 class="text-3xl font-bold text-slate-700 mb-8 uppercase text-center">
      {{ categoryTitle }}
    </h1>
    
    <div v-if="loading" class="text-center py-20">
      <div class="animate-spin w-10 h-10 border-4 border-cyan-600 border-t-transparent rounded-full mx-auto"></div>
    </div>

    <div v-else-if="products.length === 0" class="text-center py-20 text-gray-500">
      Đang cập nhật sản phẩm...
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard 
        v-for="(item, index) in products" 
        :key="index"
        :product="item"
        :category-id="categoryId"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { CATEGORY_TITLES } from '../constants/categories'; // Import shared constants
import ProductCard from '../components/ProductCard.vue';

const route = useRoute();
const categoryId = computed(() => route.params.id);
const loading = ref(false);

const categoryTitle = computed(() => CATEGORY_TITLES[categoryId.value] || 'Sản Phẩm');

// Mock data - In a real app, this would come from an API based on categoryId
const products = ref([]);

const fetchProducts = () => {
  loading.value = true;
  // Simulate API call
  setTimeout(() => {
    // Generate dummy products based on category
    products.value = Array.from({ length: 8 }, (_, i) => ({
      id: i + 1, // Add mock ID
      name: `${categoryTitle.value} Mẫu ${i + 1}`,
      price: 'Liên hệ',
      image: 'https://placehold.co/600x800?text=' + encodeURIComponent(categoryTitle.value),
    }));
    loading.value = false;
  }, 500);
};

onMounted(fetchProducts);
watch(categoryId, fetchProducts);
</script>
