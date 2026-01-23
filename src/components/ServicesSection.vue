<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-slate-700 mb-2">Sản phẩm</h2>
        <div class="w-16 h-1 bg-cyan-600 mx-auto mb-4"></div>
        <p class="text-gray-500 uppercase tracking-wide font-medium">MAY - IN - THÊU ÁO THUN, NÓN, TẠP DỀ ĐỒNG PHỤC</p>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <!-- Left Column: Product List -->
        <div class="w-full lg:w-1/2 space-y-8">
          <div 
            v-for="(product, index) in products" 
            :key="index" 
            data-aos="fade-right"
            :data-aos-delay="index * 100"
          >
            <div
              class="flex gap-4 group cursor-pointer transition-all duration-300 p-4 rounded-xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100"
              @click="activeIndex = index"
              :class="{ 'bg-white shadow-md border-gray-100 scale-[1.02]': activeIndex === index }"
            >
               <div class="flex-shrink-0 mt-1">
                  <div 
                    class="w-8 h-8 rounded-full flex items-center justify-center transition"
                    :class="activeIndex === index ? 'bg-cyan-600 text-white shadow-md' : 'bg-sky-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white'"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
               </div>
               <div>
                 <h3 
                  class="text-lg font-bold uppercase underline decoration-1 underline-offset-4 mb-2 transition"
                  :class="activeIndex === index ? 'text-cyan-700 decoration-cyan-500' : 'text-slate-700 decoration-gray-300 group-hover:text-cyan-600'"
                 >
                   {{ product.title }}
                 </h3>
                 <p class="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{{ product.desc }}</p>
               </div>
            </div>
          </div>

          <div class="pt-4">
            <router-link :to="'/san-pham/' + products[activeIndex].id" class="inline-flex items-center px-6 py-3 bg-cyan-700 text-white font-semibold rounded shadow hover:bg-cyan-800 transition">
              Xem thêm <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </router-link>
          </div>
        </div>

        <!-- Right Column: Image -->
        <div class="w-full lg:w-1/2" data-aos="fade-left" data-aos-duration="1000">
          <div class="relative bg-gray-100 rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[800px] shadow-2xl transition-all duration-500 group">
             <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
            <transition name="fade" mode="out-in">
              <img 
                :key="products[activeIndex].image"
                :src="products[activeIndex].image" 
                :alt="products[activeIndex].title" 
                class="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-110"
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0);

const products = [
  {
    id: 'ao-thun-co-tron',
    title: 'ÁO THUN CỔ TRÒN',
    desc: 'Cotton 100% hoặc Cotton 65%.\nThấm hút mồ hôi tốt.\nCó nhiều màu sắc để lựa chọn.',
    image: 'https://shop.aothunxuxu.com/assets/img/ao-thun-co-tron-min.jpg'
  },
  {
    id: 'ao-thun-co-tru',
    title: 'ÁO THUN CỔ TRỤ (CỔ BẺ)',
    desc: 'Hạt cá sấu mịn, đẹp. Không chảy vải giặt, không bám bẩn trong môi trường nhiều bụi, không ra màu, bền.\nCó nhiều màu sắc để lựa chọn.',
    image: 'https://shop.aothunxuxu.com/assets/img/ao-thun-co-tru-min.jpg'
  },
  {
    id: 'ao-so-mi',
    title: 'ÁO SƠ MI',
    desc: 'May theo yêu cầu.\nCó nhiều màu sắc để lựa chọn.',
    image: 'https://shop.aothunxuxu.com/assets/img/ao-so-mi-min.jpg'
  },
  {
    id: 'tap-de',
    title: 'TẠP DỀ',
    desc: 'Tạp dề ngắn (ngang eo) - dài (choàng cổ).\nCó nhiều màu sắc để lựa chọn.',
    image: 'https://shop.aothunxuxu.com/assets/img/tap-de-min.jpg'
  },
  {
    id: 'non-dong-phuc',
    title: 'NÓN ĐỒNG PHỤC',
    desc: 'Nón lưỡi trai - Nón kết - Nón tai bèo.\nCó nhiều màu sắc để lựa chọn.',
    image: 'https://shop.aothunxuxu.com/assets/img/non-dong-phuc-min.jpg'
  }
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>