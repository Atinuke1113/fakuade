<template>
    <section class="py-20 bg-gradient-to-br from-white to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :visible="{ opacity: 1, y: 0 }">
            <h2 class="text-3xl font-bold mb-4">Leadership in Action</h2>
            <div class="w-32 h-2 bg-[#F97316] mx-auto rounded-full"></div>
          </div>
  
          <!-- Story Cards -->
          <div class="space-y-12">
            <!-- Digital Transformation Story -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-xl"
                 v-motion
                 :initial="{ opacity: 0, y: 50 }"
                 :visible="{ opacity: 1, y: 0 }"
                 :threshold="0.3">
              <div class="md:flex">
                <div class="md:w-1/2">
                  <img 
                    src="/images/seun.jpg" 
                    alt="Digital Transformation"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div class="md:w-1/2 p-8 md:p-12">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-[#F97316] rounded-lg flex items-center justify-center">
                      <i class="fas fa-digital text-white text-xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-[#F97316]">Digital Transformation Journey</h3>
                  </div>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    Led the comprehensive digital transformation of Ekiti State, implementing innovative solutions that revolutionized public service delivery and citizen engagement.
                  </p>
                  <ul class="space-y-4 text-gray-600">
                    <li class="flex items-start gap-3">
                      <i class="fas fa-check-circle text-[#14B8A6] mt-1"></i>
                      <span>Established state-wide digital infrastructure reaching over 500,000 citizens</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <i class="fas fa-check-circle text-[#14B8A6] mt-1"></i>
                      <span>Launched e-governance platforms reducing service delivery time by 60%</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <i class="fas fa-check-circle text-[#14B8A6] mt-1"></i>
                      <span>Created digital skills programs empowering 10,000+ youth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
            <!-- Innovation Hub Story -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-xl"
                 v-motion
                 :initial="{ opacity: 0, y: 50 }"
                 :visible="{ opacity: 1, y: 0 }"
                 :threshold="0.3">
              <div class="md:flex flex-row-reverse">
                <div class="md:w-1/2">
                  <img 
                    src="/images/gallery6.jpg" 
                    alt="Innovation Hub"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div class="md:w-1/2 p-8 md:p-12">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-[#14B8A6] rounded-lg flex items-center justify-center">
                      <i class="fas fa-lightbulb text-white text-xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-[#14B8A6]">Innovation Hub Initiative</h3>
                  </div>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    Spearheaded the creation of Ekiti's first Innovation Hub, fostering technological advancement and entrepreneurship in the region.
                  </p>
                  <ul class="space-y-4 text-gray-600">
                    <li class="flex items-start gap-3">
                      <i class="fas fa-check-circle text-[#F97316] mt-1"></i>
                      <span>Incubated 50+ tech startups generating local employment</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <i class="fas fa-check-circle text-[#F97316] mt-1"></i>
                      <span>Facilitated ₦500M+ in innovation grants and investments</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <i class="fas fa-check-circle text-[#F97316] mt-1"></i>
                      <span>Established partnerships with global tech companies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>