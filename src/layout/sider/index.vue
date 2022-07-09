<template>
  <LayoutSider v-model:collapsed="collapsed" collapsible>
    <div v-if="store.userInfo?.nickname" class="text-center mt-8">
      <img class="w-12 h-12 rounded-full mx-auto" :src="store.userInfo.avatar" alt="avatar">
      <p class="text-white text-ellipsis overflow-hidden px-2 pt-2">{{ store.userInfo.nickname }}</p>
    </div>
    <div v-else @click="handleLogin" class="text-center mt-8 cursor-pointer">
      <user-outlined style="color: white" class="mx-auto text-2xl" />
      <p class="text-white text-ellipsis overflow-hidden px-2 pt-2">未登录</p>
    </div>
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
import { UserOutlined } from '@ant-design/icons-vue'
import { useUserStore } from "@/store/modules/user"

const collapsed = ref(true)
const selectedKeys = ref(['/'])
const menus = reactive(routes)
const store = useUserStore()

console.log(store.token)

const handleLogin = () => {
  window.toggleLoginWindow()
}
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
