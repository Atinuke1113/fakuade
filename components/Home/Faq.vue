<template>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
        >
          Frequently Asked Questions
        </h2>
  
        <div class="max-w-3xl mx-auto space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-white rounded-lg shadow-sm overflow-hidden"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="index * 100"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium text-lg text-gray-800">{{ faq.question }}</span>
              <svg 
                class="w-5 h-5 transform transition-transform duration-300"
                :class="{ 'rotate-180': faq.isOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              v-show="faq.isOpen"
              class="transition-all duration-300"
            >
              <div class="px-6 pb-4 text-gray-600">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const faqs = ref([
    {
      question: "What is the Seun Fakuade Scholarship Fund?",
      answer: "The Seun Fakuade Scholarship Fund is a program designed to support deserving students in their pursuit of higher education by providing financial assistance and mentorship opportunities.",
      isOpen: false
    },
    {
      question: "Who is eligible to apply?",
      answer: "The scholarship is open to students who demonstrate academic excellence, leadership potential, and financial need. Specific eligibility criteria will be outlined in the application process.",
      isOpen: false
    },
    {
      question: "What does the scholarship cover?",
      answer: "The scholarship provides financial support for tuition, books, and other educational expenses. Recipients also gain access to our mentorship program.",
      isOpen: false
    },
    {
      question: "When can I apply for the scholarship?",
      answer: "Applications typically open at the beginning of each academic year. Specific dates and deadlines will be announced on our website and social media channels.",
      isOpen: false
    },
    {
      question: "How are scholars selected?",
      answer: "Selection is based on a comprehensive review of academic achievement, leadership potential, financial need, and personal essays. Shortlisted candidates may be invited for interviews.",
      isOpen: false
    }
  ])
  
  const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
  }
  </script>
  
  <style scoped>
  .rotate-180 {
    transform: rotate(180deg);
  }
  </style>