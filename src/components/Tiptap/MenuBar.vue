<template>
  <div class="text-center">
    <template :key="index" v-for="(item, index) in menuItems">
      <div class="divider background-secondary-color" v-if="item.type === 'divider'"/>
      <input v-else-if="item.type==='color'"
          type="color"
          @input="setTextStyleColor"
          :value="textStyleColor">
      <EditorMenuItem v-else v-bind="item"/>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch, watchEffect } from "vue"
import { Editor } from "@tiptap/vue-3"
import EditorMenuItem from "@/components/Tiptap/EditorMenuItem.vue"

export interface EditorMenuItemProp {
  icon?: string
  title?: string
  action?: () => boolean
  isActive?: () => boolean
  type?: string
}
export default defineComponent({
  name: 'EditorMenuBar',
  components: {
    EditorMenuItem
  },
  props: {
    editor: {
      type: Object as PropType<Editor>,
      default: null
    }
  },
  setup(props) {
    const menuItems = ref<EditorMenuItemProp[]>([])
    watchEffect(() => {
      const editor = props.editor
      if (editor) {
        menuItems.value = [
          {
            icon: 'bold',
            title: 'Bold',
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive('bold')
          },
          {
            icon: 'italic',
            title: 'Italic',
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive('italic')
          },
          {
            icon: 'strikethrough',
            title: 'Strike',
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive('strike')
          },
          {
            icon: 'underline',
            title: 'Underline',
            action: () => editor.chain().focus().toggleUnderline().run(),
            isActive: () => editor.isActive('underline')
          },
          {
            type: 'color'
          },
          {
            type: 'divider'
          },
          {
            icon: 'paragraph',
            title: 'Paragraph',
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive('paragraph')
          },
          {
            icon: 'list-unordered',
            title: 'Bullet List',
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive('bulletList')
          },
          {
            icon: 'list-ordered',
            title: 'Ordered List',
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive('orderedList')
          },
          {
            icon: 'task-line',
            title: 'Task List',
            action: () => editor.chain().focus().toggleTaskList().run(),
            isActive: () => editor.isActive('taskList')
          },
          {
            type: 'divider'
          },
          {
            icon: 'double-quotes-l',
            title: 'Blockquote',
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive('blockquote')
          },
          {
            icon: 'separator',
            title: 'Horizontal Rule',
            action: () => editor.chain().focus().setHorizontalRule().run()
          },
          {
            type: 'divider'
          },
          {
            icon: 'text-wrap',
            title: 'Hard Break',
            action: () => editor.chain().focus().setHardBreak().run()
          },
          {
            icon: 'format-clear',
            title: 'Clear Format',
            action: () => editor.chain()
              .focus()
              .clearNodes()
              .unsetAllMarks()
              .run()
          },
          {
            type: 'divider'
          },
          {
            icon: 'arrow-go-back-line',
            title: 'Undo',
            action: () => editor.chain().focus().undo().run()
          },
          {
            icon: 'arrow-go-forward-line',
            title: 'Redo',
            action: () => editor.chain().focus().redo().run()
          }
        ]
      }
    })
    const textStyleColor = ref('#000000')
    const setTextStyleColor = (e: InputEvent) => {
      const color = (e.target as HTMLInputElement).value
      props.editor.chain().focus().setColor(color).run()
      textStyleColor.value = color
    }
    return { menuItems, textStyleColor, setTextStyleColor }
  }
})
</script>

<style lang="less" scoped>
.divider {
  width: 2px;
  height: 1.25rem;
  display: inline-block;
  margin-left: 0.5rem;
  margin-right: 0.75rem;
}
input[type="color"] {
  width: 30px;
}
</style>

