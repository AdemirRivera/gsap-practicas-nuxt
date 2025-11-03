<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <header
      class="bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow"
    >
      <!-- Logo / Nombre -->
      <h1 ref="logo" class="text-xl font-semibold">Mi App</h1>

      <!-- Menu -->
      <nav ref="menu" class="flex space-x-4">
        <NuxtLink
          v-for="(item, i) in links"
          :key="i"
          :to="item.to"
          class="px-3 py-2 rounded hover:bg-gray-700"
          active-class="bg-gray-700"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </header>

    <!-- Contenido principal -->
    <main class="flex-1 bg-gray-100 p-8">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const logo = ref(null)
const menu = ref(null)

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre mí', to: '/about' },
  { label: 'Contacto', to: '/contact' }
]

onMounted(async () => {
  await nextTick()

  if (!menu.value || !logo.value) return

  const navItems = menu.value.querySelectorAll('a')

  const tl = gsap.timeline({ defaults: {} })

  tl.fromTo(
    logo.value,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.5 }
  )

  tl.fromTo(
    navItems,
    { opacity: 0, y: -100 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2
    }
  )
})
</script>
