<template>
  <div class="container mx-auto px-4 py-8 mt-20">
    <h1 class="text-3xl font-bold text-slate-700 mb-2 uppercase text-center">Tin Tức & Sự Kiện</h1>
    <p class="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
      Cập nhật những kiến thức in ấn, xu hướng đồng phục và các hoạt động mới nhất từ XUXU.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="post in posts" 
        :key="post.id" 
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full"
      >
        <!-- Thumbnail -->
        <router-link :to="{ name: 'BlogDetail', params: { id: post.id } }" class="block aspect-video overflow-hidden bg-gray-100 relative group">
          <img 
            :src="post.image" 
            :alt="post.title" 
            class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {{ post.category }}
          </div>
        </router-link>

        <!-- Content -->
        <div class="p-6 flex flex-col flex-grow">
          <div class="mb-4 text-sm text-gray-500 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ post.date }}
          </div>

          <h3 class="text-xl font-bold text-slate-800 mb-3 hover:text-primary transition line-clamp-2">
            <router-link :to="{ name: 'BlogDetail', params: { id: post.id } }">
              {{ post.title }}
            </router-link>
          </h3>

          <p class="text-gray-600 mb-6 line-clamp-3 overflow-hidden text-ellipsis flex-grow">
            {{ post.excerpt }}
          </p>

          <router-link 
            :to="{ name: 'BlogDetail', params: { id: post.id } }"
            class="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition mt-auto"
          >
            Đọc tiếp
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Pagination (Mock) -->
    <!-- Pagination (Mock) -->
    <div class="flex justify-center mt-12 gap-2">
      <!-- Previous -->
      <button 
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="w-10 h-10 rounded-lg hover:bg-gray-100 text-gray-600 font-bold flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </button>

      <!-- Page Numbers -->
      <button 
        v-for="page in totalPages" 
        :key="page"
        @click="changePage(page)"
        :class="[
          'w-10 h-10 rounded-lg font-bold flex items-center justify-center transition',
          currentPage === page 
            ? 'bg-primary text-white' 
            : 'hover:bg-gray-100 text-gray-600'
        ]"
      >
        {{ page }}
      </button>

      <!-- Next -->
      <button 
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="w-10 h-10 rounded-lg hover:bg-gray-100 text-gray-600 font-bold flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const currentPage = ref(1);
const totalPages = 4; // Mock total pages

const allPosts = [
  {
    id: 1,
    title: 'Bí quyết chọn vải thun may áo đồng phục mát mẻ cho mùa hè',
    excerpt: 'Mùa hè nóng bức, việc chọn chất liệu vải phù hợp cho áo đồng phục là vô cùng quan trọng. Cùng XUXU tìm hiểu các loại vải thun cotton, cá sấu lạnh...',
    date: '20/05/2025',
    category: 'Kiến thức',
    image: 'https://placehold.co/600x400?text=Vải+Thun+Mát'
  },
  {
    id: 2,
    title: 'Quy trình in lụa trên áo thun diễn ra như thế nào?',
    excerpt: 'In lụa là kỹ thuật in phổ biến nhất hiện nay. Khám phá quy trình từ chụp bản, pha mực đến khi thành phẩm chiếc áo thun in hình sắc nét.',
    date: '18/05/2025',
    category: 'Công nghệ',
    image: 'https://placehold.co/600x400?text=In+Lụa'
  },
  {
    id: 3,
    title: 'Top 5 màu áo lớp hot trend nhất năm học 2025-2026',
    excerpt: 'Năm học mới sắp đến, các bạn học sinh đang tìm kiếm màu áo lớp độc lạ? Đừng bỏ qua bảng màu pastel và các tông màu neon nổi bật này nhé.',
    date: '15/05/2025',
    category: 'Xu hướng',
    image: 'https://placehold.co/600x400?text=Áo+Lớp+Hot'
  },
  {
    id: 4,
    title: 'Túi vải không dệt - Giải pháp xanh cho thương hiệu',
    excerpt: 'Thay thế túi nilon bằng túi vải không dệt không chỉ bảo vệ môi trường mà còn nâng tầm hình ảnh thương hiệu của bạn trong mắt khách hàng.',
    date: '10/05/2025',
    category: 'Sản phẩm',
    image: 'https://placehold.co/600x400?text=Túi+Vải'
  },
  {
    id: 5,
    title: 'Tại sao nên làm nón đồng phục cho nhân viên?',
    excerpt: 'Ngoài áo đồng phục, nón cũng là một phụ kiện nhận diện thương hiệu hiệu quả, đặc biệt cho các ngành dịch vụ, vận chuyển, du lịch.',
    date: '05/05/2025',
    category: 'Tư vấn',
    image: 'https://placehold.co/600x400?text=Nón+Đồng+Phục'
  },
  {
    id: 6,
    title: 'Khuyến mãi đặc biệt: Đặt áo nhóm tặng túi rút',
    excerpt: 'Chương trình ưu đãi cực lớn chào hè: Khi đặt từ 20 áo nhóm/áo lớp trở lên, tặng ngay mỗi bạn một chiếc túi rút cá tính trị giá 50k.',
    date: '01/05/2025',
    category: 'Sự kiện',
    image: 'https://placehold.co/600x400?text=Khuyến+Mãi'
  }
];

// Mock data generation for other pages
const generateMockPosts = (page) => {
  return Array.from({ length: 6 }, (_, i) => ({
    id: (page - 1) * 6 + i + 1,
    title: `Bài viết trang ${page} - Số ${i + 1}`,
    excerpt: `Đây là nội dung tóm tắt của bài viết số ${i + 1} trên trang ${page}. Nội dung này được tạo tự động để demo tính năng phân trang.`,
    date: `01/${13 - page}/2025`,
    category: ['Kiến thức', 'Công nghệ', 'Xu hướng'][i % 3],
    image: `https://placehold.co/600x400?text=Trang+${page}+Bài+${i+1}`
  }));
};

const posts = computed(() => {
  if (currentPage.value === 1) {
    return allPosts;
  }
  return generateMockPosts(currentPage.value);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>
