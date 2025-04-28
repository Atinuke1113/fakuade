<template>
  <div class="bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <!-- Main Grid Layout -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8"
             v-motion
             :initial="{ opacity: 0, x: -50 }"
             :enter="{ opacity: 1, x: 0 }"
             :delay="200">
          <!-- Decorative Dots -->
          <div class="flex gap-1 mb-4">
            <div v-for="n in 9" :key="n" class="w-1 h-1 bg-orange-300 rounded-full"></div>
          </div>

          <div class="space-y-4 max-w-xl">
            <div class="flex items-center gap-2">
              <i class="fas fa-star text-orange-400"></i>
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900">
                Seun Fakuade Scholarship Fund
              </h1>
            </div>
            <p class="text-gray-600 leading-relaxed text-xl">
              The 'Seun Fakuade Scholarship Fund will provide scholarships to deserving students, enabling them to pursue their higher education goals without the burden of financial constraints. In addition to financial assistance, the scholarship program will also include an active mentorship component to guide and inspire the recipients throughout their academic journey.
            </p>
            <button class="px-8 py-3 bg-[#14B8A6] text-white rounded-lg hover:bg-orange-700 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <!-- Right Content -->
        <div class="relative"
             v-motion
             :initial="{ opacity: 0, scale: 0.9 }"
             :enter="{ opacity: 1, scale: 1 }"
             :delay="400">
          <!-- Image Grid -->
          <div class="grid grid-cols-2 gap-6">
            <!-- Top Image -->
            <div class="relative bg-[#F3F4F6] p-4 rounded-[40px] shadow-lg">
              <img 
                src="/images/scholarship.jpg" 
                alt="Student" 
                class="w-full h-48 object-cover rounded-[30px]"
              />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full"></div>
              <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-600 rounded-full"></div>
            </div>
            <!-- Bottom Image -->
            <div class="relative bg-orange-600 p-4 rounded-[40px] mt-12">
              <img 
                src="/images/gallery2.jpg" 
                alt="Student" 
                class="w-full h-48 object-cover rounded-[30px]"
              />
              <div class="absolute -top-4 -left-4 w-10 h-10 bg-[#14B8A6] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>