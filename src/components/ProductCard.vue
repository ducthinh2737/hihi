<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group h-full flex flex-col">
    <div class="aspect-[3/4] overflow-hidden bg-gray-100 relative">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
      />
    </div>
    <div class="p-4 flex-1 flex flex-col">
      <h3 class="font-bold text-lg text-slate-700 mb-1 group-hover:text-cyan-700 transition line-clamp-2">
        {{ product.name }}
      </h3>
      <p class="text-gray-500 text-sm mb-3">{{ product.price }}</p>
      
      <div class="mt-auto">
        <router-link 
          :to="{ name: 'ProductDetail', params: { id: product.id }, query: { category: categoryId } }" 
          class="block w-full py-2 bg-cyan-50 text-cyan-700 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition text-center"
          @click="$emit('click-detail')"
        >
          Chi tiết
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  },
  categoryId: {
    type: [String, Number],
    default: ''
  }
});

defineEmits(['click-detail']);
</script>
