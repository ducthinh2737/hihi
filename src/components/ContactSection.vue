<template>
  <section id="contact" class="py-24 bg-gray-900 text-white relative overflow-hidden">
    <!-- Background Decor (Optional) -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-start">
        <!-- Contact Info -->
        <div class="w-full lg:w-1/2 pt-8">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Liên hệ với <span class="text-primary">chúng tôi</span>
          </h2>
          <p class="text-gray-400 text-lg mb-10 max-w-lg">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp in ấn tốt nhất cho doanh nghiệp của bạn.
          </p>
          
          <div class="space-y-8">
            <!-- Address -->
            <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition duration-300">
              <div class="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Địa chỉ</h3>
                <p class="text-gray-400">38/16 đường Đặng Đức Thuật, KP.6, P. Tam Hiệp

TP. Biên Hoà, tỉnh Đồng Nai</p>
              </div>
            </div>

            <!-- Hotline -->
            <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition duration-300">
              <div class="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Hotline</h3>
                <p class="text-gray-400 font-mono text-xl">076-771-0030</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition duration-300">
              <div class="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Email</h3>
                <p class="text-gray-400">contact@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="w-full lg:w-1/2">
          <div class="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 text-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900">Gửi yêu cầu báo giá</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-semibold mb-2 text-gray-600">Họ và tên</label>
                <input 
                  id="name"
                  v-model="form.name" 
                  type="text" 
                  class="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition" 
                  placeholder="Nhập họ tên của bạn" 
                  required
                >
              </div>
              <div>
                <label for="phone" class="block text-sm font-semibold mb-2 text-gray-600">Số điện thoại</label>
                <input 
                  id="phone"
                  v-model="form.phone" 
                  type="tel" 
                  class="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition" 
                  placeholder="Nhập số điện thoại" 
                  required
                >
              </div>
              <div>
                <label for="message" class="block text-sm font-semibold mb-2 text-gray-600">Nội dung cần in</label>
                <textarea 
                  id="message"
                  v-model="form.message" 
                  class="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary h-32 resize-none transition" 
                  placeholder="Ví dụ: Tôi muốn in 50 áo đồng phục, chất liệu cotton..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                class="w-full bg-rose-600 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-rose-700 hover:-translate-y-1 transition duration-300"
              >
                GỬI YÊU CẦU
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  phone: '',
  message: ''
});

const submitForm = () => {
  // Demo action
  alert(`Cảm ơn ${form.name}! Chúng tôi đã nhận được thông tin: "${form.message}". Sẽ liên hệ số ${form.phone} sớm nhất.`);
  
  // Reset form
  form.name = '';
  form.phone = '';
  form.message = '';
};
</script>