<template>
  <div class="container mx-auto px-4 py-8 mt-20">

   

    <!-- Breadcrumbs -->
    <nav class="flex text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/" class="hover:text-primary">Trang chủ</router-link>
        </li>
        <li v-if="categoryName">
          <div class="flex items-center">
            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <router-link :to="{ name: 'ProductList', params: { id: categoryId } }" class="hover:text-primary ml-1 md:ml-2">{{ categoryName }}</router-link>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="ml-1 md:ml-2 text-gray-700 font-medium truncate max-w-[200px]">{{ product.name }}</span>
          </div>
        </li>
      </ol>
    </nav>
    
    <!-- Back Button (Removed as breadcrumbs serve similar purpose, but kept optional if user wants it, sticking to plan to replace/enhance) -->
    <!-- Keeping Back button for mobile ease or explicit action if preferred, but breadcrumbs are better. Let's keep it below or remove? Plan didn't explicitly say remove, but breadcrumb is usually top. I will keep back button for now as it was there. -->

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

    <!-- Related Products -->
    <div class="mt-16" v-if="!loading">
      <h2 class="text-2xl font-bold text-slate-700 mb-6 uppercase">Sản phẩm liên quan</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(item, index) in relatedProducts" 
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group"
        >
          <div class="aspect-[3/4] overflow-hidden bg-gray-100 relative">
            <img 
              :src="item.image" 
              :alt="item.name"
              class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <div class="p-4">
            <h3 class="font-bold text-lg text-slate-700 mb-1 group-hover:text-cyan-700 transition">{{ item.name }}</h3>
            <p class="text-gray-500 text-sm mb-3">{{ item.price }}</p>
            <router-link 
              :to="{ name: 'ProductDetail', params: { id: item.id }, query: { category: categoryId } }" 
              class="block w-full py-2 bg-cyan-50 text-cyan-700 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition text-center"
              @click="scrollToTop"
            >
              Chi tiết
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = ref(true);
const product = ref({});
const relatedProducts = ref([]);
const categoryId = computed(() => route.query.category);

const categoryTitles = {
  'ao-thun-co-tron': 'Áo Thun Cổ Tròn',
  'ao-thun-co-tru': 'Áo Thun Cổ Trụ',
  'ao-so-mi': 'Áo Sơ Mi',
  'tap-de': 'Tạp Dề',
  'non-dong-phuc': 'Nón Đồng Phục',
  'tui-hot-xoai-ldpe': 'Túi Hột Xoài LDPE',
  'tui-quai-sua': 'Túi Quai Sữa',
  'tui-niem-phong': 'Túi Niêm Phong',
  'tui-giay': 'Túi Giấy',
  'bang-ron': 'Băng Rôn',
  'poster': 'Poster - Tem Nhãn',
  'pp-standee': 'PP Standee',
  'tranh-canvas': 'Tranh Vải Canvas',
  'backlit-film': 'Backlit Film',
  'gia-cong-in': 'Gia Công In Quảng Cáo',
  'dua-troc': 'Dừa Trọc Đầu',
  'dua-hau': 'Dưa Hấu',
  'go': 'Gỗ',
  'binh-giu-nhiet': 'Bình Giữ Nhiệt',
  'gia-cong-laser': 'Gia Công Khắc Laser'
};

const categoryName = computed(() => categoryTitles[categoryId.value] || 'Sản Phẩm');

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const fetchProductData = () => {
  loading.value = true;
  // Simulate API call to fetch product details
  setTimeout(() => {
    // Generate dummy product data based on ID
    product.value = {
      id: route.params.id,
      name: `${categoryName.value} - Mẫu ${route.params.id}`,
      price: 'Liên hệ',
      image: 'https://placehold.co/600x800?text=' + encodeURIComponent(`Mẫu ${route.params.id}`),
      description: 'Mô tả chi tiết về sản phẩm...'
    };

    // Generate dummy related products
    relatedProducts.value = Array.from({ length: 4 }, (_, i) => {
      const relatedId = parseInt(route.params.id) + i + 1; // Just fake IDs
      return {
        id: relatedId,
        name: `${categoryName.value} - Mẫu ${relatedId}`,
        price: 'Liên hệ',
        image: 'https://placehold.co/600x800?text=' + encodeURIComponent(`Mẫu ${relatedId}`),
      };
    });

    loading.value = false;
  }, 500);
};

onMounted(fetchProductData);

watch(() => route.params.id, fetchProductData);
</script>
