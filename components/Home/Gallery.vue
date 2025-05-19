<template>
    <section class="py-10 md:mt-20 mt-10 bg-gradient-to-br from-gray-100 to-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">Photo Gallery</h2>
        
        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Large Image -->
          <div class="md:col-span-2 row-span-2">
            <img 
              :src="images[0].src" 
              :alt="images[0].alt"
              class="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              @click="openModal(images[0])"
            />
          </div>
          
          <!-- Regular Images -->
          <div v-for="(image, index) in displayedImages" 
               :key="index"
               class="overflow-hidden rounded-lg cursor-pointer"
               v-show="index > 0"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-48 object-cover hover:opacity-90 transition-opacity"
              @click="openModal(image)"
            />
          </div>
        </div>
  
        <!-- Load More Button -->
        <div class="text-center mt-8" v-if="images.length > itemsToShow">
          <button 
            @click="loadMore" 
            class="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-800 transition-colors"
          >
            Load More
          </button>
        </div>
  
        <!-- Modal -->
        <div v-if="showModal" 
             class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
             @click="closeModal">
          <div class="relative max-w-4xl w-full">
            <img 
              :src="modalImage.src" 
              :alt="modalImage.alt"
              class="w-full h-auto"
            />
            <button 
              @click="closeModal"
              class="absolute top-4 right-4 text-white text-xl bg-black/50 w-10 h-10 rounded-full"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const showModal = ref(false)
  const modalImage = ref(null)
  const itemsToShow = ref(6)
  
  const images = [
    {
      src: '/images/gallery7.jpg',
      alt: 'Featured Image'
    },
    {
      src: '/images/gallery1.jpg',
      alt: 'Gallery Image 1'
    },
    {
      src: '/images/gallery2.jpg',
      alt: 'Gallery Image 2'
    },
    {
      src: '/images/gallery3.jpg',
      alt: 'Gallery Image 3'
    },
    {
      src: '/images/gallery4.jpg',
      alt: 'Gallery Image 4'
    },
    {
      src: '/images/gallery5.jpg',
      alt: 'Gallery Image 5'
    },
    {
      src: '/images/gallery6.jpg',
      alt: 'Gallery Image 6'
    },
    // Add more images as needed
  ]
  
  const displayedImages = computed(() => {
    return images.slice(0, itemsToShow.value)
  })
  
  const loadMore = () => {
    itemsToShow.value += 6
  }
  
  const openModal = (image) => {
    modalImage.value = image
    showModal.value = true
    document.body.style.overflow = 'hidden'
  }
  
  const closeModal = () => {
    showModal.value = false
    document.body.style.overflow = ''
  }
  
  // Clean up on component unmount
  onUnmounted(() => {
    document.body.style.overflow = ''
  })
  </script>
  
  <style scoped>
  .grid {
    grid-auto-rows: 200px;
  }
  
  .grid > div:first-child {
    grid-row: span 2;
  }
  
  @media (max-width: 768px) {
    .grid {
      grid-auto-rows: auto;
    }
    
    .grid > div:first-child {
      grid-row: auto;
    }
  }
  </style>


 
