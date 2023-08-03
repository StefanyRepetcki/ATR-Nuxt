<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <NuxtLink to="/produtos/produto-a">Produtos A</NuxtLink>
    <NuxtLink to="/produtos/produto-b">Produtos B</NuxtLink>
    <div
      v-for="product in products"
      :key="product.id"
      class="border-b border-gray py-3"
    >
      {{ product.title }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // executado antes do componente ser criado
  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    return {
      products,
    };
  },
  head() {
    return {
      title: "Produtos",
      meta: [
        { hid: "title", name: "title", content: "Produtos" },
        {
          hid: "description",
          name: "description",
          content: "Todos os produtos da empresa",
        },
      ],
    };
  },
};
</script>
