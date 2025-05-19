<template>
  <div class="min-h-screen flex flex-col">
    <!-- Top Bar -->
    <div class="bg-orange-600 text-white text-sm py-2">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a href="#" class="hover:text-gray-300 text-xs md:text-sm"></a>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:text-orange-500 text-lg">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="hover:text-orange-500 text-lg">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="hover:text-orange-500 text-lg">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="hover:text-orange-500 text-lg">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <div class="bg-white relative">
      <div class="container mx-auto px-4">
        <!-- Upper Nav with Logo -->
        <div class="flex justify-between items-center py-4 md:py-6">
          <div class="hidden md:flex items-center">
            <NuxtLink to="/scholarship" class="group flex items-center">
              <span class="text-black text-sm md:text-base">Scholarship Programs</span>
              <div class="ml-2 w-8 h-[1px] bg-black"></div>
              <i class="fas fa-arrow-right ml-2"></i>
            </NuxtLink>
          </div>

          <NuxtLink to="/" class="flex-shrink-0 text-center">
            <img src="/images/logo2.png" alt="Kingston" class="h-12 md:h-16 mx-auto">
          </NuxtLink>

          <div class="hidden md:flex items-center">
            <NuxtLink to="/contact" class="group flex items-center">
              <span class="text-black text-sm md:text-base">Connect With Me</span>
              <div class="ml-2 w-8 h-[1px] bg-black"></div>
              <i class="fas fa-arrow-right ml-2"></i>
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" 
                  class="md:hidden absolute right-4 top-8 p-2 z-50">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>

        <!-- Fixed Navigation Items -->
        <nav class="sticky fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
          <div class="container mx-auto px-4">
          <div class="flex justify-center border-t border-gray-200">
            <div class="hidden md:flex items-center justify-center w-full">
              <div class="flex items-center justify-center space-x-2 lg:space-x-4">
                <div v-for="(item, index) in menuItems" 
                     :key="index" 
                     class="group relative"
                     @mouseenter="activeDropdown = item.name"
                     @mouseleave="activeDropdown = null">
                  <NuxtLink :to="item.path" 
                           class="px-3 lg:px-6 py-4 inline-block text-black hover:text-gray-600 font-medium text-sm lg:text-base whitespace-nowrap">
                    {{ item.name }}
                  </NuxtLink>

                  <!-- Mega Dropdown -->
                  <div v-show="item.subItems?.length && activeDropdown === item.name"
                       class="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl bg-white shadow-lg border-t z-50 rounded-b-lg">
                    <div class="p-6">
                      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <NuxtLink v-for="subItem in item.subItems"
                                 :key="subItem.name"
                                 :to="subItem.path"
                                 class="flex items-start gap-4 group/item p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          <i :class="subItem.icon" class="text-xl lg:text-2xl text-gray-400 group-hover/item:text-orange-500 mt-1"></i>
                          <div>
                            <h3 class="font-medium text-gray-800 group-hover/item:text-orange-500 transition-colors duration-200">
                              {{ subItem.name }}
                            </h3>
                            <p class="text-sm text-gray-500 line-clamp-2">{{ subItem.description }}</p>
                          </div>
                        </NuxtLink>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" 
         class="md:hidden bg-white border-t border-gray-200 fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] overflow-y-auto z-40">
      <div class="container mx-auto px-4">
        <div v-for="(item, index) in menuItems" :key="index">
          <button @click="toggleMobileSubmenu(item)"
                  class="w-full px-4 py-3 flex justify-between items-center text-gray-800 hover:text-orange-500">
            {{ item.name }}
            <i v-if="item.subItems?.length" 
               :class="['fas', item.isOpen ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
          </button>
          <div v-if="item.subItems?.length && item.isOpen" 
               class="bg-gray-50 px-4 py-2">
            <NuxtLink v-for="subItem in item.subItems"
                      :key="subItem.name"
                      :to="subItem.path"
                      class="block py-3 px-4">
              <div class="flex items-start gap-3">
                <i :class="[subItem.icon, 'mt-1 text-orange-500']"></i>
                <div>
                  <h3 class="font-medium text-gray-800">{{ subItem.name }}</h3>
                  <p class="text-sm text-gray-500">{{ subItem.description }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="container mx-auto px-4 py-8 md:py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Logo & About -->
          <div class="col-span-2">
            <img src="/images/logo2.png" alt="logo" class="w-32 md:w-40 mb-6" />
            <p class="text-gray-400 mb-6 text-sm md:text-base">
              Empowering communities through innovative leadership and sustainable development.
            </p>
            <div class="flex gap-4">
              <a href="#" class="text-gray-400 hover:text-orange-500">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-orange-500">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-orange-500">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-orange-500">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-base md:text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-sm md:text-base">
              <li v-for="item in menuItems" :key="item.name">
                <NuxtLink :to="item.path" class="text-gray-400 hover:text-orange-500">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-base md:text-lg font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-sm md:text-base text-gray-400">
              <li class="flex items-center gap-2">
                <i class="fas fa-map-marker-alt text-orange-500"></i>
                Kingston, Ontario
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-phone text-orange-500"></i>
                +1 234 567 8900
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-envelope text-orange-500"></i>
                contact@example.com
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-sm">
          <p>© {{ new Date().getFullYear() }} All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const router = useRouter()
const activeDropdown = ref(null)
const isMobileMenuOpen = ref(false)

const menuItems = ref([
  {
    name: 'Home',
    path: '/',
    subItems: []
  },
  {
    name: 'About',
    path: '/about',
   
  },
  {
    name: 'Initiatives',
    path: '',
    subItems: [
      {
        name: 'Scholarship Program',
        path: '/scholarship',
        icon: 'fa fa-graduation-cap',
        description: 'Supporting academic excellence through the Seun Fakuade Scholarship Fund'
      },
      {
        name: 'Digital Skills',
        path: '/digital',
        icon: 'fas fa-laptop-code',
        description: 'Empowering youth with modern digital and technological skills'
      },
      
      {
        name: 'Leadership Academy',
        path: '/leadership',
        icon: 'fas fa-users',
        description: 'Developing the next generation of community leaders'
      },
      {
        name: 'Tech Startups',
        path: '/techstartup',
        icon: 'fas fa-rocket',
        description: 'Supporting and incubating innovative technology startups'
      },
      {
        name: 'Community Projects',
        path: '/community',
        icon: 'fas fa-hands-helping',
        description: 'Initiatives that directly impact and improve our local communities'
      }
    ]
  },
  {
    name: 'Thought Leadership',
    path: '/thought-leadership',
    subItems: [
      {
        name: 'Speaking',
        path: '/speaking',
        icon: 'fas fa-microphone',
        description: 'Keynotes and presentations on leadership and innovation'
      },
      {
        name: 'Publications',
        path: '/publications',
        icon: 'fas fa-newspaper',
        description: 'Articles, papers, and thought pieces'
      },
      {
        name: 'Media',
        path: '/media',
        icon: 'fas fa-video',
        description: 'Videos, interviews, and media appearances'
      }
    ]
  },
  {
    name: 'Insights',
    path: '/articles',
    subItems: [
      {
        name: 'Latest News',
        path: '/articles/news',
        icon: 'fas fa-newspaper',
        description: 'Stay updated with our latest developments'
      },
      {
        name: 'Blog Posts',
        path: '/articles/blog',
        icon: 'fas fa-blog',
        description: 'Insights and thoughts from our team'
      },
      {
        name: 'Press Releases',
        path: '/articles/press',
        icon: 'fas fa-bullhorn',
        description: 'Official announcements and updates'
      }
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
    subItems: []
  }
])

const handleNavigation = (path) => {
  activeDropdown.value = null
  isMobileMenuOpen.value = false
  navigateTo(path)
}

const toggleMobileSubmenu = (item) => {
  if (item.subItems && item.subItems.length) {
    item.isOpen = !item.isOpen
  } else {
    navigateTo(item.path)
    isMobileMenuOpen.value = false
  }
}
</script>

<style scoped>
nav {
  transform: translateY(0);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

nav.hidden {
  transform: translateY(-100%);
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
.group:hover .group-hover\:block {
  display: block;
}

.absolute {
  animation: dropdownFade 0.2s ease-out;
  transform-origin: top center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@keyframes dropdownFade {
  from {
    opacity: 0;
    transform: translateY(-10px) translateX(-50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(-50%) scale(1);
  }
}

.md\:hidden {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>