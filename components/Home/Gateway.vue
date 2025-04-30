<template>
    <div class="w-full">
      <h2 class="text-3xl font-bold text-center mb-2 mt-10">About Me</h2>
      <div class="w-20 h-1 bg-[#F97316] mx-auto"></div>
  
      <!-- Desktop Book View -->
      <div class="hidden md:block">
        <div class="book-container">
          <div class="book" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
            <!-- Book Cover -->
            <div class="front-cover" :class="{ 'open': isOpen }">
              <img src="/images/gallery6.jpg" alt="Book Cover" class="cover-image">
              <div class="cover-content"></div>
              <div class="spine"></div>
            </div>
  
            <!-- Book Pages -->
            <div class="pages" :class="{ 'open': isOpen }">
              <!-- Left Page -->
              <div class="page left">
                <div class="page-content">
                  <p>I am Seun Fakuade, and I am excited to introduce myself to you.</p>
                  <p>I am a passionate individual with a drive for success in all aspects of my life. I am from Nigeria, Oye in Ekiti State precisely. I have a strong work ethic and a determination to achieve my goals.</p>
                  <p>I have a diverse educational background, with a Bachelor's degree in Microbiology and a Master's degree in Public Administration from the prestigious Lee Kuan Yew School of Public Policy. This combination has allowed me to gain a wide range of skills and a unique perspective on problem-solving. I am a lifelong learner, always seeking out new knowledge and ways to improve myself both personally and professionally.</p>
                </div>
              </div>
  
              <!-- Right Page -->
              <div class="page right">
                <div class="page-content">
                  <p>Throughout my career, I have gained valuable experience in various industries, from various great mentors like Mallam Nasir El Rufai and Dr. John Kayode Fayemi.</p>
                  <p>I am a natural leader, with the ability to motivate and inspire those around me to strive for excellence. I believe in fostering a positive work environment where collaboration and teamwork are valued, leading to increased productivity and success</p>
                  <p>In my free time, I enjoy traveling, exploring new cultures, and engaging in adventurous activities. These experiences have taught me the value of embracing new challenges and stepping out of my comfort zone</p>
                  <div class="last">
                    <p class="italic text-orange-600">
                      Thank you for taking the time to read my introduction. I look forward to connecting with you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mobile View -->
      <div class="block md:hidden px-6 py-8 bg-white rounded-lg shadow-lg max-w-sm mx-auto">
        <div class="space-y-6">
          <div class="prose prose-lg">
            <div>
              <p class="text-gray-700 leading-relaxed">
                I am Seun Fakuade, and I am excited to introduce myself to you.
              </p>
              <p class="text-gray-700 leading-relaxed">
                I am a passionate individual with a drive for success in all aspects of my life. I am from Nigeria, Oye in Ekiti State precisely. I have a strong work ethic and a determination to achieve my goals.
              </p>
              <p class="text-gray-700 leading-relaxed">
                I have a diverse educational background, with a Bachelor's degree in Microbiology and a Master's degree in Public Administration from the prestigious Lee Kuan Yew School of Public Policy. This combination has allowed me to gain a wide range of skills and a unique perspective on problem-solving. I am a lifelong learner, always seeking out new knowledge and ways to improve myself both personally and professionally.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Throughout my career, I have gained valuable experience in various industries, from various great mentors like Mallam Nasir El Rufai and Dr. John Kayode Fayemi.
              </p>
              <p class="text-gray-700 leading-relaxed">
                I am a natural leader, with the ability to motivate and inspire those around me to strive for excellence. I believe in fostering a positive work environment where collaboration and teamwork are valued, leading to increased productivity and success.
              </p>
              <p class="text-gray-700 leading-relaxed">
                In my free time, I enjoy traveling, exploring new cultures, and engaging in adventurous activities. These experiences have taught me the value of embracing new challenges and stepping out of my comfort zone.
              </p>
            </div>
            <div>
              <p class="italic text-orange-600">
                Thank you for taking the time to read my introduction. I look forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const isOpen = ref(true)
  </script>
  
  <style scoped>
  .book-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 2000px;
    padding: 50px;
  }
  
  .book {
    position: relative;
    width: 420px;
    height: 600px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
  
  .front-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: left;
    transition: transform 1.5s cubic-bezier(0.3, 0.2, 0.2, 1);
    transform-style: preserve-3d;
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0,0,0,0.5);
    overflow: hidden;
  }
  
  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .cover-content {
    position: absolute;
    bottom: 40px;
    left: 30px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
  
  .cover-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .cover-subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
  }
  
  .spine {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.2), transparent);
    transform-origin: left;
  }
  
  .front-cover.open {
    transform: rotateY(-160deg);
  }
  
  .pages {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: left;
    transform-style: preserve-3d;
    transition: transform 1.5s cubic-bezier(0.3, 0.2, 0.2, 1);
    opacity: 0;
    visibility: hidden;
  }
  
  .pages.open {
    opacity: 1;
    visibility: visible;
    transform: rotateY(-20deg);
  }
  
  .page {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 40px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0,0,0,0.2);
    backface-visibility: hidden;
  }
  
  .left {
    transform: rotateY(0deg);
    background: linear-gradient(to right, #f8f9fa, #fff);
  }
  
  .right {
    transform: translateX(100%);
    background: linear-gradient(to left, #f8f9fa, #fff);
  }
  
  .page-content {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease 0.7s;
  }
  
  .pages.open .page-content {
    opacity: 1;
    transform: translateY(0);
  }
  
  .page h3 {
    font-size: 1.8rem;
    color: #1a1a1a;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .page p {
    font-size: 0.99rem;
    line-height: 1.8;
    color: rgb(53, 50, 50);
    margin-bottom: 15px;
  }
  .last p{
    color: #F97316
  }
  
  @media (max-width: 768px) {
    .book {
      width: 300px;
      height: 400px;
    }

    @media (max-width: 768px) {
  .book-container {
    min-height: auto;
    padding: 20px;
    background: white;
  }
}
  
    .cover-title {
      font-size: 2rem;
    }
  
    .front-cover.open {
      transform: rotateY(-180deg);
    }
  
    .pages.open {
      transform: rotateY(0deg);
    }
  
    .page h3 {
      font-size: 1.5rem;
    }
  
    .page p {
      font-size: 1rem;
    }
  
    .right {
      transform: none;
    }
  }
  </style>