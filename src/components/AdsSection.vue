<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <p class="text-gray-500 uppercase tracking-wide font-medium">IN QUẢNG CÁO & GIA CÔNG IN QUẢNG CÁO</p>
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
            <a href="#contact" class="inline-flex items-center px-6 py-3 bg-cyan-700 text-white font-semibold rounded shadow hover:bg-cyan-800 transition">
              Xem thêm <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>

        <!-- Right Column: Image -->
        <div class="w-full lg:w-1/2" data-aos="fade-left" data-aos-duration="1000">
          <div cclass="relative bg-gray-100 rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[800px] shadow-2xl transition-all duration-500 group">
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
    title: 'BĂNG RÔN',
    desc: 'In băng rôn với chất liệu bạt Hiflex.',
    image: 'https://shop.aothunxuxu.com/assets/img/bang-ron-min.jpg'
  },
  {
    title: 'POSTER - TEM DÁN NHÃN SẢN PHẨM',
    desc: 'In poster, tem nhãn bằng chất liệu decal trắng sữa, decal trong suốt.',
    image: 'https://shop.aothunxuxu.com/assets/img/tem-nhan-min.jpg'
  },
  {
    title: 'PP STANDEE',
    desc: 'Dùng quảng cáo sản phẩm, dịch vụ, khuyến mãi,...trong các\n sự kiện lớn nhỏ. Ưu điểm: có thể lưu trữ, dễ dàng vận chuyển, \nhình ảnh được in sắc nét.',
    image: 'https://shop.aothunxuxu.com/assets/img/pp-standee-min.jpg'
  },
  {
    title: 'TRANH VÃI CANVAS',
    desc: 'Được làm từ chất liệu vải canvas, có khả năng kháng nước và\n chất lượng hình ảnh được in tốt. Tranh canvas mang tính thẩm mỹ\n và có nghệ thuật cao dùng trang trí phòng khách, phòng ngủ hoặc\n làm ảnh cưới.',
    image: 'https://shop.aothunxuxu.com/assets/img/tranh-canvas-min.jpg'
  },
  {
    title: 'BACKFLIT FILM',
    desc: 'Ứng dụng làm hộp đèn, Menu LED. Ưu điểm: không cần phải dán, \nthay thế nội dung dễ dàng mà không làm hỏng tấm nền LED.',
    image: 'https://shop.aothunxuxu.com/assets/img/backlit-film-hop-den-menu-led-min.jpg'
  },
    {
    title: 'GIA CÔNG IN QUẢNG CÁO',
    desc: 'Bạn là đơn vị thi công quảng cáo, cần đơn vị gia công vật liệu\n quảng cáo, hãy liên hệ ngay với chúng tôi.',
    image: 'https://shop.aothunxuxu.com/assets/img/gia-cong-in-quang-cao-min.jpg'
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