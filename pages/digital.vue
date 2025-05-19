<template>
    <div class="min-h-screen bg-white">
      <!-- Hero Section -->
      <section class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-50 to-teal-50"></div>
        <div class="container mx-auto px-4 relative">
          <div class="max-w-4xl mx-auto text-center"
               v-motion
               :initial="{ opacity: 0, y: 100 }"
               :enter="{ opacity: 1, y: 0 }">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
              Digital Skills Initiative
            </h1>
            <p class="text-gray-600 text-lg md:text-xl mb-8">
              Empowering the next generation with cutting-edge digital skills for a future-ready workforce
            </p>
            <button class="bg-orange-600 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
              Get Started Today
            </button>
          </div>
        </div>
        
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 pointer-events-none">
          <div v-for="n in 3" :key="`circle-${n}`" 
               class="absolute rounded-full opacity-20"
               :style="`
                 width: ${100 + n * 50}px;
                 height: ${100 + n * 50}px;
                 border: 2px solid rgba(249, 115, 22, 0.2);
                 animation: pulse ${3 + n}s infinite;
                 left: ${20 + n * 10}%;
                 top: ${30 + n * 15}%;
               `">
          </div>
        </div>
      </section>
  
      <!-- Skills Grid -->
      <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }">
          Core Digital Skills
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(skill, index) in skills" 
               :key="skill.title"
               class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :enter="{ opacity: 1, y: 0, transition: { delay: index * 200 } }">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                <i :class="[skill.icon, 'text-2xl text-orange-600 group-hover:text-white']"></i>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">{{ skill.title }}</h3>
                <p class="text-gray-600 mb-4">{{ skill.description }}</p>
                <ul class="space-y-2">
                  <li v-for="topic in skill.topics" 
                      :key="topic"
                      class="flex items-center text-gray-600">
                    <i class="fas fa-check-circle text-orange-600 mr-2"></i>
                    {{ topic }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <!-- Benefits Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Why Learn Digital Skills?</h2>
            <p class="text-gray-600">Equip yourself with the tools and knowledge needed to thrive in the digital age</p>
          </div>
  
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="benefit in benefits" 
                 :key="benefit.title"
                 class="bg-white p-6 rounded-xl shadow-md"
                 v-motion
                 :initial="{ opacity: 0, y: 50 }"
                 :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }">
              <h3 class="text-xl font-semibold mb-4">{{ benefit.title }}</h3>
              <p class="text-gray-600">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-orange-600 to-teal-600 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-8">Ready to Start Your Digital Journey?</h2>
          <button class="bg-white text-orange-600 px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const skills = [
    {
      title: 'Web Development',
      icon: 'fas fa-code',
      description: 'Learn modern web development technologies and frameworks',
      topics: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React/Vue.js', 'Responsive Design']
    },
    {
      title: 'Digital Marketing',
      icon: 'fas fa-bullhorn',
      description: 'Master the art of digital marketing and social media',
      topics: ['Social Media Marketing', 'SEO', 'Content Strategy', 'Analytics']
    },
    {
      title: 'UI/UX Design',
      icon: 'fas fa-paint-brush',
      description: 'Create beautiful and functional user interfaces',
      topics: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Data Analytics',
      icon: 'fas fa-chart-line',
      description: 'Analyze and visualize data for better decision making',
      topics: ['Python Basics', 'Data Visualization', 'SQL', 'Business Intelligence']
    },
    {
      title: 'Cloud Computing',
      icon: 'fas fa-cloud',
      description: 'Learn cloud platforms and deployment strategies',
      topics: ['AWS/Azure Basics', 'Cloud Architecture', 'DevOps', 'Security']
    },
    {
      title: 'Mobile Development',
      icon: 'fas fa-mobile-alt',
      description: 'Build mobile applications for iOS and Android',
      topics: ['React Native', 'Flutter', 'Mobile UI/UX', 'App Publishing']
    }
  ]
  
  const benefits = [
    {
      title: 'Career Growth',
      description: 'Open doors to high-demand career opportunities in the tech industry'
    },
    {
      title: 'Global Opportunities',
      description: 'Work remotely for companies worldwide with digital skills'
    },
    {
      title: 'Innovation Capability',
      description: 'Develop the ability to create and implement innovative solutions'
    },
    {
      title: 'Competitive Edge',
      description: 'Stay ahead in the rapidly evolving digital landscape'
    },
    {
      title: 'Entrepreneurship',
      description: 'Start your own digital business or freelance career'
    },
    {
      title: 'Network Building',
      description: 'Connect with like-minded professionals and mentors'
    }
  ]
  </script>
  
  <style scoped>
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.1); opacity: 0.3; }
    100% { transform: scale(1); opacity: 0.2; }
  }
  </style>