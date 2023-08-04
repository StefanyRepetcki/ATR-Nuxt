<template>
  <div class="bg-white">
    <nav aria-label="Breadcrumb" class="px-4 py-6 mx-auto max-w-2xl">
      <ol role="list" class="flex items-center space-x-2">
        <li class="flex items-center">
          <a href="/produtos" class="mr-2 text-sm font-medium text-gray-900">Produtos</a>
          <svg class="h-5 w-4 text-gray-300" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true">
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"></path>
          </svg>
        </li>
        <li class="flex items-center">
          <a href="#" class="mr-2 text-sm font-medium text-gray-900">Produtos {{ this.product  }}</a>
          <svg class="h-5 w-4 text-gray-300" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true">
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"></path>
          </svg>
        </li>
      </ol>
    </nav>

    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <!-- Main image -->
      <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="object-center object-cover w-full h-full">
      </div>
      <!-- Additional images -->
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." class="object-center object-cover w-full h-full">
        </div>
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." class="object-center object-cover w-full h-full">
        </div>
      </div>
      <!-- Featured image -->
      <div class="aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4 sm:overflow-hidden sm:rounded-lg">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="object-center object-cover w-full h-full">
      </div>
    </div>

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
        <p class="text-3xl font-medium text-gray-900 mt-4">$192</p>

        <!-- Reviews -->
        <div class="mt-6 flex items-center space-x-2">
          <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
          </svg>
          <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
          </svg>
          <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
          </svg>
          <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
          </svg>
          <span class="text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</span>
        </div>

        <form class="mt-10">
          <!-- Colors -->
          <div>
            <h3 class="text-sm font-medium text-gray-900">Color</h3>
            <fieldset class="mt-4 flex space-x-3">
              <label class="relative flex items-center cursor-pointer">
                <input type="radio" name="color-choice" value="White" class="sr-only">
                <span class="w-8 h-8 rounded-full border border-black border-opacity-10 bg-white"></span>
              </label>
              <label class="relative flex items-center cursor-pointer">
                <input type="radio" name="color-choice" value="Gray" class="sr-only">
                <span class="w-8 h-8 rounded-full border border-black border-opacity-10 bg-gray-200"></span>
              </label>
              <label class="relative flex items-center cursor-pointer">
                <input type="radio" name="color-choice" value="Black" class="sr-only">
                <span class="w-8 h-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
              </label>
            </fieldset>
          </div>

          <!-- Sizes -->
          <div class="mt-10">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium text-gray-900">Size</h3>
              <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
            </div>
            <fieldset class="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
              <label class="group relative flex items-center justify-center cursor-not-allowed rounded-md border py-3 px-4 text-sm font-medium uppercase bg-gray-50 text-gray-200">
                <input type="radio" name="size-choice" value="XXS" disabled class="sr-only">
                <span>XXS</span>
                <span class="absolute -inset-px rounded-md border-2 border-gray-200" aria-hidden="true">
                  <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                    <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke"></line>
                  </svg>
                </span>
              </label>
              <!-- ... Rest of the size options ... -->
            </fieldset>
          </div>

          <button type="submit" class="mt-10 flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
        </form>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <!-- Description and details -->
        <div>
          <h3 class="text-base font-medium text-gray-900">Description</h3>
          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Highlights</h3>
          <div class="mt-4">
            <ul role="list" class="list-disc space-y-2 pl-4 text-sm text-gray-600">
              <li>Hand cut and sewn locally</li>
              <li>Dyed with our proprietary colors</li>
              <li>Pre-washed & pre-shrunk</li>
              <li>Ultra-soft 100% cotton</li>
            </ul>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>
          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  head() {
    return {
      title: `Produto ${this.product}`,
      meta: [
        { hid: "title", name: "title", content:  `Produto ${this.product}`},
        {
          hid: "description",
          name: "description",
          content:   `Descrição produto ${this.product}`,
        },
      ],
    };
  },
  created() {
    this.product = this.$route.params.id;
  },
};
</script>
