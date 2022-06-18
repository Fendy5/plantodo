<template>
  <SubMenu :key="menu.path" v-if="menu.children.length > 1">
    <template #title>
      <span>
        <svg-icon :name="menu.meta.icon" />
        <span>{{ menu.meta.title }}</span>
      </span>
    </template>
    <MenuItem v-for="i in menu.children" :key="`${menu.path}+${i.path}`">
      <router-link :to="i.path" >{{ i.meta }}</router-link>
    </MenuItem>
  </SubMenu>
  <MenuItem :key="`${menu.path}+${menu.children[0].path}`" @click="goTo(menu.path)" v-else-if="menu.children.length===1">
    <svg-icon class="anticon" :name="menu.children[0].meta.icon" />
    <span>{{ menu.children[0].meta.title }}</span>
  </MenuItem>
</template>

<script lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { MenuItem, SubMenu } from "ant-design-vue"
import { defineComponent, PropType } from "vue"
import { useRouter } from 'vue-router'
import { AntdIconProps } from "@ant-design/icons-vue/lib/components/AntdIcon"
import SvgIcon from "@/components/SvgIcon/index.vue"
export type MenuProp = RouteRecordRaw & {
  meta: {
    title: string,
    icon?: AntdIconProps
  }
}

export default defineComponent({
  name: 'BaseMenuItem',
  props: {
    menu: {
      type: Object as PropType<MenuProp>,
      require: true
    }
  },
  components: {
    SvgIcon,
    MenuItem,
    SubMenu
  },
  setup() {
    const router = useRouter()
    const goTo = (path: string) => {
      router.push(path)
    }
    return { goTo }
  }
})
</script>

<style lang="scss" scoped>

</style>
