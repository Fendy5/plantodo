<template>
  <LayoutSider v-model:collapsed="collapsed" collapsible>
    <div class="logo" />
    <Menu v-model:selectedKeys="selectedKeys" theme="dark"  mode="inline">
      <template v-for="i in menus" :key="i.path">
        <BaseMenuItem :menu="i" />
      </template>
    </Menu>
  </LayoutSider>
</template>

<script setup lang="ts">
import { LayoutSider, Menu } from "ant-design-vue"
import { ref, reactive } from 'vue'
import BaseMenuItem from "@/layout/sider/item.vue"
import { routes } from '@/router'

const collapsed = ref(false)
const selectedKeys = ref(['/'])
const menus = reactive(routes)
</script>
<style lang="less" scoped>
.logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}
.ml-10 {
  margin-left: 10px;
}

.site-layout .site-layout-background {
    background: rgba(219, 17, 17, 0.64) !important;
}
[data-theme='dark'] .site-layout {
  .site-layout-background {
    background: #c71a1a !important;
  }
}
</style>
