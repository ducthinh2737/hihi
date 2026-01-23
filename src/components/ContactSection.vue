<template>
  <section id="contact" class="py-24 bg-gray-900 text-white relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-start">

        <!-- CONTACT INFO -->
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Địa chỉ</h3>
                <p class="text-gray-400">
                  38/16 đường Đặng Đức Thuật, KP.6, P. Tam Hiệp<br />
                  TP. Biên Hoà, tỉnh Đồng Nai
                </p>
              </div>
            </div>

            <!-- Hotline -->
            <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition duration-300">
              <div class="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Email</h3>
                <p class="text-gray-400">contact@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- FORM + MAP -->
        <div class="w-full lg:w-1/2 space-y-12">

          <!-- FORM -->
          <div class="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 text-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900">Gửi yêu cầu báo giá</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-600">Họ và tên</label>
                <input v-model="form.name" type="text"
                  class="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Nhập họ tên" required />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-600">Số điện thoại</label>
                <input v-model="form.phone" type="tel"
                  class="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Nhập số điện thoại" required />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-600">Nội dung cần in</label>
                <textarea v-model="form.message"
                  class="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary h-32 resize-none"
                  placeholder="Ví dụ: In 50 áo đồng phục cotton..."></textarea>
              </div>
              <button type="submit"
                class="w-full bg-rose-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-rose-700 transition">
                GỬI YÊU CẦU
              </button>
            </form>
          </div>


        </div>
      </div>

    <!-- MAP + SOCIAL - Full Width -->
    <div class="mt-16 w-full">
      <h3 class="font-bold text-2xl mb-8 flex items-center justify-center gap-2">
        <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"></path>
        </svg>
        Tìm chúng tôi trên bản đồ
      </h3>

      <div class="flex flex-col-reverse lg:flex-row gap-8 items-stretch">
         <div class="w-full space-y-8">
            <!-- Socials -->
            <div class="flex gap-6 justify-center items-center">
              <!-- Facebook -->
              <a href="https://www.facebook.com/AOLOP.AONHOM.XUXU.BIENHOA" target="_blank"
                class="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition shadow-lg shadow-blue-600/30">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.49v-9.294H9.691V11.01h3.125V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>

              <!-- Zalo -->
              <a href="https://zalo.me/0767710030" target="_blank"
                class="w-14 h-14 flex items-center justify-center rounded-full bg-sky-500 hover:scale-110 transition font-bold text-white text-xl shadow-lg shadow-sky-500/30">
                Z
              </a>

              <!-- YouTube -->
              <a href="https://www.youtube.com/@aothunxuxubienhoa" target="_blank"
                class="w-14 h-14 flex items-center justify-center rounded-full bg-red-600 hover:scale-110 transition shadow-lg shadow-red-600/30">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23.498 6.186a3.015 3.015 0 00-2.12-2.132C19.705 3.5 12 3.5 12 3.5s-7.705 0-9.378.554a3.015 3.015 0 00-2.12 2.132C0 7.86 0 12 0 12s0 4.14.502 5.814a3.015 3.015 0 002.12 2.132C4.295 20.5 12 20.5 12 20.5s7.705 0 9.378-.554a3.015 3.015 0 002.12-2.132C24 16.14 24 12 24 12s0-4.14-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <!-- MAP -->
            <div class="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 hover:border-primary/50 transition duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7834.2306861373145!2d106.86136!3d10.954659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dd007163277b%3A0x18abe8063b563a2e!2zWHV4dSAtIMOBbyDEkeG7k25nIHBo4bulYywgaW4g4bqlbiB0ZW0gbmjDo24sIHF1w6AgdOG6t25n!5e0!3m2!1svi!2sus!4v1769151241323!5m2!1svi!2sus"
                class="w-full h-full border-0 grayscale-[0.8] hover:grayscale-0 transition duration-500"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
         </div>
      </div>
    </div>

    </div>
  </section>
</template>


<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  alert(`Cảm ơn ${form.name}! Chúng tôi sẽ liên hệ qua ${form.phone}`)
  form.name = ''
  form.phone = ''
  form.message = ''
}
</script>
