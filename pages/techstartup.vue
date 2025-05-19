<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-orange-50 to-teal-50"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white"
             v-motion
             :initial="{ opacity: 0, y: 100 }"
             :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
            Tech Startup Hub
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-600">
              From Vision to Reality
            </span>
          </h1>
          <p class="text-xl text-gray-700 mb-8">
            Supporting innovative startups through mentorship, resources, and community
          </p>
          
        </div>
      </div>

      <!-- Animated Elements -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div v-for="n in 5" :key="n" 
             class="floating-shape"
             :style="`--delay: ${n * 2}s; --size: ${30 + n * 10}px; --left: ${n * 20}%`">
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" 
               :key="service.title"
               class="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :enter="{ opacity: 1, y: 0, transition: { delay: index * 200 } }">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-teal-600 flex items-center justify-center mb-6">
              <i :class="[service.icon, 'text-2xl text-white']"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Forum Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Startup Community</h2>
        
        <!-- Discussion Board -->
        <div class="max-w-4xl mx-auto">
          <!-- New Post Form -->
          <div class="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <h3 class="text-2xl font-bold mb-4">Share Your Thoughts</h3>
            <textarea 
              v-model="newPost.content"
              class="w-full p-4 border rounded-lg mb-4 h-32"
              placeholder="Share your startup journey, ask questions, or connect with others...">
            </textarea>
            <div class="flex justify-between items-center">
              <input 
                v-model="newPost.tags"
                class="flex-1 mr-4 p-3 border rounded-lg"
                placeholder="Add tags (comma separated)">
              <button 
                @click="submitPost"
                class="bg-gradient-to-r from-orange-600 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
                Post
              </button>
            </div>
          </div>

          <!-- Posts List -->
          <div class="space-y-6">
            <div v-for="post in communityPosts" 
                 :key="post.id"
                 class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                 v-motion
                 :initial="{ opacity: 0, x: -20 }"
                 :enter="{ opacity: 1, x: 0 }">
              <div class="flex items-start gap-4">
                <img :src="post.authorAvatar" :alt="post.author" class="w-12 h-12 rounded-full">
                <div class="flex-1">
                  <h4 class="font-bold">{{ post.author }}</h4>
                  <p class="text-gray-600 mt-2">{{ post.content }}</p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span v-for="tag in post.tags" 
                          :key="tag"
                          class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      #{{ tag }}
                    </span>
                  </div>
                  <div class="flex items-center gap-4 mt-4 text-gray-500">
                    <button class="flex items-center gap-2 hover:text-orange-500 transition-colors">
                      <i class="fas fa-heart"></i>
                      {{ post.likes }}
                    </button>
                    <button class="flex items-center gap-2 hover:text-orange-500 transition-colors">
                      <i class="fas fa-comment"></i>
                      {{ post.comments }}
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Success Stories</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="story in successStories" 
               :key="story.company"
               class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500"
               v-motion
               :initial="{ opacity: 0, scale: 0.9 }"
               :enter="{ opacity: 1, scale: 1 }">
            <div class="h-48 overflow-hidden">
              <img :src="story.image" :alt="story.company" 
                   class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">{{ story.company }}</h3>
              <p class="text-gray-600 mb-4">{{ story.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-orange-500 font-semibold">{{ story.funding }}</span>
                <button class="text-gray-600 hover:text-orange-500 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Mentorship',
    icon: 'fas fa-users',
    description: 'Connect with experienced entrepreneurs and industry experts who guide you through your startup journey.'
  },
  {
    title: 'Funding Access',
    icon: 'fas fa-money-bill-wave',
    description: 'Get connected to potential investors and learn about various funding opportunities.'
  },
  {
    title: 'Resources',
    icon: 'fas fa-tools',
    description: 'Access to workspace, tools, and resources needed to build and grow your startup.'
  }
]

const newPost = ref({
  content: '',
  tags: ''
})

const communityPosts = ref([
  {
    id: 1,
    author: 'Sarah Chen',
    authorAvatar: '/images/avatar1.jpg',
    content: 'Looking for co-founders for my AI-powered healthcare startup. Anyone interested in revolutionizing patient care?',
    tags: ['AI', 'Healthcare', 'Startup'],
    likes: 24,
    comments: 8
  },
  {
    id: 2,
    author: 'Alex Thompson',
    authorAvatar: '/images/avatar2.jpg',
    content: 'Just secured our seed funding! Happy to share insights about our pitch deck and fundraising strategy.',
    tags: ['Funding', 'Success', 'Tips'],
    likes: 156,
    comments: 32
  }
])

const successStories = [
  {
    company: 'TechFlow',
    description: 'AI-powered workflow automation platform that raised $5M in seed funding.',
    image: '/images/success1.jpg',
    funding: '$5M Seed Round'
  },
  {
    company: 'HealthConnect',
    description: 'Revolutionary telehealth platform connecting patients with specialists.',
    image: '/images/success2.jpg',
    funding: '$3M Series A'
  },
  {
    company: 'EcoCharge',
    description: 'Sustainable charging solutions for electric vehicles.',
    image: '/images/success3.jpg',
    funding: '$2.5M Seed Round'
  }
]

const submitPost = () => {
  // Add post submission logic here
}
</script>

<style scoped>
.floating-shape {
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: var(--left);
  top: -50px;
  background: linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(236, 72, 153, 0.1));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: float 10s ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(100vh) rotate(180deg); }
}
</style>