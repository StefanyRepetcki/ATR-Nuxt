<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <NuxtLink to="/produtos/produto-a">Produtos A</NuxtLink>
    <NuxtLink to="/produtos/produto-b">Produtos B</NuxtLink>
    <div v-for="product in products" :key="product.id" class="border-b border-gray py-3">
    {{ product.title }}
    </div>
    <!-- <pre>{{ products  }}</pre> -->
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    return {
      products,
    }
  },
}
</script>
