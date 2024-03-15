<script setup>

import DarkMode from "@/components/DarkMode.vue";
</script>

<template>
<header class="w-100 fw-bold py-2" data-bs-theme="dark">
  <section class="container d-flex justify-content-center my-auto">
    <article class="my-auto" style="min-width: max-content">Finance Tracker</article>
    <article class="w-100 text-center my-auto">
      <nav class="m-auto d-flex justify-content-center">
        <ul class="d-flex list-unstyled my-auto">
          <li class="me-1 active">Dashboard</li>
          <li class="me-1">Dashboard</li>
          <li class="me-1">Dashboard</li>
        </ul>
      </nav>
    </article>
    <article class="my-auto" style="min-width: max-content">
      <dark-mode />
      Login
    </article>
  </section>
</header>
</template>

<style scoped>

</style>