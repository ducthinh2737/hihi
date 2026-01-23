<template>
  <section id="home" class="relative min-h-screen flex flex-col items-center justify-start bg-white overflow-hidden">
    
    <div class="absolute inset-0 z-0 opacity-40">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#e0f2fe_0%,transparent_50%)]"></div>
      <div class="absolute top-20 left-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
    </div>

    <div class="container mx-auto px-4 pt-20 relative z-10 text-center">
        <div class="max-w-4xl mx-auto px-6">
            <h1 class="text-3xl md:text-5xl font-bold mb-6 text-slate-800 leading-tight" data-aos="fade-up">
              Chúng tôi cung cấp các <br/>
              <span class="text-cyan-600 uppercase">Dịch vụ in ấn</span>
            </h1>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-aos="fade-up" data-aos-delay="200">
                <a href="#about" class="px-8 py-2.5 bg-cyan-600 text-white font-medium rounded-full shadow-md hover:bg-cyan-700 transition duration-300">
                    Giới thiệu
                </a>
                <a href="https://www.youtube.com/@aothunxuxubienhoa" target="_blank" class="flex items-center gap-2 px-6 py-2.5 text-slate-700 font-medium hover:text-cyan-600 transition duration-300">
                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <svg class="w-4 h-4 fill-cyan-600" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    Kênh YouTube của Áo thun xuxu
                </a>
            </div>
        </div>
    </div>

    <div class="relative w-full mt-auto max-w-6xl mx-auto px-4" data-aos="fade-up" data-aos-delay="400">
      <img 
        src="https://shop.aothunxuxu.com/assets/img/may-in-theu-ao-dong-phuc-bien-hoa-dong-nai-min.png" 
        alt="Team Staff" 
        class="w-full h-auto object-contain block mx-auto translate-y-4"
      />
      </div>
  </section>
</template>

<style scoped>
/* Hiệu ứng mượt mà cho text */
h1 {
  letter-spacing: -0.02em;
}

/* Custom gradient nếu cần thêm độ sâu */
section {
  background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%);
}

[data-aos] {
  pointer-events: none;
}
.aos-animate {
  pointer-events: auto;
}
</style>