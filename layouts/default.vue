<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="fixed w-full bg-black/80 backdrop-blur-lg z-50 shadow-sm">
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Main Navigation -->
      <div class="flex items-center justify-between h-16 sm:h-20">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img src="/images/logo2.png" alt="logo" class="w-24 h-12" />
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center">
          <div v-for="(item, index) in menuItems" 
               :key="index" 
               class="group relative"
               @mouseenter="activeDropdown = item.name"
               @mouseleave="activeDropdown = null">
            <NuxtLink :to="item.path" 
                     class="px-6 py-6 text-white hover:text-orange-600 transition-all">
              {{ item.name }}
            </NuxtLink>

            <!-- Dropdown Panel - Only show if subItems exists -->
            <div v-if="item.subItems && item.subItems.length && activeDropdown === item.name"
                 class="absolute top-full left-0 w-screen bg-white -ml-[50vw] left-1/2 transform">
              <div class="container mx-auto px-4 py-6">
                <div class="grid grid-cols-4 gap-6">
                  <NuxtLink v-for="subItem in item.subItems"
                           :key="subItem.name"
                           :to="subItem.path"
                           @click="handleNavigation(subItem.path)"
                           class="p-4 hover:bg-gray-50 rounded-lg group transition-all duration-300">
                    <div class="flex items-center space-x-4">
                      <i :class="subItem.icon" class="text-2xl text-gray-400 group-hover:text-orange-600"></i>
                      <div>
                        <h3 class="text-gray-800 font-medium group-hover:text-orange-600">{{ subItem.name }}</h3>
                        <p class="text-sm text-gray-500">{{ subItem.description }}</p>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" 
                class="md:hidden text-white">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" 
           class="md:hidden bg-white absolute left-0 right-0 top-full">
        <div class="px-4 py-2">
          <div v-for="(item, index) in menuItems" :key="index">
            <button @click="toggleMobileSubmenu(item)"
                    class="w-full px-4 py-3 flex justify-between items-center text-gray-800 hover:text-orange-600">
              {{ item.name }}
              <i v-if="item.subItems && item.subItems.length" class="fas fa-chevron-down"></i>
            </button>
            <div v-if="item.subItems && item.subItems.length && item.isOpen" 
                 class="bg-gray-50 px-4 py-2">
              <NuxtLink v-for="subItem in item.subItems"
                        :key="subItem.name"
                        :to="subItem.path"
                        class="block py-2 px-4 text-gray-600 hover:text-orange-600">
                {{ subItem.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

    <!-- Spacer -->
    <div class="h-16 sm:h-20"></div>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-[#0B1120] text-white py-12">
      <div class="container mx-auto px-4">
        <!-- Logo and Navigation -->
        <div class="flex flex-col md:flex-row justify-between items-center mb-8">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2">
             <img 
                src="/images/logo2.png" 
                alt="logo" 
                class="w-36 h-24 py-4"
              />
    </NuxtLink>

          <!-- Navigation Links -->
          <div class="flex flex-wrap justify-center gap-6">
            <NuxtLink v-for="item in navItems" 
                      :key="item.path"
                      :to="item.path"
                      class="hover:text-orange-600 transition-colors">
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Social Links and Copyright -->
        <div class="flex flex-col items-center mt-12 pt-8 border-t border-gray-700">
          <div class="flex space-x-6 mb-6">
            <a href="https://twitter.com" target="_blank" class="text-white hover:text-orange-600 transition-colors">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://facebook.com" target="_blank" class="text-white hover:text-orange-600 transition-colors">
              <i class="fab fa-facebook text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="text-white hover:text-orange-600 transition-colors">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://github.com" target="_blank" class="text-white hover:text-orange-600 transition-colors">
              <i class="fab fa-github text-2xl"></i>
            </a>
          </div>
          <p class="text-center">© Copyright {{ new Date().getFullYear() }}, All Rights Reserved by Seun Fakuade</p>
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
    subItems: [] // Empty array instead of undefined
  },
  {
    name: 'About',
    path: '/about',
    subItems: [] // Empty array instead of undefined
  },
  {
    name: 'Foundations',
    path: '/about',
    subItems: [
      {
        name: 'Scholarship',
        path: '/scholarship',
        icon: 'fa fa-graduation-cap',
        description: 'Seun Fakuade Scholarship Fund'
      },
      {
        name: 'Youth Empowerment',
        path: '/youth/empowerment',
        icon: 'fas fa-users',
        description: 'Investing in the next generation through digital skills development'
      },
      {
        name: 'Youth Innovation',
        path: '/youth/innovation',
        icon: 'fas fa-globe',
        description: 'Embracing cutting-edge technologies and creative solutions '
      }
    ]
  },
 
  {
    name: 'Thought Leadership',
    path: '/gallery',
    subItems: [] // Empty array instead of undefined
  },
  {
    name: 'Articles',
    path: '/new',
    subItems: [] // Empty array instead of undefined
  },
  {
    name: 'Contact',
    path: '/contact',
    subItems: [] // Empty array instead of undefined
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
.group:hover .group-hover\:block {
  display: block;
}

/* Dropdown Animation */
.absolute {
  animation: dropdownFade 0.3s ease-out;
}

@keyframes dropdownFade {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile Menu Animation */
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
</style>