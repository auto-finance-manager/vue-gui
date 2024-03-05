<script setup>
import { onMounted, ref, watch } from 'vue';
import { useCookies } from "vue3-cookies";

const cookies = useCookies()

var date = new Date;
date.setDate(date.getDate() + 15);

const dark_mode_toggle = ref(false)

watch(dark_mode_toggle, (toggle)=>{
  if (toggle){
    document.body
    document.body.className = 'dark-mode'
    document.body.setAttribute("data-bs-theme", "dark");
    cookies.cookies.set('THEME-MODE', 'dark', date)
  } else {
    document.body.className = ''
    document.body.setAttribute("data-bs-theme", "light");
    cookies.cookies.set('THEME-MODE', 'light', date)
  }
})

onMounted(()=>{
  dark_mode_toggle.value = cookies.cookies.get('THEME-MODE') === 'dark'
})

</script>

<template>
<button class="btn rounded-circle" @click="dark_mode_toggle = !dark_mode_toggle">
  <span v-if="dark_mode_toggle"><i class="fa-solid fa-sun"></i></span>
  <span v-else><i class="fa-solid fa-moon"></i></span>
</button>
</template>

<style scoped>

</style>