<template>
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :visible="{ opacity: 1, y: 0 }">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scholarship Criteria</h2>
            <p class="text-lg text-gray-600"> To be eligible for the ‘Seun Fakuade Scholarship, applicants must meet the following criteria:</p>
          </div>
  
          <!-- Criteria Cards -->
          <div class="grid md:grid-cols-2 gap-10">
            <div v-for="(criterion, index) in criteria" 
                 :key="index"
                 class="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                 v-motion
                 :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
                 :visible="{ opacity: 1, x: 0 }"
                 :delay="index * 100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <i :class="criterion.icon + ' text-accent text-xl'"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-3 text-gray-900">{{ criterion.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ criterion.description }}</p>
                  
                  <ul v-if="criterion.requirements" class="mt-4 space-y-2">
                    <li v-for="(req, idx) in criterion.requirements" 
                        :key="idx"
                        class="flex items-center gap-2 text-gray-600">
                      <i class="fas fa-check-circle text-accent text-sm"></i>
                      <span>{{ req }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const criteria = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Academic Excellence',
      description: 'Applicants should have a proven track record of academic excellence, as evidenced by their academic records and recommendation letters. New students must show exceptional promise as demonstrated by their previous academic performance, results, and high recommendations',
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Financial Need',
      description: 'The scholarship is specifically targeted towards individuals from disadvantaged backgrounds who lack the financial means to pursue higher education. Demonstrated potential: Applicants should exhibit a high level of potential and promise in their chosen field of study, showcasing their passion and dedication.',
    },
    {
      icon: 'fas fa-users',
      title: 'State of Origin',
      description: 'Applicants must be an indigene of Ekiti State. Possession of a valid means of identification (e.g. National ID card, Voter’s card, International passport, Driver’s license, etc.)',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Demonstrated Potential',
      description: 'Applicants should exhibit a high level of potential and promise in their chosen field of study, showcasing their passion and dedication.',
    }
  ]
  
  const timeline = [
    {
      date: 'January 15',
      title: 'Applications Open'
    },
    {
      date: 'March 31',
      title: 'Application Deadline'
    },
    {
      date: 'April 15',
      title: 'Shortlist Announced'
    },
    {
      date: 'May 1',
      title: 'Final Selection'
    }
  ]
  </script>