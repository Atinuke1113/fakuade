<template>
    <section class="bg-black min-h-screen relative overflow-hidden">
      <!-- Background Video -->
      <div class="absolute inset-0 z-0">
        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-20">
          <source src="/images/water.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 backdrop-blur-sm"></div>
      </div>
  
      <!-- Main Container -->
      <div class="container mx-auto min-h-screen px-4">
        <!-- Desktop Layout -->
        <div class="hidden lg:grid grid-cols-3 items-center gap-4 h-screen">
          <!-- Left Content -->
          <div class="z-10">
            <h1 class="overflow-hidden">
              <span class="text-[#F97316] text-5xl md:text-6xl font-bold block"
                    v-motion
                    :initial="{ y: 100, opacity: 0 }"
                    :enter="{ y: 0, opacity: 1, transition: { delay: 400, duration: 800 } }">
                SEUN FAKUADE
              </span>
            </h1>
            
            <p class="text-white text-lg mb-8 max-w-lg mt-6"
               v-motion
               :initial="{ y: 40, opacity: 0 }"
               :enter="{ y: 0, opacity: 1, transition: { delay: 600, duration: 800 } }">
              Leadership is more than a title — it's a lifelong calling. Seun Fakuade has answered that call with clarity, courage, and conviction. As a changemaker and commissioner, he champions innovation, transparency, and equity as pillars for public service.
            </p>
  
            <div class="flex gap-6 mb-16"
                 v-motion
                 :initial="{ y: 40, opacity: 0 }"
                 :enter="{ y: 0, opacity: 1, transition: { delay: 800, duration: 800 } }">
              <NuxtLink to="/contact">
                <button class="bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-[#F97316]/90 transition-all font-semibold hover:scale-105">
                  CONNECT WITH ME
                </button>
              </NuxtLink>
            </div>
          </div>
  
          <!-- Center Image -->
          <div class="z-20"
               v-motion
               :initial="{ scale: 0.8, opacity: 0 }"
               :enter="{ scale: 1, opacity: 1, transition: { delay: 200, duration: 1000 } }">
            <div class="relative">
              <img src="/images/aboutimg.jpg" alt="Profile" class="w-full h-[85vh] object-cover object-center rounded-xl">
            </div>
          </div>
  
          <!-- Services List -->
          <div class="flex flex-col justify-center space-y-16 z-10">
            <div v-for="(service, index) in services" 
                 :key="index" 
                 class="flex items-start gap-6 group"
                 v-motion
                 :initial="{ x: 100, opacity: 0 }"
                 :enter="{ x: 0, opacity: 1, transition: { delay: 200 + (index * 200), duration: 800 } }">
              <div class="w-12 h-12 flex-shrink-0">
                <i :class="service.icon" class="text-[#F97316] text-3xl"></i>
              </div>
              <div class="text-white">
                <h4 class="text-lg font-bold mb-3 group-hover:text-[#F97316] transition-colors">
                  {{ service.title }}
                </h4>
                <p class="text-gray-300 text-base leading-relaxed">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Tablet Layout -->
        <div class="hidden md:block lg:hidden py-20">
          <div class="flex flex-col items-center">
            <div class="w-3/4 mb-12 z-20">
              <img src="/images/commm.jpg" alt="Profile" class="w-full h-[50vh] object-cover object-center rounded-xl">
            </div>
  
            <div class="text-center mb-12 z-10">
              <h1 class="mb-6">
                
                <span class="text-[#F97316] text-4xl font-bold block">SEUN FAKUADE</span>
              </h1>
              <p class="text-white text-lg mb-8 max-w-2xl mx-auto">
                Leadership is more than a title — it's a lifelong calling. Seun Fakuade has answered that call with clarity, courage, and conviction. As a changemaker and commissioner, he champions innovation, transparency, and equity as pillars for public service.
              </p>
              <NuxtLink to="/contact">
                <button class="bg-[#F97316] text-white px-8 py-3 rounded-lg hover:bg-[#F97316]/90 transition-all font-semibold">
                  CONNECT WITH ME
                </button>
              </NuxtLink>
            </div>
  
            <div class="grid grid-cols-2 gap-4 px-4">
              <div v-for="service in services" 
                   :key="service.title" 
                   class="flex items-start gap-2">
                <div class="w-10 h-10 flex-shrink-0">
                  <i :class="service.icon" class="text-[#F97316] text-2xl"></i>
                </div>
                <div class="text-white">
                  <h4 class="text-base font-bold mb-2">{{ service.title }}</h4>
                  <p class="text-gray-300 text-sm">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Mobile Layout -->
        <div class="md:hidden pt-20 pb-10">
          <div class="flex flex-col">
            <div class="w-full mb-8 z-20">
              <img src="/images/aboutimg.jpg" alt="Profile" class="w-full h-[40vh] object-cover object-center rounded-xl">
            </div>
  
            <div class="text-center mb-8 z-10 px-4">
              <h1 class="mb-6">
               
                <span class="text-[#F97316] text-3xl font-bold block">SEUN FAKUADE</span>
              </h1>
              <p class="text-white text-base mb-8">
                Leadership is more than a title — it's a lifelong calling. Seun Fakuade has answered that call with clarity, courage, and conviction. As a changemaker and commissioner, he champions innovation, transparency, and equity as pillars for public service.
              </p>
              <NuxtLink to="/contact">
                <button class="w-full bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-[#F97316]/90 transition-all font-semibold">
                  CONNECT WITH ME
                </button>
              </NuxtLink>
            </div>
  
            <div class="space-y-8 px-4">
              <div v-for="service in services" 
                   :key="service.title" 
                   class="flex items-start gap-4">
                <div class="w-10 h-10 flex-shrink-0">
                  <i :class="service.icon" class="text-[#F97316] text-2xl"></i>
                </div>
                <div class="text-white">
                  <h4 class="text-base font-bold mb-2">{{ service.title }}</h4>
                  <p class="text-gray-300 text-sm">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      title: 'VISIONARY',
      icon: 'fas fa-eye'
    },
    {
      title: 'TRANSFORMATIONAL LEADER',
      icon: 'fas fa-male'
    },
    {
      title: 'INNOVATOR',
      icon: 'fas fa-globe'
    },
    {
      title: 'POLICY WORK',
      icon: 'fas fa-briefcase'
    }
  ]
  </script>
  
  <style scoped>
  section {
    background-color: black;
  }
  
  img {
    filter: brightness(1.1);
    transition: all 0.5s ease;
  }
  
  img:hover {
    transform: scale(1.02);

  }
  
  .particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(249, 115, 22, 0.2);
    border-radius: 50%;
    animation: float 8s infinite linear;
  }
  
  @keyframes float {
    0% {
      transform: translateY(100vh) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(-100vh) scale(1);
      opacity: 0;
    }
  }
  
  .particle:nth-child(odd) {
    animation-duration: 12s;
  }
  
  .particle {
    left: calc(var(--n) * 5%);
    animation-delay: calc(var(--n) * -0.5s);
  }
  
  @media (max-width: 1024px) {
    img {
      box-shadow: 0 0 15px #F97316;
    }
  }
  
  @media (max-width: 768px) {
    .particles {
      display: none;
    }
    
    img {
      box-shadow: 0 0 10px #F97316;
    }
  }
  </style>