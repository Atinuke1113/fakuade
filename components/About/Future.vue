<template>
    <section class="py-20 bg-gradient-to-br from-[#F97316]/5 to-[#14B8A6]/5">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Header -->
          <div class="mb-12"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :visible="{ opacity: 1, y: 0 }">
            <h2 class="text-4xl font-bold mb-4">Media Resources</h2>
            <div class="w-32 h-2 bg-[#F97316] mx-auto rounded-full mb-6"></div>
            <p class="text-xl text-gray-600">
              Access comprehensive information about Seun Fakuade's journey, achievements, and vision
            </p>
          </div>
  
          <!-- Download Cards -->
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <!-- Biography -->
            <div class="bg-white rounded-2xl p-8 shadow-lg group hover:shadow-2xl transition-all duration-300"
                 v-motion
                 :initial="{ opacity: 0, x: -50 }"
                 :visible="{ opacity: 1, x: 0 }">
              <div class="mb-6">
                <div class="w-16 h-16 bg-[#F97316] rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-file-alt text-white text-2xl"></i>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-[#F97316] mb-4">Full Biography</h3>
              <p class="text-gray-600 mb-6">
                Detailed profile including education, career milestones, and leadership philosophy
              </p>
              <a href="/downloads/seun-fakuade-biography.pdf" 
                 class="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white rounded-lg hover:bg-[#E97316] transition-colors duration-300">
                <i class="fas fa-download"></i>
                Download Biography
              </a>
            </div>
  
            <!-- Media Kit -->
            <div class="bg-white rounded-2xl p-8 shadow-lg group hover:shadow-2xl transition-all duration-300"
                 v-motion
                 :initial="{ opacity: 0, x: 50 }"
                 :visible="{ opacity: 1, x: 0 }">
              <div class="mb-6">
                <div class="w-16 h-16 bg-[#14B8A6] rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-images text-white text-2xl"></i>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-[#14B8A6] mb-4">Media Kit</h3>
              <p class="text-gray-600 mb-6">
                High-resolution photos, logos, and official press materials
              </p>
              <a href="/images/Media.zip" 
                 class="inline-flex items-center gap-2 px-6 py-3 bg-[#14B8A6] text-white rounded-lg hover:bg-[#13A89A] transition-colors duration-300">
                <i class="fas fa-download"></i>
                Download Media Kit
              </a>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>