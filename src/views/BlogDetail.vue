<template>
  <div class="container mx-auto px-4 py-8 mt-20">
    <!-- Breadcrumb -->
    <nav class="flex text-sm text-gray-500 mb-6">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/" class="hover:text-primary">Trang chủ</router-link>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <router-link :to="{ name: 'BlogList' }" class="hover:text-primary ml-1 md:ml-2">Tin tức</router-link>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="ml-1 md:ml-2 text-gray-700 font-medium truncate max-w-[200px]">{{ post.title }}</span>
          </div>
        </li>
      </ol>
    </nav>

    <div v-if="loading" class="text-center py-20">
      <div class="animate-spin w-10 h-10 border-4 border-cyan-600 border-t-transparent rounded-full mx-auto"></div>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Main Content -->
      <article class="lg:col-span-2">
        <header class="mb-8">
          <div class="text-primary font-bold uppercase tracking-wider mb-2">{{ post.category }}</div>
          <h1 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">{{ post.title }}</h1>
          <div class="text-gray-500 flex items-center gap-4 text-sm">
            <span>{{ post.date }}</span>
            <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>Bởi Admin</span>
          </div>
        </header>

        <img 
          :src="post.image" 
          :alt="post.title" 
          class="w-full aspect-video object-cover rounded-xl shadow-lg mb-8"
        />

        <div class="prose prose-lg max-w-none text-gray-700">
          <p class="lead text-xl font-medium text-slate-600 mb-6">
            {{ post.excerpt }}
          </p>
          
          <p class="mb-4">
            Nội dung chi tiết của bài viết sẽ được hiển thị ở đây. Đối với mục đích demo, chúng tôi sử dụng văn bản giả lập. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2 class="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Lợi ích quan trọng</h2>
          <p class="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <blockquote class="border-l-4 border-primary pl-4 italic my-6 bg-gray-50 p-4 rounded-r-lg">
            "Chất lượng sản phẩm luôn là ưu tiên hàng đầu tại XUXU. Chúng tôi cam kết mang đến những chiếc áo đồng phục bền đẹp nhất."
          </blockquote>

          <h2 class="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Giải pháp tối ưu</h2>
          <p class="mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <img src="https://placehold.co/800x400?text=Minh+Họa+Chi+Tiết" alt="Minh họa" class="w-full rounded-lg my-6" />

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
            qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        
        <!-- Share -->
        <div class="border-t border-gray-200 mt-12 pt-8">
          <span class="font-bold text-gray-700 mr-4">Chia sẻ bài viết:</span>
          <div class="inline-flex gap-2">
             <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700">Facebook</button>
             <button class="bg-sky-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-sky-600">Zalo</button>
          </div>
        </div>
      </article>

      <!-- Sidebar -->
      <aside class="lg:col-span-1 space-y-8">
        <!-- Related Posts -->
        <div class="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 class="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100">Bài viết mới</h3>
          <ul class="space-y-4">
            <li v-for="related in relatedPosts" :key="related.id" class="group">
              <router-link :to="{ name: 'BlogDetail', params: { id: related.id } }" class="flex gap-4">
                <div class="w-20 h-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img :src="related.image" class="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-700 group-hover:text-primary transition line-clamp-2 text-sm mb-1 leading-snug">
                    {{ related.title }}
                  </h4>
                  <span class="text-xs text-gray-400">{{ related.date }}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        
        <!-- Categories -->
        <div class="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 class="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100">Danh mục</h3>
          <ul class="space-y-2">
             <li v-for="cat in ['Kiến thức', 'Công nghệ', 'Xu hướng', 'Sản phẩm', 'Tư vấn']" :key="cat">
               <a href="#" class="block py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-primary transition flex justify-between items-center">
                 <span>{{ cat }}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
               </a>
             </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = ref(true);
const post = ref({});
const relatedPosts = ref([]);

const fetchData = () => {
  loading.value = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  setTimeout(() => {
    // Mock Data based on ID
    post.value = {
      id: route.params.id,
      title: `Bài viết mẫu số ${route.params.id}: Bí quyết in ấn chuyên nghiệp`,
      excerpt: 'Tóm tắt nội dung bài viết. Đây là phần intro hấp dẫn để thu hút người đọc xem tiếp...',
      date: '20/05/2025',
      category: 'Kiến thức',
      image: 'https://placehold.co/800x450?text=Ảnh+Bài+Viết+'+route.params.id
    };

    relatedPosts.value = [
      { id: 101, title: 'Xu hướng đồng phục mới nhất 2025', date: '19/05/2025', image: 'https://placehold.co/200x200?text=Blog+1' },
      { id: 102, title: 'Cách bảo quản hình in bền đẹp', date: '15/05/2025', image: 'https://placehold.co/200x200?text=Blog+2' },
      { id: 103, title: 'Quy trình đặt hàng tại XUXU', date: '10/05/2025', image: 'https://placehold.co/200x200?text=Blog+3' },
    ];

    loading.value = false;
  }, 500);
};

onMounted(fetchData);
watch(() => route.params.id, fetchData);
</script>
