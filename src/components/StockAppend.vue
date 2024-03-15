<script setup>

</script>

<template>
  <section>
    <div class="d-flex my-2">
      <div class="w-100"></div>
      <div class="">
        <router-link
            class="btn btn-sm btn-primary rounded-circle d-flex p-2"
            :to="{
              name:'add-my-stocks'
            }"
        >
          <i class="fa-solid fa-plus"></i>
        </router-link>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>