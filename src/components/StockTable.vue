<script setup>
import {defineProps} from "vue";

const props = defineProps(['stocks'])


function is_sale_cooldown(time, type) {
  const now = new Date()
  const futureTime = new Date(time);
  switch (type) {
    case 't_sale':
      return futureTime < now
    case 't_1_sale':
      return futureTime.setDate(futureTime.getDate() + 1) < now
    case 't_2_sale':
      return futureTime.setDate(futureTime.getDate() + 2) < now
    case 'buy':
      return true
  }
}
</script>

<template>
<section>
  <article>
    <div v-for="(ms, index) in props.stocks" v-bind:key="index">
      <div class="row p-0 m-0 border-bottom">
        <div class="col-1">
          <img class="ratio ratio-1x1 share-logo" :src="ms.share.logo" :alt="ms.share.title" style="object-fit: cover">
        </div>
        <div class="col-1 my-auto ms-0">
          <p class="my-auto ms-0">{{ ms.share.code }}</p>
        </div>
        <div class="col my-auto ms-0">
          <p class="my-auto ms-0">{{ ms.share.title }}</p>
        </div>
        <div class="col-1 my-auto ms-0 text-center">
          <p class="my-auto ms-0">₺{{ ms.share.current_price }}</p>
        </div>
        <div class="col-1 my-auto ms-0 text-center">
          <p :class="'my-auto ms-0 ' + (ms.general_status.remaining_lots ? 'text-success':'')">{{ (ms.general_status.remaining_lots > 0 ? '+':'') + (ms.general_status.total_profit) }}₺</p>
        </div>
        <div class="col-1 my-auto ms-0 text-center" style="cursor: pointer" @click="ms.show_slots = !ms.show_slots">
          <p class="my-auto ms-0 position-relative">
              <span>
                {{ ms.general_status.remaining_lots }}
              </span>
            <span class="position-absolute text-info" style="font-size: 10px">
                <i class="fa-solid fa-expand" style="font-size: 6px"></i>
              </span>
          </p>
        </div>
        <div class="col-1">
          <img class="ratio ratio-1x1 share-logo" :src="ms.share.graphic" :alt="ms.share.title" style="object-fit: contain">
        </div>
        <div class="col-1 my-auto ms-0">
          <p class="my-auto ms-0">{{ ms.share.last_updated }}</p>
        </div>
        <div class="col-1 my-auto ms-0">
          <p class="my-auto ms-0 text-center" @click="ms.tracking = !ms.tracking">
            <span v-if="ms.tracking" class="text-warning"><i class="fa-solid fa-star"></i></span>
            <span v-else><i class="fa-regular fa-star"></i></span>
          </p>
        </div>
        <div class="col-1 my-auto ms-0 ">
          <span>
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
        </div>
        <div class="col-1 my-auto ms-0 ">
          <span>
            <i class="fa-solid fa-x"></i>
          </span>
        </div>
      </div>
      <div v-if="ms.show_slots">
        <div class="row">
          <div class="col-1">#</div>
          <div class="col-1">CODE</div>
          <div class="col-1">Quantity</div>
          <div class="col-1">Buy/Sale</div>
          <div class="col-1">Status</div>
          <div class="col-3">action date</div>
        </div>
        <div class="row" v-for="(slot, index) in ms.slots" v-bind:key="index">
          <div class="col-1">{{index + 1}}</div>
          <div class="col-1">SLOT</div>
          <div class="col-1">{{ slot.quantity }}</div>
          <div class="col-1">{{ slot.progres_type.toUpperCase().replaceAll('_', ' ') }}</div>
          <div class="col-1 text-success" v-if="is_sale_cooldown(slot.action_time, slot.progres_type)">cash</div>
          <div class="col-1" v-else>freeze</div>
          <div class="col-3">{{ slot.action_time }}</div>
        </div>
      </div>
    </div>

  </article>
</section>
</template>

<style scoped>
.share-logo{
  width: 36px!important;
  height: 36px!important;
  object-fit: cover;
}
</style>