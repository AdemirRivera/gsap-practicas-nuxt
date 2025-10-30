<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <header
      class="bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow"
    >
      <!-- Logo / Nombre -->
      <h1 ref="logo" class="text-xl font-semibold">Mi App</h1>

      <!-- Menu -->
      <nav class="flex space-x-4">
        <NuxtLink
          to="/"
          class="px-3 py-2 rounded hover:bg-gray-700 transition"
          active-class="bg-gray-700"
        >
          Inicio
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="px-3 py-2 rounded hover:bg-gray-700 transition"
          active-class="bg-gray-700"
        >
          Sobre mí
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="px-3 py-2 rounded hover:bg-gray-700 transition"
          active-class="bg-gray-700"
        >
          Contacto
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
import { ref, onMounted } from 'vue'

const { $gsap } = useNuxtApp()
const logo = ref(null)

onMounted(() => {
  $gsap.from(logo.value, {
    duration: 1,
    backgroundColor: 'yellow',
    color: 'red',
    x: -100
  })
})
</script>
