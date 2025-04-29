<template>
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-12"
             v-motion
             :initial="{ opacity: 0, y: 20 }"
             :enter="{ opacity: 1, y: 0 }">
          <h2 class="text-4xl font-bold mb-4">Initiatives Spotlight</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Transformative programs driving innovation and digital advancement in our community
          </p>
        </div>
  
        <!-- Initiatives Carousel -->
        <div class="relative">
          <!-- Navigation Buttons -->
          <button @click="prevSlide" 
                  class="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg z-10 hover:bg-gray-50">
            <i class="fas fa-chevron-left text-gray-600"></i>
          </button>
          <button @click="nextSlide" 
                  class="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg z-10 hover:bg-gray-50">
            <i class="fas fa-chevron-right text-gray-600"></i>
          </button>
  
          <!-- Slides -->
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-out"
                 :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div v-for="(initiative, index) in initiatives" 
                   :key="index"
                   class="w-full flex-shrink-0 px-4">
                <div class="grid md:grid-cols-2 gap-8 items-center">
                  <div class="space-y-6"
                       v-motion
                       :initial="{ opacity: 0, x: -50 }"
                       :enter="{ opacity: 1, x: 0 }"
                       :delay="300">
                    <div class="inline-block px-4 py-2 bg-[#14B8A6] text-orange-600 rounded-full text-sm">
                      {{ initiative.category }}
                    </div>
                    <h3 class="text-3xl font-bold">{{ initiative.title }}</h3>
                    <p class="text-gray-600">{{ initiative.description }}</p>
                    <div class="flex gap-4">
                      <div v-for="(stat, key) in initiative.stats" :key="key" class="text-center">
                        <div class="text-2xl font-bold text-blue-600">{{ stat.value }}</div>
                        <div class="text-sm text-gray-500">{{ stat.label }}</div>
                      </div>
                    </div>
                    <button class="px-6 py-3 bg-[#14B8A6] text-white rounded-lg hover:bg-orange-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div class="relative h-[400px]"
                       v-motion
                       :initial="{ opacity: 0, x: 50 }"
                       :enter="{ opacity: 1, x: 0 }"
                       :delay="500">
                    <img :src="initiative.image" :alt="initiative.title" 
                         class="w-full h-full object-cover rounded-2xl shadow-xl">
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Dots -->
          <div class="flex justify-center gap-2 mt-8">
            <button v-for="(_, index) in initiatives" 
                    :key="index"
                    @click="currentSlide = index"
                    class="w-3 h-3 rounded-full transition-colors"
                    :class="currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'">
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const initiatives = [
    {
      category: 'Digital Economy',
      title: 'Digital Economy Drive',
      description: 'Accelerating digital transformation across sectors through innovative solutions and capacity building.',
      image: '/images/gallery2.jpg',
      stats: {
        businesses: { value: '500+', label: 'Businesses Impacted' },
        jobs: { value: '2000+', label: 'Jobs Created' }
      }
    },
    {
      category: 'Youth Development',
      title: 'Youth Innovation Labs',
      description: 'Empowering young minds with digital skills and entrepreneurship opportunities.',
      image: '/images/gallery2.jpg',
      stats: {
        participants: { value: '1000+', label: 'Youth Trained' },
        projects: { value: '150+', label: 'Projects Launched' }
      }
    },
    {
      category: 'Smart Infrastructure',
      title: 'Smart City Initiative',
      description: 'Building future-ready infrastructure for a connected and efficient urban environment.',
      image: '/images/gallery2.jpg',
      stats: {
        coverage: { value: '80%', label: 'City Coverage' },
        services: { value: '25+', label: 'Digital Services' }
      }
    }
  ]
  
  const currentSlide = ref(0)
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % initiatives.length
  }
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + initiatives.length) % initiatives.length
  }
  </script>