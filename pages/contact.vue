<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="relative overflow-hidden min-h-[30vh] bg-cover bg-center bg-no-repeat" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/gallery2.jpg');">
        <div class="container mx-auto px-4">
          <div class="text-center"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :visible="{ opacity: 1, y: 0 }">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 mt-10">Get in Touch</h1>
            <p class="text-xl text-gray-300">We'd love to hear from you. Let's start a conversation.</p>
          </div>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section class="py-20 -mt-10">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <!-- Contact Information -->
              <div class="bg-white rounded-2xl shadow-lg p-8"
                   v-motion
                   :initial="{ opacity: 0, x: -50 }"
                   :visible="{ opacity: 1, x: 0 }">
                <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div class="space-y-6">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-map-marker-alt text-orange-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg">Address</h3>
                      <p class="text-gray-600"> Phase 1, Adeyeye Ibidunmoye Building, Ekiti State Government Secretariat, Ado Ekiti.</p>
                    </div>
                  </div>
  
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-phone text-orange-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg">Phone</h3>
                      <p class="text-gray-600">On Request</p>
                    </div>
                  </div>
  
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-envelope text-orange-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg">Email</h3>
                      <p class="text-gray-600">seunfakuade@fakuade.com</p>
                    </div>
                  </div>
                </div>
  
                <!-- Social Media Links -->
                <div class="mt-12">
                  <h3 class="font-semibold text-lg mb-4">Follow Us</h3>
                  <div class="flex gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
  
              <!-- Contact Form -->
              <div class="bg-white rounded-2xl shadow-lg p-8"
                   v-motion
                   :initial="{ opacity: 0, x: 50 }"
                   :visible="{ opacity: 1, x: 0 }">
                <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
                
                <form @submit.prevent="submitForm" class="space-y-6">
                  <div>
                    <label class="block text-gray-700 mb-2">Full Name *</label>
                    <input type="text" v-model="form.name" required
                           class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent">
                  </div>
  
                  <div>
                    <label class="block text-gray-700 mb-2">Email Address *</label>
                    <input type="email" v-model="form.email" required
                           class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent">
                  </div>
  
                  <div>
                    <label class="block text-gray-700 mb-2">Subject *</label>
                    <input type="text" v-model="form.subject" required
                           class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent">
                  </div>
  
                  <div>
                    <label class="block text-gray-700 mb-2">Message *</label>
                    <textarea v-model="form.message" rows="6" required
                             class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"></textarea>
                  </div>
  
                  <button type="submit" 
                          class="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const submitForm = async () => {
    
    console.log('Form submitted:', form.value)
  }
  </script>