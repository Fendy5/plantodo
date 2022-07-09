<template>
  <div class="flex flex-col items-stretch min-h-screen">
    <div class="pt-6 px-6 border-b-2 border-primary-color pb-3 bg-white drag select-none">
      <WeekSwitcher @change="handleWeekChange" :today="today" />
      <DaySwitcher @change="handleTodayChange" :current-day="today" :current-week="currentWeeks" />
    </div>
    <keep-alive>
      <div @click="handleEditorFocus"  class="mt-6 px-6 flex-grow">
        <Tiptap @change="handleContentChange" ref="editorRef" />
      </div>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import WeekSwitcher from "@/views/home/components/WeekSwitcher.vue"
import DaySwitcher, { DayProp } from "@/views/home/components/DaySwitcher.vue"
import { ref } from "vue"
import _ from 'lodash'
import { getCurrentWeekDates, getToday, shiftDate } from "@/utils/calendar"
import { createOrUpdateContent, getContentByDay } from "@/dexie"

const editorRef = ref()
const handleEditorFocus = () => {
  editorRef.value?.focusEditor()
}

const today = ref(getToday())

const currentWeeks = ref<DayProp[]>(getCurrentWeekDates(getToday()))

const handleWeekChange = (day: number) => {
  // today.value = shiftDate(today.value, day)
  handleTodayChange(shiftDate(today.value, day))
  currentWeeks.value = getCurrentWeekDates(today.value)
}

const handleTodayChange = async (day: string) => {
  today.value = day
  console.log('day', day)
  const plan = await getContentByDay(day)
  console.log('plan:', plan)
  editorRef.value.loadContent(plan ? plan.content : '')
}

// const handleContentChange = _.debounce((content: string) => {
//   console.log('handleContentChange', content)
//   createOrUpdateContent(content, today.value)
// }, 1000)
const handleContentChange = (content: string) => {
  console.log('handleContentChange', content)
  createOrUpdateContent(content, today.value)
}

</script>
