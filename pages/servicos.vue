<template>
  <div>
    <nav aria-label="Breadcrumb">
      <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <NuxtLink to="/marketing/desenvolvimento-de-sites"
       class="mr-2 text-sm font-medium text-gray-900">Desenvolvimento de sites </NuxtLink>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <NuxtLink to="/marketing/marketing-digital" class="mr-2 text-sm font-medium text-gray-900">Marketing Digital </NuxtLink>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Serviços</a>
        </li>
      </ol>
    </nav>
    <Loading  v-if="loading" />
    <div v-else class="bg-white py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
        </div>
        <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li v-for="service in services" :key="service.id">
            <div class="flex items-center gap-x-6">
              <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ service.name }}</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <NuxtChild />
  </div>
</template>
<script>
import Loading from '../components/Loading.vue';
export default {
  components: {
    Loading
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "title", name: "title", content: "Serviços" },
        {
          hid: "description",
          name: "description",
          content: "Serviços oferecidos pela empresa",
        },
      ],
    };
  },
  data() {
    return {
      services: [],
      title: "",
      loading: true,
    };
  },
  // Executed before the component is created
  async asyncData({ $axios }) {
    const services = await $axios.$get("https://jsonplaceholder.typicode.com/users?_limit=10");
    return {
      services,
    };
  },
  created() {
    this.getTitle();
  },
  methods: {
    getTitle() {
      setTimeout(() => {
        this.title = "Serviços";
        this.loading = false;
      }, 300);
    },
    getBreadcrumbLink(route) {
      // Replace this with your logic to generate breadcrumb links
      return `/marketing/${route}`;
    },
  },
  computed: {
    breadcrumbs() {
      // Replace this with your logic to generate breadcrumbs
      return [
        { label: "Desenvolvimento de sites", to: this.getBreadcrumbLink("desenvolvimento-de-sites") },
        { label: "Marketing Digital", to: this.getBreadcrumbLink("marketing-digital") },
        { label: "Serviços", to: "#" },
      ];
    },
  },
};
</script>
