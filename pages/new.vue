<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="relative overflow-hidden min-h-[30vh] bg-cover bg-center bg-no-repeat" 
      style="background-image: url('/images/blogg.jpg');">
        <div class="container mx-auto px-4">
         
        </div>
      </section>
  
      <!-- Featured Post -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :visible="{ opacity: 1, y: 0 }">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div class="grid md:grid-cols-2 gap-8">
                <div class="relative h-[400px]">
                  <img src="/images/gallery3.jpg" alt="Featured Post" class="absolute inset-0 w-full h-full object-cover">
                </div>
                <div class="p-8 flex flex-col justify-center">
                  <span class="text-accent font-semibold mb-4">Featured Post</span>
                  <h2 class="text-3xl font-bold mb-4">Defining a Pathway For Our Democracy</h2>
                  <p class="text-gray-600 mb-6">The ideological differences of the two leading parties in the 2019 general elections was subtle yet clear. Many Nigerians, including myself, have long bemoaned the lack of a clear definition of ideology as observed in more matured democracies abroad (the lefts, rights, middle Centre: liberal, conservative, and the now-pronounced socialist democrats – thanks to Bernie Sanders).</p>
                  <div class="flex items-center gap-4 mb-6">
                    <img src="/images/seun.jpg" alt="Author" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="font-semibold">Seun Fakuade</p>
                      <p class="text-sm text-gray-500">February 02, 2019 · 5 min read</p>
                    </div>
                  </div>
                  <button class="self-start px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Blog Posts Grid -->
      <section class="pb-20">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <!-- Categories -->
            <div class="flex flex-wrap gap-4 mb-12 justify-center"
                 v-motion
                 :initial="{ opacity: 0, y: 20 }"
                 :visible="{ opacity: 1, y: 0 }">
              <button 
                v-for="category in categories" 
                :key="category"
                class="px-6 py-2 rounded-full border border-gray-300 hover:border-accent hover:text-accent transition-colors">
                {{ category }}
              </button>
            </div>
  
            <!-- Posts Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="(post, index) in posts" 
                   :key="index"
                   class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                   v-motion
                   :initial="{ opacity: 0, y: 20 }"
                   :visible="{ opacity: 1, y: 0 }"
                   :delay="index * 100">
                <div class="relative h-48">
                  <img :src="post.image" :alt="post.title" class="absolute inset-0 w-full h-full object-cover">
                </div>
                <div class="p-6">
                  <span class="text-accent text-sm font-semibold">{{ post.category }}</span>
                  <h3 class="text-xl font-bold mt-2 mb-3">{{ post.title }}</h3>
                  <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <img :src="post.author.avatar" :alt="post.author.name" class="w-8 h-8 rounded-full">
                      <span class="text-sm text-gray-500">{{ post.author.name }}</span>
                    </div>
                    <span class="text-sm text-gray-500">{{ post.date }}</span>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Load More Button -->
            <div class="text-center mt-12"
                 v-motion
                 :initial="{ opacity: 0, y: 20 }"
                 :visible="{ opacity: 1, y: 0 }">
              <button class="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const categories = ['All', 'Success Stories', 'Education', 'Leadership', 'Technology', 'Community']
  
  const posts = [
    {
      title: 'The African Development Trap',
      excerpt: 'Investments in any country is only profitable if it is sustainable, if it follows through a plan. Sustainable investment requires political and macroeconomic stability, institutional leadership, technical capacity, and the cooperation of important community stakeholders. ',
      image: '/images/african.jpg',
      author: {
        name: 'Seun Fakuade',
        avatar: '/images/seun.jpg'
      },
      date: 'December 12, 2018'
    },
    {
      title: 'The Victory Belongs to The People',
      excerpt: 'On Saturday 14th of July, 2018, the people of Ekiti state spoke through their votes, electing Dr. Kayode Fayemi of the All Progressives Congress party as Governor of Ekiti state. They spoke resoundingly against tyranny, despotism, charlatanism, and opportunism that trounces economic and social justice.',
      image: '/images/victory.jpg',
      author: {
        name: 'Seun Fakuade',
        avatar: '/images/seun.jpg'
      },
      date: 'July 16, 2018'
    },
    {
      title: 'An Intolerant World',
      excerpt: 'The conquest of imperialists across the world led, not to stability and the promotion of peace and freedom, as many of the advocates did desire; but more to chaos, instability and disintegration. Though economic in their original intent or ideology, the idea that economic conquest led to the domination or obliteration of cultures, traditions, beliefs, and in some cases, of groups brought damning consequences for global peace.',
      image: '/images/world.jpg',
      author: {
        name: 'Seun Fakuade',
        avatar: '/images/seun.jpg'
      },
      date: 'October 18, 2017'
    },
    // Add more posts as needed
  ]
  </script>