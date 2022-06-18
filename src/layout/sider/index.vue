<template>
  <LayoutSider v-model:collapsed="collapsed" collapsible>
    <div class="logo" />
    <Menu v-model:selectedKeys="selectedKeys" theme="dark"  mode="inline">
      <template v-for="i in menus" :key="i.path">
        <BaseMenuItem :menu="i" />
      </template>
      <MenuItem key="2">
        <desktop-outlined />
        <span>Option 2</span>
      </MenuItem>
      <SubMenu key="sub1">
        <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
        </template>
        <MenuItem key="4">Bill</MenuItem>
        <MenuItem key="5">Alex</MenuItem>
      </SubMenu>
      <SubMenu key="sub2">
        <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
        </template>
        <MenuItem key="6">Team 1</MenuItem>
        <MenuItem key="8">Team 2</MenuItem>
      </SubMenu>
      <MenuItem key="9">
        <file-outlined />
        <span>File</span>
      </MenuItem>
    </Menu>
  </LayoutSider>
</template>

<script setup lang="ts">
import { DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue'
import { LayoutSider, Menu, MenuItem, SubMenu } from "ant-design-vue"
import { ref, reactive } from 'vue'
import BaseMenuItem from "@/layout/sider/item.vue"
import { routes } from '@/router'

const collapsed = ref(false)
const selectedKeys = ref(['1'])
const menus = reactive(routes)
console.log(menus)
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
