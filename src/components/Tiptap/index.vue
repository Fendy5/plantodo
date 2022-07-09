<template>
  <EditorMenuBar :editor="editor" />
  <EditorContent :editor="editor" />
</template>

<script lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import EditorMenuBar from "@/components/Tiptap/MenuBar.vue"
import { Placeholder } from "@tiptap/extension-placeholder"
import { TaskList } from "@tiptap/extension-task-list"
import { TaskItem } from "@tiptap/extension-task-item"
import { Underline } from "@tiptap/extension-underline"
import { Color } from "@tiptap/extension-color"
import { TextStyle } from "@tiptap/extension-text-style"
import { defineComponent, nextTick, onMounted, watchEffect } from "vue"
import { getToday } from "@/utils/calendar"
import { getContentByDay } from "@/dexie"

export default defineComponent({
  components: { EditorMenuBar, EditorContent },
  emits: [ 'change' ],
  setup(props, { emit }) {
    const editor = useEditor({
      content: '',
      extensions: [
        StarterKit, Placeholder.configure({ placeholder: '输入点什么' }),TaskList,
        TaskItem.configure({ nested: true }), Underline, Color, TextStyle
      ]
    })
    watchEffect(() => {
      emit('change', editor.value?.getHTML())
    })
    const loadContent = (content: string) => {
      if (content) {
        editor.value?.commands.setContent(content)
      } else {
        editor.value?.commands.setContent('<p></p>')
      }
    }
    onMounted(() => {
      nextTick(async () => {
        const plan = await getContentByDay(getToday())
        if (plan) {
          loadContent(plan.content)
        }
      })
    })
    const focusEditor = () => {
      editor.value?.chain().focus().run()
    }
    return { editor, focusEditor, loadContent }
  }
})
</script>

