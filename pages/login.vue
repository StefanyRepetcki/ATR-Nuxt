<template>
  <div>Login</div>
</template>

<script>
export default {
  layout: "auth",
  head() {
    return {
      title: "Login",
      meta: [
        { hid: "title", name: "title", content: "Login" },
        {
          hid: "description",
          name: "description",
          content: "Login para entrar na empresa",
        },
      ],
    };
  },
};
</script>
