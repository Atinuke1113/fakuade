<template>
    <section class="py-20 h-[400px] mt-10 bg-gradient-to-br from-[#F97316]/5 to-[#14B8A6]/80">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center relative overflow-hidden min-h-[300px]">
          <TransitionGroup
            name="quote"
            tag="div"
            class="relative"
          >
            <div
              v-for="(quote, index) in quotes"
              :key="quote.id"
              v-show="currentQuote === index"
              class="absolute w-full"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0 }"
            >
              <div class="text-6xl text-[#F97316] mb-8">
                <i class="fas fa-quote-left"></i>
              </div>
              <p class="text-3xl font-bold text-gray-800 mb-8">
                {{ quote.text }}
              </p>
              <div class="flex items-center justify-center gap-4">
                <div class="w-12 h-1 bg-[#F97316] rounded-full"></div>
                <p class="text-gray-600">{{ quote.context }}</p>
                <div class="w-12 h-1 bg-[#F97316] rounded-full"></div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const quotes = [
    {
      id: 1,
      text: "Innovation is governance's boldest tool for equity.",
      context: "On Digital Transformation"
    },
    {
      id: 2,
      text: "The future of Africa lies in empowering its youth with digital skills.",
      context: "On Youth Development"
    },
    {
      id: 3,
      text: "Leadership is about creating pathways where barriers once stood.",
      context: "On Leadership"
    },
    {
      id: 4,
      text: "Technology should serve humanity, not the other way around.",
      context: "On Innovation"
    }
  ]
  
  const currentQuote = ref(0)
  let interval
  
  const rotateQuotes = () => {
    currentQuote.value = (currentQuote.value + 1) % quotes.length
  }
  
  onMounted(() => {
    interval = setInterval(rotateQuotes, 5000)
  })
  
  onUnmounted(() => {
    clearInterval(interval)
  })
  </script>
  
  <style scoped>
  .quote-enter-active,
  .quote-leave-active {
    transition: all 0.5s ease;
  }
  
  .quote-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }
  
  .quote-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  
  .quote-enter-to,
  .quote-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  </style>