<template>
  <div class="container mx-auto px-4 py-8 mt-20">
    <!-- Back Button -->
    <button 
      @click="$router.back()" 
      class="mb-6 flex items-center text-gray-600 hover:text-primary transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Quay lại
    </button>

    <div v-if="loading" class="text-center py-20">
      <div class="animate-spin w-10 h-10 border-4 border-cyan-600 border-t-transparent rounded-full mx-auto"></div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl p-6 shadow-sm">
      <!-- Product Image -->
      <div class="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
        <img 
          :src="product.image" 
          :alt="product.name"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Product Info -->
      <div>
        <h1 class="text-3xl font-bold text-slate-800 mb-2">{{ product.name }}</h1>
        <p class="text-2xl text-primary font-semibold mb-4">{{ product.price }}</p>
        
        <div class="border-t border-b border-gray-200 py-4 my-4">
          <p class="text-gray-600 leading-relaxed mb-4">
            Mô tả sản phẩm chi tiết sẽ được cập nhật ở đây. Sản phẩm chất lượng cao, thiết kế đẹp mắt, phù hợp với nhu cầu của bạn.
          </p>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li>Chất liệu cao cấp</li>
            <li>Độ bền cao</li>
            <li>Thiết kế hiện đại</li>
            <li>Bảo hành chính hãng</li>
          </ul>
        </div>

        <div class="flex gap-4 mt-6">
          <a href="#contact" class="flex-1 bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-lg shadow-primary/30">
            Liên hệ đặt hàng
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = ref(true);
const product = ref({});

onMounted(() => {
  // Simulate API call to fetch product details
  setTimeout(() => {
    // Generate dummy product data based on ID
    // In a real app, you would fetch by route.params.id
    product.value = {
      id: route.params.id,
      name: `Sản Phẩm Chi Tiết ${route.params.id || ''}`,
      price: 'Liên hệ',
      image: 'https://placehold.co/600x800?text=Product+Detail',
      description: 'Mô tả chi tiết về sản phẩm...'
    };
    loading.value = false;
  }, 500);
});
</script>
