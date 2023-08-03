<template>
  <div>
    <pre>
    {{ $store.state.user }}
  </pre>
    {{ user }}
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
