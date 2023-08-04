<template>
  <div>
    <nav aria-label="Breadcrumb">
      <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Produtos</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
      </ol>
    </nav>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../../components/ProductCard';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  async fetch() {
    try {
      const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=8');
      this.products = response.map((product, index) => ({
        id: index + 1,
        name: product.title,
        price: `$${Math.floor(Math.random() * 100)}`, // Replace this with the actual price field from your API
        image: `https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-0${index + 1}.jpg`, // Replace this with the actual image URL from your API
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  head() {
    return {
      title: 'Produtos',
      meta: [
        { hid: 'title', name: 'title', content: 'Produtos' },
        { hid: 'description', name: 'description', content: 'Todos os produtos da empresa' },
      ],
    };
  },
};
</script>
