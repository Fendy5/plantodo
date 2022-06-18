<script setup lang="ts">
  import { Layout, LayoutContent } from 'ant-design-vue'
  import Sidebar from "@/layout/sider/index.vue"
</script>

<template>
  <Layout style="min-height: 100vh">
    <Sidebar />
    <Layout>
      <LayoutContent>
        <router-view />
      </LayoutContent>
    </Layout>
  </Layout>
</template>

<style lang="less" scoped>
.a {
  color: #c71a1a;
}
</style>
