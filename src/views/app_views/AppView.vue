<script setup>
import HeaderComponent from "@/components/headers/HeaderComponent.vue";
</script>

<template>
  <header-component />
  <hr class="py-0 my-0">
  <main class="container m-auto fw-normal">
    <article>
      <RouterView />
    </article>
  </main>
</template>
