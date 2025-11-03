<template>
  <section class="hero">
    <span ref="title" class="title">
      Soy Ademir. Hago contenido sobre desarrollo web
    </span>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SplitType from 'split-type'
import { gsap } from 'gsap'

const title = ref(null)
let splitInstance = null

const initAnimation = async () => {
  splitInstance = new SplitType(title.value, { types: 'chars, words' })

  splitInstance.chars.forEach((char, index) => {
    let tl = gsap.timeline({ defaults: {} })

    tl.from(char, {
      y: () => gsap.utils.random(-150, 150),
      x: () => gsap.utils.random(-300, 300),
      rotate: () => gsap.utils.random(-360, 360),
      scale: () => gsap.utils.random(0, 2),
      opacity: 0,
      duration: 0.75,
      ease: 'back.out',
      delay: index * 0.05
    })

    tl.from(
      char,
      {
        color: `rgb(
      ${gsap.utils.random(0, 255)},
      ${gsap.utils.random(0, 255)},
      ${gsap.utils.random(0, 255)}
      )`,
        duration: 1
      },
      '-=0.25'
    )
  })

  // gsap.from(splitInstance.chars, {
  //   opacity: 0,
  //   y: () => gsap.utils.random(-150, 150),
  //   x: () => gsap.utils.random(-300, 300),
  //   rotate: () => gsap.utils.random(-360, 360),
  //   scale: () => gsap.utils.random(0, 2),
  //   stagger: 0.05,
  //   ease: 'back.out(1.7)',
  //   duration: 1.5
  // })
}

onMounted(() => {
  initAnimation()
})
</script>

<style scoped>
.title {
  color: #000;
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
}
</style>
