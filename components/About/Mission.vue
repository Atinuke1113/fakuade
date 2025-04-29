<template>
  <section class="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-10"
             v-motion
             :initial="{ opacity: 0, y: 20 }"
             :visible="{ opacity: 1, y: 0 }"
             :delay="300">
          <h2 class="text-3xl font-bold mb-2">About Me</h2>
          <div class="w-20 h-1 bg-[#F97316] mx-auto"></div>
        </div>

        <!-- Content -->
        <div class="space-y-6 text-gray-700 text-lg leading-relaxed"
             v-motion
             :initial="{ opacity: 0, y: 20 }"
             :visible="{ opacity: 1, y: 0 }"
             :delay="500">
          <p>
            I am Seun Fakuade, and I am excited to introduce myself to you.
          </p>

          <p>
            I am a passionate individual with a drive for success in all aspects of my life. I am from Nigeria, Oye in Ekiti State precisely. I have a strong work ethic and a determination to achieve my goals.
          </p>

          <p>
            I have a diverse educational background, with a Bachelor's degree in Microbiology and a Master's degree in Public Administration from the prestigious Lee Kuan Yew School of Public Policy. This combination has allowed me to gain a wide range of skills and a unique perspective on problem-solving. I am a lifelong learner, always seeking out new knowledge and ways to improve myself both personally and professionally.
          </p>

          <p>
            Throughout my career, I have gained valuable experience in various industries, from various great mentors like Mallam Nasir El Rufai and Dr. John Kayode Fayemi.
          </p>

          <p>
            I am a natural leader, with the ability to motivate and inspire those around me to strive for excellence. I believe in fostering a positive work environment where collaboration and teamwork are valued, leading to increased productivity and success.
          </p>

          <p>
            In my free time, I enjoy traveling, exploring new cultures, and engaging in adventurous activities. These experiences have taught me the value of embracing new challenges and stepping out of my comfort zone.
          </p>

          <p>
            I am excited about the opportunity to connect with like-minded individuals who share a passion for personal growth and professional development. I believe that through collaboration and continuous learning, we can achieve great things together.
          </p>

          <p class="italic text-gray-600">
            Thank you for taking the time to read my introduction. I look forward to connecting with you!
          </p>
        </div>

        <!-- Footer Link -->
        <div class="mt-10 text-center"
             v-motion
             :initial="{ opacity: 0, y: 20 }"
             :visible="{ opacity: 1, y: 0 }"
             :delay="700">
          <NuxtLink 
            to="/contact" 
            class="inline-flex items-center gap-2 text-[#F97316] hover:text-[#E97316] font-semibold group">
            Connect With Me 
            <i class="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>