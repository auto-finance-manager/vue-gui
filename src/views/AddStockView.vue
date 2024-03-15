<script setup>
import axios from 'axios'
import {onMounted, ref} from "vue";


const stock_list = ref([])

function fetchStockData(){
  axios.get('share')
  .then(response => {
    stock_list.value = response.data
  })
}

onMounted(()=>{
  fetchStockData()
})


</script>

<template>
  <section class="container d-flex h-100 pt-2 pt-md-5">
    <article class="justify-content-center align-content-center w-100 m-auto">
      <div class="card w-100">
        <div class="card-header">
          Add Share
        </div>
        <div class="card-body">
          <form>
            {{stock_list}}
          </form>
        </div>
        <div class="card-footer"></div>
      </div>
    </article>
  </section>
</template>

<style scoped>

</style>