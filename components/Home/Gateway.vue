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
              <img src="/images/newabt.jpg" alt="Book Cover" class="cover-image">
              <div class="cover-content"></div>
              <div class="spine"></div>
            </div>
  
            <!-- Book Pages -->
            <div class="pages" :class="{ 'open': isOpen }">
              <!-- Left Page -->
              <div class="page left">
                <div class="page-content">
                  <p>Seun Fakuade, appointed as the youngest executive council member (2022-2026), serves as Commissioner for Innovation, Science, and Digital Economy, a transformative leader propelling Ekiti State into the forefront of Nigeria’s digital revolution. With a formidable blend of expertise in development economics, public policy, and strategic governance, Seun is redefining progress by positioning Ekiti as a global beacon of innovation-driven prosperity. His mission: is to craft an eternal blueprint for States where ideas ignite, opportunities abound, and every citizen shapes a vibrant future.
                  .</p>
                </div>
              </div>
  
              <!-- Right Page -->
              <div class="page right">
                <div class="page-content">
                  <p>Globally, Seun contributed to forward-thinking initiatives, including a 5-year Smart City Agenda for Chiang Mai, Thailand (2015–2016) and a reform-oriented policy to address Japan’s Juku system. These experiences cemented his reputation as a policy wonk and governance specialist with a global perspective.
                  </p>
                  <p>Appointed Special Adviser on Governance, Reforms, and Innovation to Governor Biodun Oyebanji, and later Commissioner, Seun has driven Ekiti’s ambitious digital agenda.</p>
                  
                  <div class="last">
                    <a href="/images/SEUN'S_BIOGRAPHY.pdf" 
                 class="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white rounded-lg hover:bg-[#E97316] transition-colors duration-300">
                <i class="fas fa-arrow"></i>
                Click here to read more
              </a>
                    
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
              <p>Seun Fakuade, appointed as the youngest executive council member (2022-2026), serves as Commissioner for Innovation, Science, and Digital Economy, a transformative leader propelling Ekiti State into the forefront of Nigeria’s digital revolution. With a formidable blend of expertise in development economics, public policy, and strategic governance, Seun is redefining progress by positioning Ekiti as a global beacon of innovation-driven prosperity. His mission: is to craft an eternal blueprint for States where ideas ignite, opportunities abound, and every citizen shapes a vibrant future.
                .</p>
              <p class="text-gray-700 leading-relaxed">
                Globally, Seun contributed to forward-thinking initiatives, including a 5-year Smart City Agenda for Chiang Mai, Thailand (2015–2016) and a reform-oriented policy to address Japan’s Juku system. These experiences cemented his reputation as a policy wonk and governance specialist with a global perspective.              </p>
              <p class="text-gray-700 leading-relaxed">
                Appointed Special Adviser on Governance, Reforms, and Innovation to Governor Biodun Oyebanji, and later Commissioner, Seun has driven Ekiti’s ambitious digital agenda.
              </p>
              
            </div>
            <div class="mt-5">
              <a href="/images/SEUN'S_BIOGRAPHY.pdf" 
                 class="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white rounded-lg hover:bg-[#E97316] transition-colors duration-300">
                <i class="fas fa-arrow"></i>
                Click here to read more
              </a>
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
    width: 400px;
    height: 500px;
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
  
  @media (max-width: 458px) {
    .book {
      width: 300px;
      height: 400px;
    }

    @media (max-width: 468px) {
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