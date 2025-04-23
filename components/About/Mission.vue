<template>
    <section class="py-20 sm:mt-0 sm:py-10 bg-white overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Vision -->
        <div class="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div class="w-full md:w-1/2"
               v-motion
               :initial="{ opacity: 0, x: -50 }"
               :visible="{ opacity: 1, x: 0 }">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              To create a world where every ambitious student has access to quality education, 
              regardless of their financial background. We envision a future where education 
              becomes the greatest equalizer, empowering individuals to reach their full potential 
              and contribute meaningfully to society.
            </p>
          </div>
          <div class="w-full md:w-1/2"
               v-motion
               :initial="{ opacity: 0, x: 50 }"
               :visible="{ opacity: 1, x: 0 }">
            <div class="relative">
              <div class="absolute -inset-4 bg-accent/20 rounded-xl blur-lg"></div>
              <img 
                src="/images/Mission.jpg" 
                alt="Vision" 
                class="relative rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
  
        <!-- Mission -->
        <div class="flex flex-col-reverse md:flex-row items-center gap-12">
          <div class="w-full md:w-1/2"
               v-motion
               :initial="{ opacity: 0, x: -50 }"
               :visible="{ opacity: 1, x: 0 }">
            <div class="relative">
              <div class="absolute -inset-4 bg-accent/20 rounded-xl blur-lg"></div>
              <img 
                src="/images/gallery1.jpg" 
                alt="Mission" 
                class="relative rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2"
               v-motion
               :initial="{ opacity: 0, x: 50 }"
               :visible="{ opacity: 1, x: 0 }">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <ul class="space-y-4 text-lg text-gray-600">
              <li class="flex items-start gap-3">
                <i class="fas fa-check-circle text-accent mt-1"></i>
                <span>Provide substantial scholarships to promising students</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-check-circle text-accent mt-1"></i>
                <span>Offer mentorship and guidance through educational journey</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-check-circle text-accent mt-1"></i>
                <span>Create networking opportunities with industry leaders</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-check-circle text-accent mt-1"></i>
                <span>Foster leadership development and personal growth</span>
              </li>
            </ul>
          </div>
        </div>
  
       
      </div>
    </section>
  </template>
  
 