<template>
  <section class="hero">
    <h1 ref="title" class="title">Contacto</h1>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SplitType from 'split-type'
import { gsap } from 'gsap'

const title = ref(null)
let splitInstance = null

onMounted(() => {
  splitInstance = new SplitType(title.value, { types: 'chars, words' })

  gsap.from(splitInstance.chars, {
    opacity: 0,
    y: 40,
    stagger: 0.05,
    ease: 'back.out(1.7)',
    duration: 0.8
  })
})

onBeforeUnmount(() => {
  if (splitInstance) splitInstance.revert()
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
