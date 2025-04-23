<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="fixed w-full bg-black/80 backdrop-blur-lg z-50 shadow-sm">
      <div class="container mx-auto px-4 sm:px-6">
  <div class="flex items-center justify-between h-16 sm:h-20">
    <!-- Logo -->
    <NuxtLink to="/" class="flex items-center space-x-2">
     <h4 class="h-16 xs:h-18 w-auto text-accent text-xl mt-10">SEUN FAKUADE</h4>
    </NuxtLink>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center space-x-1 lg:space-x-4">
      <NuxtLink v-for="item in navItems" 
                :key="item.path"
                :to="item.path"
                class="px-3 lg:px-4 py-2 text-xl lg:text-base text-white hover:text-accent rounded-lg transition-colors"
                :class="{ 'text-accent bg-accent/8': isCurrentPath(item.path) }">
        {{ item.name }}
      </NuxtLink>
    </div>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" 
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu">
      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>

  <!-- Mobile Navigation -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform -translate-y-2 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform -translate-y-2 opacity-0"
  >
    <div v-if="isMenuOpen" 
         class="md:hidden py-2 border-t"
         @click.self="closeMenu">
      <div class="space-y-1">
        <NuxtLink v-for="item in navItems" 
                  :key="item.path"
                  :to="item.path"
                  class="block px-4 py-3 text-base text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                  :class="{ 'text-accent bg-accent/5': isCurrentPath(item.path) }"
                  @click="closeMenu">
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </transition>
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
          <NuxtLink to="/" class="text-2xl font-bold text-accent mb-6 md:mb-0">
            SEUN FAKUADE
          </NuxtLink>

          <!-- Navigation Links -->
          <div class="flex flex-wrap justify-center gap-6">
            <NuxtLink v-for="item in navItems" 
                      :key="item.path"
                      :to="item.path"
                      class="hover:text-accent transition-colors">
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Social Links and Copyright -->
        <div class="flex flex-col items-center mt-12 pt-8 border-t border-gray-700">
          <div class="flex space-x-6 mb-6">
            <a href="https://twitter.com" target="_blank" class="text-white hover:text-accent transition-colors">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://facebook.com" target="_blank" class="text-white hover:text-accent transition-colors">
              <i class="fab fa-facebook text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="text-white hover:text-accent transition-colors">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://github.com" target="_blank" class="text-white hover:text-accent transition-colors">
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
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SCHOLARSHIP', path: '/scholarship' },
  { name: 'THOUGHT LEADERSHIP', path: '/thoughtleadership' },
  { name: 'NEWS&BLOG', path: '/new' },
  { name: 'CONTACT', path: '/contact' }
]

const isCurrentPath = (path) => route.path === path

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close mobile menu when route changes
watch(route, closeMenu)

// Close mobile menu when screen size changes to desktop
onMounted(() => {
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) closeMenu()
  })
})
</script>