<template>
    <div class="bg-white mt-10 mb-0">
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Left Column - Image -->
          <div 
            class="w-full md:w-1/2"
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="200"
          >
            <img 
              src="/images/scholarship.jpg" 
              alt="Scholarship" 
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
  
          <!-- Right Column - Content -->
          <div class="w-full md:w-1/2 space-y-6">
            <h1 
              class="text-3xl md:text-4xl font-bold text-gray-800 leading-tight"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0 }"
              :delay="400"
            >
              Seun Fakuade Scholarship Fund
            </h1>
            
            <p 
              class="text-gray-700 text-lg"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0 }"
              :delay="600"
            >
              The 'Seun Fakuade Scholarship Fund will provide scholarships to deserving students, enabling them to pursue their higher education goals without the burden of financial constraints. In addition to financial assistance, the scholarship program will also include an active mentorship component to guide and inspire the recipients throughout their academic journey.
            </p>
  
            <NuxtLink to="/scholarship">
            <button 
              class="bg-gray-800 text-white px-6 py-3 mt-10 rounded-lg flex items-center gap-2 hover:bg-navy-800 transition-all duration-300 transform hover:scale-105"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0 }"
              :delay="800"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .bg-navy-900 {
    background-color: #1a2b4b;
  }
  .bg-navy-800:hover {
    background-color: #233761;
  }
  .text-navy-900 {
    color: #1a2b4b;
  }
  
  [v-motion] {
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  </style>