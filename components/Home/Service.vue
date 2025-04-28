<template>
  <div class="w-[600px] bg-[#FFD700] rounded-lg overflow-hidden shadow-xl">
    <div class="p-8 space-y-10">
      <div v-for="(item, index) in items" 
           :key="index"
           class="relative"
           v-motion
           :initial="{ opacity: 0, x: -50 }"
           :enter="{ opacity: 1, x: 0 }"
           :delay="index * 300">
        <!-- Line -->
        <div class="absolute left-[30px] top-14 w-0.5 h-full bg-black/10"
             v-if="index !== items.length - 1"></div>

        <!-- Content -->
        <div class="flex items-start gap-6">
          <!-- Number -->
          <div class="flex-shrink-0 w-[60px]">
            <span class="text-3xl font-bold text-black/30">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>

          <!-- Text Content -->
          <div class="space-y-2 pt-1"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :enter="{ opacity: 1, y: 0 }"
               :delay="(index * 300) + 200">
            <h3 class="text-xl font-bold text-black">{{ item.title }}</h3>
            <div class="w-12 h-0.5 bg-black/20"></div>
            <p class="text-black/70 text-sm leading-relaxed max-w-md">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    title: 'Breifs',
    description: 'Qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.'
  },
  {
    title: 'Breifs',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
  },
  {
    title: 'Breifs',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.'
  }
]
</script>

<style scoped>
.w-[600px] {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}
</style>