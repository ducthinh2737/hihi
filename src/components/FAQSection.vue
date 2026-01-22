<template>
  <section id="faq" class="py-24 bg-gray-50">
    <div class="container mx-auto px-1 max-w-8xl">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-slate-800 mb-2">Câu Hỏi Thường Gặp</h2>
        <div class="w-16 h-1 bg-cyan-600 mx-auto"></div>
      </div>
      
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqs" 
          :key="index" 
          class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <button 
            @click="toggle(index)" 
            class="w-full flex justify-between items-center p-5 text-left focus:outline-none"
          >
            <span class="font-bold text-slate-700 group-hover:text-cyan-600 transition">{{ item.question }}</span>
            <span 
              class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 group-hover:bg-cyan-100 group-hover:text-cyan-600 transition duration-300"
              :class="{ 'rotate-180 bg-cyan-100 text-cyan-600': activeIndex === index }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <transition 
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0 -translate-y-2"
            enter-to-class="transform scale-100 opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform scale-100 opacity-100 translate-y-0"
            leave-to-class="transform scale-95 opacity-0 -translate-y-2"
          >
            <div v-show="activeIndex === index" class="px-5 pb-5 text-gray-600 leading-relaxed">
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  { question: 'Tôi có thể in số lượng ít (1 cái) không?', answer: 'Có. Chúng tôi nhận in lẻ từ 1 cái với công nghệ in kỹ thuật số và in decal.' },
  { question: 'Thời gian in ấn mất bao lâu?', answer: 'Với đơn hàng số lượng ít, bạn có thể lấy ngay trong ngày. Đơn hàng số lượng lớn từ 3-5 ngày làm việc.' },
  { question: 'Shop có hỗ trợ thiết kế không?', answer: 'Chúng tôi hỗ trợ chỉnh sửa cơ bản miễn phí. Nếu cần thiết kế logo mới, phí sẽ được tính riêng.' },
  { question: 'Chất liệu áo thun là gì?', answer: 'Chúng tôi cung cấp Cotton 100% 2 chiều, 4 chiều, vải Cá sấu, vải mè thể thao...' },
  { question: 'Tôi ở tỉnh xa có đặt hàng được không?', answer: 'Được. Chúng tôi nhận ship COD toàn quốc qua các đơn vị vận chuyển uy tín.' },
  { question: 'Chế độ bảo hành hình in như thế nào?', answer: 'Bảo hành hình in 6 tháng không bong tróc, nứt gãy với điều kiện giặt đúng quy cách.' },
];
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>