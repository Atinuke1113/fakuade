<template>
  <section class="relative bg-white py-16">
   

    <!-- Newsletter Card -->
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto bg-orange-600 rounded-lg shadow-xl p-8 relative">
        <div class="text-center space-y-4 mb-8">
          <h2 class="text-3xl font-bold text-white tracking-wide">NEWSLETTER</h2>
          <p class="text-white">
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
            class="px-8 py-3  bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#14B8B8] transition-colors"
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