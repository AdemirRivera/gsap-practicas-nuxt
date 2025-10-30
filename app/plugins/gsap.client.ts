import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'

export default defineNuxtPlugin(() => {
  // Registrar plugins opcionales aquí si los usas
  // import { ScrollTrigger } from 'gsap/ScrollTrigger'
  // gsap.registerPlugin(ScrollTrigger)

  return {
    provide: {
      gsap
    }
  }
})
