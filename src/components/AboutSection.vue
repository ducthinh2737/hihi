<template>
  <section id="about" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      
      <!-- Top Info Bar -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <!-- Work Time -->
        <div class="flex items-start bg-sky-50 p-6 rounded-lg">
          <div class="bg-sky-200 p-3 rounded text-sky-700 mr-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <div>
            <h3 class="font-bold text-gray-700 text-lg mb-1">Thời gian làm việc:</h3>
            <p class="text-sm text-gray-600">Từ thứ 2 đến thứ 7</p>
            <p class="text-sm text-gray-600">Sáng 8:30-12:00 - Chiều 13:30-18:00 hàng ngày.</p>
          </div>
        </div>
        
        <!-- Partner Search -->
        <div class="flex items-start bg-sky-50 p-6 rounded-lg">
          <div class="bg-sky-200 p-3 rounded text-sky-700 mr-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div>
            <h3 class="font-bold text-gray-700 text-lg mb-1">Tìm kiếm đối tác:</h3>
            <p class="text-sm text-gray-600">Nếu bạn đam mê kinh doanh, đặc biệt trong lĩnh vực in ấn, hãy liên hệ với chúng tôi.</p>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="flex items-start bg-sky-50 p-6 rounded-lg">
          <div class="bg-sky-200 p-3 rounded text-sky-700 mr-4">
             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <div>
            <h3 class="font-bold text-gray-700 text-lg mb-1">Thông tin liên hệ:</h3>
            <p class="text-sm text-gray-600 font-bold">076.771.0030 (Bán hàng)</p>
            <p class="text-sm text-gray-600">081.771.0030 (Kỹ thuật)</p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Column: Text Content -->
        <div class="w-full lg:w-1/2" data-aos="fade-right">
          <h4 class="text-gray-500 uppercase tracking-wide text-sm mb-2">CHÚNG TÔI LÀ:</h4>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-700 leading-tight mb-4">
            ÁO THUN XUXU (CTY TNHH MTV TRƯỜNG BẢO PHÁT)
          </h2>
          <p class="text-gray-600 italic mb-6">
            Công ty TNHH MTV Trường Bảo Phát được thành lập 15/10/2014, với thương hiệu áo thun xuxu (khởi đầu từ năm 2010). Chúng tôi cung cấp các dịch vụ về in ấn.
          </p>
          
          <ul class="space-y-3 mb-8">
            <li v-for="(item, index) in services" :key="index" class="flex items-start" data-aos="fade-up" :data-aos-delay="index * 100">
              <span class="text-cyan-600 mr-3 mt-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </span>
              <span class="text-gray-700 text-sm md:text-base leading-relaxed text-justify">{{ item }}</span>
            </li>
          </ul>

          <a href="#" class="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded hover:bg-cyan-700 transition">
            Xem thêm <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

        <!-- Right Column: Images -->
        <div class="w-full lg:w-1/2 flex gap-4" data-aos="fade-left">
          <div class="w-1/2">
             <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Team Xuxu" class="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div class="w-1/2 flex flex-col gap-4">
             <img src="https://images.pexels.com/photos/8761534/pexels-photo-8761534.jpeg" alt="Printing" class="w-full h-48 object-cover rounded-lg shadow-md" />
             <img src="https://images.pexels.com/photos/7693103/pexels-photo-7693103.jpeg" alt="Workshop" class="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  "May, in, thêu đồng phục công ty, khách sạn - nhà hàng, cửa hàng cà phê,...",
  "Quảng cáo: Băng rôn - PP standee - Poster - Tem nhãn - Tranh canvas - Giấy ảnh,...",
  "Bao bì: Túi shop thời trang - Túi siêu thị - Túi giấy - Túi nhà thuốc,...",
  "Quà tặng doanh nghiệp: Gấu bông, quạt tay, ly sứ, cúp pha lê, bút, tranh ghép, lót chuột, bình giữ nhiệt,...",
  "Khắc laser: Dưa hấu, Dưa trọc đầu, gỗ, da,...",
  "In ấn: Đào tạo in lụa, cung cấp vật tư ngành in,..."
];
</script>