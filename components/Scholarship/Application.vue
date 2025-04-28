<template>
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <!-- Form Header -->
          <div class="text-center mb-12"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :visible="{ opacity: 1, y: 0 }">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scholarship Application</h2>
            <p class="text-gray-600">Please fill out the form below with accurate information</p>
          </div>
  
          <!-- Application Form -->
          <form @submit.prevent="submitForm" class="bg-white rounded-2xl shadow-lg p-8">
            <!-- Personal Information -->
            <div class="space-y-6"
                 v-motion
                 :initial="{ opacity: 0, x: -20 }"
                 :visible="{ opacity: 1, x: 0 }">
              <h3 class="text-xl font-semibold border-b pb-3">Personal Information</h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 mb-2">First Name *</label>
                  <input type="text" v-model="form.firstName" required
                         class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
                </div>
                <div>
                  <label class="block text-gray-700 mb-2">Last Name *</label>
                  <input type="text" v-model="form.lastName" required
                         class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
                </div>
              </div>
  
              <div>
                <label class="block text-gray-700 mb-2">Email Address *</label>
                <input type="email" v-model="form.email" required
                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
              </div>
  
              <div>
                <label class="block text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" v-model="form.phone" required
                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
              </div>
            </div>
  
            <!-- Academic Information -->
            <div class="mt-12 space-y-6"
                 v-motion
                 :initial="{ opacity: 0, x: -20 }"
                 :visible="{ opacity: 1, x: 0 }">
              <h3 class="text-xl font-semibold border-b pb-3">Academic Information</h3>
              
              <div>
                <label class="block text-gray-700 mb-2">Current/Previous Institution *</label>
                <input type="text" v-model="form.institution" required
                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
              </div>
  
              <div>
                <label class="block text-gray-700 mb-2">Field of Study *</label>
                <input type="text" v-model="form.fieldOfStudy" required
                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
              </div>
  
              <div>
                <label class="block text-gray-700 mb-2">Current GPA *</label>
                <input type="number" step="0.01" min="0" max="4" v-model="form.gpa" required
                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
              </div>
            </div>

            <!-- Purpose Statement -->
<div class="mt-12 space-y-6"
     v-motion
     :initial="{ opacity: 0, x: -20 }"
     :visible="{ opacity: 1, x: 0 }">
  <h3 class="text-xl font-semibold border-b pb-3">Purpose Statement</h3>
  
  <div>
    <label class="block text-gray-700 mb-2">Why are you applying for this scholarship? *</label>
    <p class="text-sm text-gray-500 mb-3">Please explain your motivation, goals, and how this scholarship will help you achieve them (minimum 300 words)</p>
    <textarea 
      v-model="form.purpose"
      rows="8"
      required
      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
      placeholder="Share your story and aspirations..."
    ></textarea>
    
  </div>
</div>
  
            <!-- Documents Upload -->
            <div class="mt-12 space-y-6"
                 v-motion
                 :initial="{ opacity: 0, x: -20 }"
                 :visible="{ opacity: 1, x: 0 }">
              <h3 class="text-xl font-semibold border-b pb-3">Required Documents</h3>
  
              <div class="space-y-6">
                <div v-for="(doc, index) in requiredDocs" :key="index" class="relative">
                  <label class="block text-gray-700 mb-2">{{ doc.label }} *</label>
                  <div class="relative border-2 border-dashed rounded-lg p-4 hover:border-accent transition-colors">
                    <input type="file" 
                           :accept="doc.accept"
                           @change="handleFileUpload($event, doc.name)"
                           class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                    <div class="text-center">
                      <i class="fas fa-cloud-upload-alt text-2xl text-gray-400 mb-2"></i>
                      <p class="text-sm text-gray-500">
                        {{ form.files[doc.name] ? form.files[doc.name].name : `Drop your ${doc.label.toLowerCase()} here or click to upload` }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Submit Button -->
            <div class="mt-12"
                 v-motion
                 :initial="{ opacity: 0, y: 20 }"
                 :visible="{ opacity: 1, y: 0 }">
              <button type="submit" 
                      class="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-800 transition-colors">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    fieldOfStudy: '',
    gpa: '',
    files: {}
  })
  
  const requiredDocs = [
    {
      name: 'passport',
      label: 'Passport Photograph',
      accept: '.pdf,.doc,.docx'
    },
    {
      name: 'record',
      label: 'Academic Record',
      accept: '.pdf'
    },
    {
      name: 'recommendation',
      label: 'Letter of Recommendation',
      accept: '.pdf,.doc,.docx'
    },
  ]
  
  const handleFileUpload = (event, docName) => {
    const file = event.target.files[0]
    if (file) {
      form.value.files[docName] = file
    }
  }
  
  const submitForm = async () => {
    // Handle form submission here
    console.log('Form submitted:', form.value)
  }
  </script>