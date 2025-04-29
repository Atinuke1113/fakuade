<template>
  <section class="py-20 bg-gradient-to-br from-[#F97316]/5 to-[#14B8A6]/5">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16"
             v-motion
             :initial="{ opacity: 0, y: 20 }"
             :visible="{ opacity: 1, y: 0 }">
          <h2 class="text-3xl font-bold mb-4">Philosophy & Core Beliefs</h2>
          <div class="w-32 h-2 bg-[#F97316] mx-auto rounded-full"></div>
        </div>

        <!-- Values Grid -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Innovation -->
          <div class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :visible="{ opacity: 1, y: 0 }"
               :delay="200"
               :threshold="0.3">
            <div class="flex items-center gap-6 mb-6">
              <div class="w-16 h-16 bg-[#F97316] rounded-xl flex items-center justify-center">
                <i class="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-[#F97316]">Innovation</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Embracing cutting-edge technologies and creative solutions to transform public service delivery and create sustainable digital ecosystems that benefit all citizens.
            </p>
          </div>

          <!-- Service -->
          <div class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :visible="{ opacity: 1, y: 0 }"
               :delay="400"
               :threshold="0.3">
            <div class="flex items-center gap-6 mb-6">
              <div class="w-16 h-16 bg-[#14B8A6] rounded-xl flex items-center justify-center">
                <i class="fas fa-hands-helping text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-[#14B8A6]">Service</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Dedicated to serving the public interest through transparent, efficient, and responsive governance that prioritizes the needs and aspirations of our communities.
            </p>
          </div>

          <!-- Integrity -->
          <div class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :visible="{ opacity: 1, y: 0 }"
               :delay="600"
               :threshold="0.3">
            <div class="flex items-center gap-6 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#14B8A6] rounded-xl flex items-center justify-center">
                <i class="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-[#F97316] to-[#14B8A6] text-transparent bg-clip-text">
                Integrity
              </h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Upholding the highest standards of ethical conduct, accountability, and transparency in all actions and decisions, building trust with stakeholders.
            </p>
          </div>

          <!-- Youth Empowerment -->
          <div class="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :visible="{ opacity: 1, y: 0 }"
               :delay="800"
               :threshold="0.3">
            <div class="flex items-center gap-6 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-[#14B8A6] to-[#F97316] rounded-xl flex items-center justify-center">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#F97316] text-transparent bg-clip-text">
                Youth Empowerment
              </h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Investing in the next generation through digital skills development, mentorship programs, and creating opportunities for youth participation in governance and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>