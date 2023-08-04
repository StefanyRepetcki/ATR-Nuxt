<template>
  <div>
    <nav class="bg-gray-800" aria-label="Global">
      <div class="container mx-auto flex items-center h10 space-x-4 mb-10">
        <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/a-empresa">A Empresa</NuxtLink>
        <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/servicos">Serviços</NuxtLink>
        <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/produtos">Produtos</NuxtLink>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink to="/login" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></NuxtLink>
      </div>
      </div>
    </nav>
    <div class="container mx-auto">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
