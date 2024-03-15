<script setup>

import {ref} from "vue";
import StockTable from "@/components/StockTable.vue";
import StockAppend from "@/components/StockAppend.vue";

const data = ref([
  {
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
        "progres_type": "buy",
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
    "general_status": {
      "total_profit": 2894.06,
      "remaining_lots": 9
    },
    "tracking": true,
    "owner": 1,
    // extras
    show_slots:false
  }
])

</script>

<template>
  <section class="d-flex">
    <article class="justify-content-center m-auto w-100">
      <StockAppend />
      <StockTable :stocks="data"/>
    </article>
  </section>
</template>

<style scoped>

</style>