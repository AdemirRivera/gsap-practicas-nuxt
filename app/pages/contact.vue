<template>
  <section>
    <div class="min-h-[100vh] bg-red-500"></div>
    <div class="min-h-[100vh] bg-blue-500">
      <div ref="box" class="h-[150px] w-[150px] bg-green-500"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const box = ref(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to(box.value, {
    x: 250,
    // duration: 4,
    scrollTrigger: {
      trigger: box.value,
      start: 'top 50%',
      end: 'bottom 40%',
      toggleClass: 'bg-yellow-500',
      markers: true,
      toggleActions: 'restart none none none',
      scrub: 4
      // scrub: true
      // toggleActions: 'restart pause resume reverse'
    }
  })
})
</script>

<style scoped>
.title {
  color: #000;
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
}
</style>
