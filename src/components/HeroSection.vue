<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-cover bg-center"
    style="background-image: url('https://images.pexels.com/photos/35707258/pexels-photo-35707258.jpeg');">
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 z-0"></div>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10 text-center text-white">
        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg" data-aos="fade-up">
                IN ẤN CHUYÊN NGHIỆP<br />
                <span class="text-primary">NÂNG TẦM THƯƠNG HIỆU</span>
            </h1>
            <p class="text-lg md:text-xx mb-10 text-gray-200" data-aos="fade-up" data-aos-delay="200">
                Chuyên cung cấp dịch vụ in ấn chất lượng cao, thiết kế độc đáo và giao hàng nhanh chóng trên toàn quốc.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                <a href="#contact" class="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-rose-700 hover:scale-105 transition transform duration-300">
                    NHẬN BÁO GIÁ NGAY
                </a>
                <a href="#services" class="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition duration-300">
                    XEM DỊCH VỤ
                </a>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>