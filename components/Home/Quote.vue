<template>
  <section class="relative min-h-screen overflow-hidden bg-black/90">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <video 
        class="w-full h-full object-cover"
        autoplay 
        loop 
        muted 
        playsinline
      >
        <source src="/images/firebg.mp4" type="video/mp4">
      </video>
    </div>
   
    <div class="relative container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
    <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 relative">
      <!-- Creative Text (Behind) -->
      <div class="mt-5 animate__animated animate__fadeInLeft animate__delay-1s md:absolute md:right-[80%] z-20">
        <h2 class="text-7xl md:text-8xl font-black bg-gradient-to-r from-[#FFFFFF] to-[#FF8A4C] text-transparent bg-clip-text">
          Leadership
        </h2>
      </div>

      <!-- Center Image -->
      <div class="animate__animated animate__fadeInUp animate__delay-1s relative w-64 md:w-80 lg:w-96 z-10">
        <img 
          src="/images/gallery6.jpg" 
          alt="Creative Design"
          class="w-full h-[400px] relative"
        >
        <!-- Decorative Glows -->
        <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-[#F97316]/20 rounded-full blur-3xl"></div>
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#14B8A6]/20 rounded-full blur-3xl"></div>
      </div>

      <!-- Design Text (Front) -->
      <div class="animate__animated animate__fadeInRight animate__delay-1s md:absolute md:left-[60%] z-20">
        <h2 class="text-7xl md:text-8xl md:mt-72 sm:mt-10 xs:mt-10 font-black bg-gradient-to-r from-[#FFFFFF] to-[#2DD4BE] text-transparent bg-clip-text">
          Visionary
        </h2>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>
import 'animate.css'
</script>

<style scoped>
.container {
  max-width: 1400px;
}

/* Floating Animation for Background Shapes */
@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -10px) rotate(5deg); }
  50% { transform: translate(0, -20px) rotate(0deg); }
  75% { transform: translate(-10px, -10px) rotate(-5deg); }
}

.floating-shape-1 { animation: float 20s infinite ease-in-out; }
.floating-shape-2 { animation: float 25s infinite ease-in-out reverse; }
.floating-shape-3 { animation: float 30s infinite ease-in-out; }
.floating-shape-4 { animation: float 35s infinite ease-in-out reverse; }
.floating-shape-5 { animation: float 40s infinite ease-in-out; }
.floating-shape-6 { animation: float 45s infinite ease-in-out reverse; }

.animate__animated {
  opacity: 1 !important;
}
</style>