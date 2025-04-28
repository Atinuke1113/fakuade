<template>
  <section class="relative bg-orange-600 py-16">
    <!-- Decorative Envelope -->
    <div class="absolute -top-12 left-1/2 transform -translate-x-1/2"
         v-motion
         :initial="{ opacity: 0, y: -50, rotate: -20 }"
         :enter="{ opacity: 1, y: 0, rotate: 0 }"
         :delay="200">
      <div class="w-24 h-20 bg-[#14B8A6] transform rotate-6 shadow-lg"
           style="clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);">
      </div>
    </div>

    <!-- Newsletter Card -->
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto bg-[#F3F4F6] rounded-lg shadow-xl p-8 relative">
        <div class="text-center space-y-4 mb-8">
          <h2 class="text-3xl font-bold text-[#003B4A] tracking-wide">NEWSLETTER</h2>
          <p class="text-gray-600">
            Keep up with our latest news and events. Subscribe to our newsletter.
          </p>
        </div>

        <!-- Subscription Form -->
        <form @submit.prevent="subscribe" class="flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            v-model="email"
            placeholder="Email Address"
            class="flex-1 px-4 py-3 bg-gray-200 rounded-lg focus:outline-4 focus:ring-2 focus:ring-[#003B4A]"
            required
          >
          <button 
            type="submit"
            class="px-8 py-3 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#14B8B8] transition-colors"
            v-motion
            :initial="{ scale: 1 }"
            :hover="{ scale: 1.05 }"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribe = () => {
  // Handle subscription logic here
  console.log('Subscribing email:', email.value)
  email.value = ''
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>