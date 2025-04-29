<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Image Section -->
          <div class="relative"
               v-motion
               :initial="{ opacity: 0, x: -50 }"
               :visible="{ opacity: 1, x: 0 }">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/gallery6.jpg" 
                alt="Seun Fakuade"
                class="w-full h-[500px] object-cover"
              >
            </div>
            <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#F97316] to-[#14B8A6] rounded-2xl -z-10"></div>
          </div>

          <!-- Content Section -->
          <div class="space-y-6"
               v-motion
               :initial="{ opacity: 0, x: 50 }"
               :visible="{ opacity: 1, x: 0 }">
            <div>
              <h2 class="text-3xl font-bold mb-4">Leadership Philosophy</h2>
              <div class="w-32 h-2 bg-[#F97316] rounded-full mb-8"></div>
            </div>

            <p class="text-gray-600 text-lg leading-relaxed">
              In the rapidly evolving landscape of digital innovation, my leadership philosophy centers on fostering an ecosystem where technology serves as a catalyst for societal advancement. I believe in leading with vision while remaining grounded in practicality, ensuring that every initiative we undertake creates tangible impact for our communities.
            </p>

            <p class="text-gray-600 text-lg leading-relaxed">
              My approach combines strategic foresight with collaborative execution, emphasizing the importance of building strong partnerships and empowering teams to drive transformative change. By balancing innovation with inclusivity, we're creating a digital future that leaves no one behind, while setting new standards for public service excellence.
            </p>

            <NuxtLink 
              to="/about" 
              class="inline-flex items-center gap-2 text-[#F97316] hover:text-[#E97316] font-semibold text-lg group mt-6">
              Read Full Story 
              <i class="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>