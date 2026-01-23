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
      <div 
        v-for="(item, index) in products" 
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
          <router-link :to="{ name: 'ProductDetail', params: { id: index + 1 } }" class="block w-full py-2 bg-cyan-50 text-cyan-700 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition text-center">
            Chi tiết
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryId = computed(() => route.params.id);
const loading = ref(false);

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

const categoryTitle = computed(() => categoryTitles[categoryId.value] || 'Sản Phẩm');

// Mock data - In a real app, this would come from an API based on categoryId
const products = ref([]);

const fetchProducts = () => {
  loading.value = true;
  // Simulate API call
  setTimeout(() => {
    // Generate dummy products based on category
    products.value = Array.from({ length: 8 }, (_, i) => ({
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
