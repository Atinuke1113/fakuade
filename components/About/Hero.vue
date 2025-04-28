<template>
  <div class="min-h-screen bg-black/95">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/3 h-screen bg-orange-600 transform skew-x-12"></div>
        <img src="/images/gallery7.jpg" alt="stars" class="absolute w-full h-full object-cover opacity-10">
      </div>

      <div class="container mx-auto px-4 py-12">
        <div class="grid lg:grid-cols-2 gap-12 items-center relative">
          <!-- Left Content -->
          <div class="text-white space-y-8"
               v-motion
               :initial="{ opacity: 0, x: -50 }"
               :enter="{ opacity: 1, x: 0 }"
               :delay="200">
            <h1 class="text-5xl md:text-6xl font-bold leading-tight">
              Hon. Commissioner
              <span class="block text-orange-600">Seun Fakuade</span>
            </h1>
            <p class="text-lg text-gray-200">
              I am Seun Fakuade, and I am excited to introduce myself to you.
              I am a passionate individual with a drive for success in all aspects of my life. I am from Nigeria, Oye in Ekiti State precisely. I have a strong work ethic and a determination to achieve my goals.
            </p>
            <p class="text-lg text-gray-200">
              Throughout my career, I have gained valuable experience in various industries, from various great mentors like Mallam Nasir El Rufai and Dr. John Kayode Fayemi.
            </p>
            <p class="text-lg text-gray-200">
              I am excited about the opportunity to connect with like-minded individuals who share a passion for personal growth and professional development. I believe that through collaboration and continuous learning, we can achieve great things together.
            </p>
            <button class="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-all">
              Learn More
            </button>
          </div>

          <!-- Right Content - Image -->
          <div class="relative"
               v-motion
               :initial="{ opacity: 0, scale: 0.9 }"
               :enter="{ opacity: 1, scale: 1 }"
               :delay="400">
            <img 
              src="/images/seun.jpg" 
              alt="Political Leader" 
              class="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>

        <!-- Bottom Cards -->
        <div class="grid md:grid-cols-3 gap-6 mt-12">
          <!-- Educational Background Card -->
          <div class="bg-blue-900/50 backdrop-blur-sm p-6 rounded-lg"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :enter="{ opacity: 1, y: 0 }"
               :delay="600">
            <h3 class="text-white text-xl mb-2 font-bold">Educational Background</h3>
            <p class="text-lg text-gray-200">
              I have a diverse educational background, with a Bachelor's degree in Microbiology and a Master's degree in Public Administration from the prestigious Lee Kuan Yew School of Public Policy.
            </p>
          </div>

          <!-- Personal Experience Card -->
          <div class="bg-orange-600 backdrop-blur-sm p-6 rounded-lg"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :enter="{ opacity: 1, y: 0 }"
               :delay="800">
            <h3 class="text-white text-xl mb-4 font-bold">Personal Experience</h3>
           <p class="text-lg text-gray-200">
            Throughout my career, I have gained valuable experience in various industries, learning from great mentors like Mallam Nasir El Rufai and Dr. John Kayode Fayemi.
           </p>
          </div>

          <!-- Newsletter Card -->
          <div class="bg-white p-6 rounded-lg"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :enter="{ opacity: 1, y: 0 }"
               :delay="1000">
            <h3 class="text-black text-xl mb-2 font-bold">Personal Interests</h3>
           <p class="text-lg text-black">
            In my free time, I enjoy traveling, exploring new cultures, and engaging in adventurous activities. These experiences have taught me the value of embracing new challenges.
           </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-stars {
  background-image: url('/images/stars.png');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
}
</style>