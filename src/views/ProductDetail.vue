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
    
    <div v-if="loading" class="text-center py-20">
      <div class="animate-spin w-10 h-10 border-4 border-cyan-600 border-t-transparent rounded-full mx-auto"></div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 bg-white rounded-xl p-6 shadow-sm items-start">
      <!-- Product Images -->
      <div class="flex flex-col gap-4">
        <!-- Main Image -->
        <div 
          class="aspect-square bg-white rounded-lg overflow-hidden border border-gray-100 flex items-center justify-center relative group cursor-zoom-in"
          @click="toggleZoom"
        >
          <img 
            :src="activeImage" 
            :alt="product.name"
            class="w-full h-full object-contain transition-transform duration-300"
            :class="{ 'scale-150': isZoomed }"
          />
          
          <!-- Prev Button -->
          <button 
            v-if="product.images && product.images.length > 1"
            @click.stop="changeImage(-1)"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 transform hover:scale-110 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Next Button -->
          <button 
            v-if="product.images && product.images.length > 1"
            @click.stop="changeImage(1)"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 transform hover:scale-110 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <!-- Thumbnails -->
        <div class="flex overflow-x-auto gap-2 pb-2 md:grid md:grid-cols-5 md:overflow-visible scrollbar-hide" v-if="product.images && product.images.length">
          <button 
            v-for="(img, index) in product.images" 
            :key="index"
            @click="activeImage = img"
            class="min-w-[70px] aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 p-1 flex-shrink-0"
            :class="activeImage === img ? 'border-primary' : 'border-transparent hover:border-gray-200'"
          >
            <img :src="img" class="w-full h-full object-cover rounded-sm" alt="Thumbnail" />
          </button>
        </div>
      </div>

      <!-- Product Info -->
      <div>
        <h1 class="text-3xl font-bold text-slate-800 mb-2">{{ product.name }}</h1>
        <p class="text-2xl text-primary font-semibold mb-4">{{ product.price }}</p>
        
        <div class="border-t border-b border-gray-200 py-4 my-4">
          <p class="text-gray-600 leading-relaxed mb-4">
            {{ product.description || 'Mô tả sản phẩm chi tiết sẽ được cập nhật ở đây. Sản phẩm chất lượng cao, thiết kế đẹp mắt, phù hợp với nhu cầu của bạn.' }}
          </p>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li>Chất liệu cao cấp</li>
            <li>Độ bền cao</li>
            <li>Thiết kế hiện đại</li>
            <li>Bảo hành chính hãng</li>
          </ul>
        </div>

        <div class="flex gap-4 mt-6">
          <a href="/#contact" class="flex-1 bg-primary text-black text-center py-3 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-lg shadow-primary/30">
            Liên hệ đặt hàng
          </a>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="mt-16" v-if="!loading">
      <h2 class="text-2xl font-bold text-slate-700 mb-6 uppercase">Sản phẩm liên quan</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <ProductCard 
          v-for="(item, index) in relatedProducts" 
          :key="index"
          :product="item"
          :category-id="categoryId"
          @click-detail="scrollToTop"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { CATEGORY_TITLES } from '../constants/categories'; // Import shared constants
import ProductCard from '../components/ProductCard.vue';

const route = useRoute();
const loading = ref(true);
const product = ref({});
const activeImage = ref('');
const relatedProducts = ref([]);
const isZoomed = ref(false);

const categoryId = computed(() => route.query.category);
const categoryName = computed(() => CATEGORY_TITLES[categoryId.value] || 'Sản Phẩm');

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value;
};

const changeImage = (direction) => {
  if (!product.value.images || product.value.images.length === 0) return;
  
  const currentIndex = product.value.images.indexOf(activeImage.value);
  let newIndex = currentIndex + direction;
  
  if (newIndex < 0) {
    newIndex = product.value.images.length - 1;
  } else if (newIndex >= product.value.images.length) {
    newIndex = 0;
  }
  
  activeImage.value = product.value.images[newIndex];
};

const fetchProductData = () => {
  loading.value = true;
  isZoomed.value = false; // Reset zoom
  
  // Simulate API call to fetch product details
  setTimeout(() => {
    // Generate dummy product data based on ID
    const mainImg = 'https://placehold.co/600x800?text=' + encodeURIComponent(`Mẫu ${route.params.id}`);
    
    product.value = {
      id: route.params.id,
      name: `${categoryName.value} - Mẫu ${route.params.id}`,
      price: 'Liên hệ',
      image: mainImg,
      images: [
        mainImg,
        'https://placehold.co/600x800?text=Ảnh+1',
        'https://placehold.co/600x800?text=Ảnh+2',
        'https://placehold.co/600x800?text=Ảnh+3',
        'https://placehold.co/600x800?text=Ảnh+4'
      ],
      description: 'Mô tả chi tiết về sản phẩm...'
    };
    
    // Update document title for SEO
    document.title = `${product.value.name} | Tên Shop`;

    activeImage.value = mainImg;

    // Generate dummy related products
    relatedProducts.value = Array.from({ length: 6 }, (_, i) => {
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
