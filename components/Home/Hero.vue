<template>
    <section class="relative min-h-screen">
      <!-- Video Background -->
      <video
        ref="videoRef"
        class="absolute top-0 left-0 w-full h-full object-cover"
        autoplay
        muted
        loop
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50">
        <!-- Content -->
        <div class="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-center">
            Hon. Seun Fakuade
          </h1>
          <p class="text-xs md:text-2xl mb-8 text-center max-w-2xl">
            Entrepreneur | Ideator | Policy Work | Cinematographer | Nation Builder & Patriot
          </p>
          
          
          <!-- Video Control Button -->
          <button 
            @click="toggleVideo"
            class="bg-white text-black px-6 py-2 rounded-full mt-60 flex items-center space-x-2 hover:bg-gray-200 transition-colors"
          >
            <span v-if="isPlaying">Pause Video</span>
            <span v-else>Play Video</span>
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const videoRef = ref(null)
  const isPlaying = ref(true)
  
  const toggleVideo = () => {
    if (videoRef.value) {
      if (isPlaying.value) {
        videoRef.value.pause()
      } else {
        videoRef.value.play()
      }
      isPlaying.value = !isPlaying.value
    }
  }
  </script>