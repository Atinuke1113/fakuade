<template>
  <div class="max-w-6xl mx-auto p-8">
    <!-- Header -->
    <div class="flex items-center gap-8 mb-20"
         v-motion
         :initial="{ opacity: 0, x: -50 }"
         :enter="{ opacity: 1, x: 0 }"
         :transition="{ duration: 1000 }">
      <!-- Color Bars -->
      <div class="space-y-2">
        <div class="h-4 w-32 bg-yellow-400 rounded-r-full"></div>
        <div class="h-4 w-24 bg-red-500 rounded-r-full"></div>
        <div class="h-4 w-28 bg-navy-900 rounded-r-full"></div>
      </div>
      
      <div class="space-y-2">
        <h2 class="text-3xl font-bold">Innovation</h2>
        <h3 class="text-3xl font-bold text-gray-600">&amp; Strategy</h3>
        <p class="text-gray-500 max-w-md">
          Our innovation hub offers comprehensive solutions to navigate the evolving landscape of work and technology
        </p>
      </div>
    </div>

    <!-- Cards -->
    <div class="space-y-8">
      <!-- Initiatives Card -->
      <div class="flex items-start gap-6 max-w-2xl ml-12"
           v-motion
           :initial="{ opacity: 0, x: -100 }"
           :enter="{ opacity: 1, x: 0 }"
           :transition="{ duration: 1000, delay: 300 }">
        <div class="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <i class="fas fa-rocket text-white text-2xl"></i>
        </div>
        <div class="bg-white shadow-xl rounded-lg p-6 flex-grow">
          <h3 class="text-xl font-bold mb-2">Initiatives</h3>
          <p class="text-gray-600">
            Leverage breakthrough initiatives toward work and tech in developing nations. From digital skills to ethical algorithms, transparency, we drive innovation and positive workforce dynamics.
          </p>
        </div>
      </div>

      <!-- Programs Card -->
      <div class="flex items-start gap-6 max-w-2xl ml-24"
           v-motion
           :initial="{ opacity: 0, x: -100 }"
           :enter="{ opacity: 1, x: 0 }"
           :transition="{ duration: 1000, delay: 600 }">
        <div class="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
          <i class="fas fa-cogs text-white text-2xl"></i>
        </div>
        <div class="bg-white shadow-xl rounded-lg p-6 flex-grow">
          <h3 class="text-xl font-bold mb-2">Programs</h3>
          <p class="text-gray-600">
            Develop transformative programs driving change in developing nations, incorporating time-tested Digital Transformation roles. Engage for workforce navigation at work and all locations.
          </p>
        </div>
      </div>

      <!-- Vision Card -->
      <div class="flex items-start gap-6 max-w-2xl ml-36"
           v-motion
           :initial="{ opacity: 0, x: -100 }"
           :enter="{ opacity: 1, x: 0 }"
           :transition="{ duration: 1000, delay: 900 }">
        <div class="w-16 h-16 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
          <i class="fas fa-eye text-white text-2xl"></i>
        </div>
        <div class="bg-white shadow-xl rounded-lg p-6 flex-grow">
          <h3 class="text-xl font-bold mb-2">Vision</h3>
          <p class="text-gray-600">
            A boundless vision of a future where work and technology promote developing nations. Helping provide workforce solutions, balanced with an ongoing transformation focus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-navy-900 {
  background-color: #1a237e;
}

.shadow-xl {
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
}
</style>