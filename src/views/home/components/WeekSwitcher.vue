<template>
  <div class="flex justify-between mb-4">
    <div class="font-bold text-2xl">{{ getCurrentMonth }}</div>
    <div class="flex items-center">
      <svg-icon @click="changeWeek(-7)" class="cursor-pointer font-bold text-primary" name="left-arrow" />
      <span class="mx-2 text-xl"> <span class="text-secondary">Week</span> {{ getCurrentWeek }}</span>
      <svg-icon @click="changeWeek(+7)" class="cursor-pointer font-bold text-primary" name="right-arrow" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed } from "vue"
import { formatDate } from "@/utils/calendar"

const props = defineProps({
  today: {
    type: String,
    required: true
  }
})

const getCurrentWeek = computed(() => {
  return formatDate(props.today, 'WW')
})

const getCurrentMonth = computed(() => {
  return formatDate(props.today, 'MMMM yyyy')
})

const emit = defineEmits(['change'])
const changeWeek = (day: number) => {
  emit('change', day)
}

</script>
