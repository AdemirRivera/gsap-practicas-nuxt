<template>
  <section class="hero">
    <span ref="title" class="title">
      Soy Dev. Hago contenido sobre desarrollo web
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

    char.addEventListener('mouseenter', charsHover)

    function charsHover () {
      gsap
        .timeline()
        .to(char, {
          y: () => gsap.utils.random(-50, 50),
          x: () => gsap.utils.random(-50, 50),
          rotate: () => gsap.utils.random(-90, 90),
          scale: () => gsap.utils.random(0.5, 1.5),
          duration: 0.5,
          ease: 'back.out',
          color: `rgb(
          ${gsap.utils.random(0, 255)},
          ${gsap.utils.random(0, 255)},
          ${gsap.utils.random(0, 255)}
        )`,
          onStart: () => {
            char.removeEventListener('mouseenter', charsHover)
          }
        })
        .to(char, {
          y: 0,
          x: 0,
          rotate: 1,
          scale: 1,
          color: '#000',
          delay: 1,
          duration: 0.5,
          ease: 'back.out',
          onComplete: () => {
            char.addEventListener('mouseenter', charsHover)
          }
        })
    }
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
