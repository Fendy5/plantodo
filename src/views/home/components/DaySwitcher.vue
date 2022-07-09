<template>
  <div class="flex justify-between mx-auto max-w-md no-drag">
    <div @click="changeDay($event, i)" class="text-center cursor-pointer" :key="i.day" v-for="i in props.currentWeek">
      <div :class="i.isoDate===props.currentDay?'text-primary':'text-secondary'" >{{ i.weekDay }}</div>
      <div :class="i.isoDate===props.currentDay?'active':''" class="pt-2 font-bold text-md w-10 h-10">{{ i.day }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"

export interface DayProp {
  isoDate: string
  day: string
  weekDay: string
}

const props = defineProps({
  currentWeek: {
    type: Array as PropType<DayProp[]>,
    required: true
  },
  currentDay: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['change'])
const changeDay = (event: PointerEvent, day: DayProp) => {
  emit('change', day.isoDate)
}
</script>
<style lang="css" scoped>
.active {
  @apply border-2 text-primary border-primary-color rounded-full;
}
</style>
