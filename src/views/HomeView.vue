<script setup>
import { ref } from 'vue'
import HeaderComponent from "@/components/headers/HeaderComponent.vue";

const data = ref( {
  "id": 1,
  "share": {
    "code": "EREGL",
    "title": "EREGLI DEMIR CELIK",
    "logo": "https://static.doviz.com/images/stock/EREGL.png",
    "graphic": "https://static.doviz.com/images/sparkline/EREGL.svg?t=1709720864",
    "current_price": "45.48",
    "last_updated": "13:11"
  },
  "slots": [
    {
      "id": 1,
      "progres_type": "t_sale",
      "price": "124.50",
      "quantity": 1,
      "action_time": "2024-03-06T11:00:41.556147Z"
    },
    {
      "id": 2,
      "progres_type": "t_1_sale",
      "price": "250.00",
      "quantity": 12,
      "action_time": "2024-03-06T11:00:41.556147Z"
    },
    {
      "id": 3,
      "progres_type": "t_sale",
      "price": "1453.00",
      "quantity": 2,
      "action_time": "2024-03-06T11:00:41.556147Z"
    }
  ],
  "tracking": true,
  "owner": 1
})

console.log(data)
</script>

<template>
  <header-component />
  <hr class="py-0 my-0">
  <main class="container m-auto fw-normal">
    <article>

    </article>
  </main>
</template>
