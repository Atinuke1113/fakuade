<template>
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div v-for="n in 3" :key="n" 
               class="absolute rounded-full bg-accent/20 blur-3xl"
               :style="`top: ${n * 30}%; left: ${n * 20}%; width: 40rem; height: 40rem;`"
               v-motion
               :initial="{ opacity: 0, scale: 0.5 }"
               :visible="{ opacity: 0.6, scale: 1 }"
               :delay="n * 200">
          </div>
        </div>
  
        <div class="container mx-auto px-4 relative">
          <!-- Profile Section -->
          <div class="flex flex-col md:flex-row items-center gap-12 mb-16">
            <!-- Profile Image -->
            <div class="w-full md:w-1/3"
                 v-motion
                 :initial="{ opacity: 0, x: -50 }"
                 :visible="{ opacity: 1, x: 0 }">
              <img 
                src="/images/seun.jpg" 
                alt="Seun Fakuade" 
                class="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
  
            <!-- Introduction -->
            <div class="w-full md:w-2/3 space-y-6">
              <h1 
                class="text-4xl md:text-5xl font-bold"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0 }">
                I am Seun Fakuade
              </h1>
              
              <p 
                class="text-xl text-gray-300"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0 }"
                :delay="200">
                A passionate individual with a drive for success in all aspects of my life.
              </p>
            </div>
          </div>
  
          <!-- Biography Sections -->
          <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div v-for="(section, index) in sections" 
                 :key="index"
                 class="bg-white/10 backdrop-blur-lg rounded-xl p-6"
                 v-motion
                 :initial="{ opacity: 0, y: 20 }"
                 :visible="{ opacity: 1, y: 0 }"
                 :delay="index * 100">
              <h3 class="text-xl font-semibold mb-4">{{ section.title }}</h3>
              <p class="text-gray-300">{{ section.content }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const sections = [
    {
      title: "Educational Background",
      content: "I have a diverse educational background, with a Bachelor's degree in Microbiology and a Master's degree in Public Administration from the prestigious Lee Kuan Yew School of Public Policy."
    },
    {
      title: "Professional Experience",
      content: "Throughout my career, I have gained valuable experience in various industries, learning from great mentors like Mallam Nasir El Rufai and Dr. John Kayode Fayemi."
    },
    {
      title: "Leadership",
      content: "I am a natural leader, with the ability to motivate and inspire those around me to strive for excellence. I believe in fostering a positive work environment where collaboration and teamwork are valued."
    },
    {
      title: "Personal Interests",
      content: "In my free time, I enjoy traveling, exploring new cultures, and engaging in adventurous activities. These experiences have taught me the value of embracing new challenges."
    }
  ]
  </script>
  
  <style scoped>
  .bg-gradient-to-br {
    background-size: 200% 200%;
    animation: gradientAnimation 15s ease infinite;
  }
  
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  </style>