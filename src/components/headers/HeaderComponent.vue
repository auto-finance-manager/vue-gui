<script setup>

import DarkMode from "@/components/DarkMode.vue";
</script>

<template>
<header class="w-100 fw-bold py-2" data-bs-theme="dark">
  <section class="container d-flex justify-content-center my-auto">
    <article class="my-auto" style="min-width: max-content">Finance Tracker</article>
    <article class="w-100 text-center my-auto"></article>
    <article class="my-auto" style="min-width: max-content">
      <dark-mode />
      Login
    </article>
  </section>
</header>
</template>

<style scoped>

</style>