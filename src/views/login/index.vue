<template>
  <div class="login">
    <div class="drag select-none flex justify-center items-center text-3xl py-8">
      <svg-icon class="text-primary" name="logo" />
      <h3 class="mb-0">用户登录</h3>
    </div>
    <a-form :model="formState" name="basic" class="login-form" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="邮箱" name="email" :rules="[{ required: true, message: '请输入邮箱' }]">
        <a-input v-model:value="formState.email" >
          <template #prefix>
            <MailOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
        <a-input-password v-model:value="formState.password" >
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 6, span: 12 }">
        <a-button class="login-form-button" type="primary" html-type="submit">登录</a-button>
<!--        <a-button type="primary" html-type="submit">重置</a-button>-->
      </a-form-item>
      <p>{{ store.userInfo.nickname }}</p>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { LockOutlined, MailOutlined } from '@ant-design/icons-vue'
import { LoginState } from "@/types/user.d"
import { getUserInfoApi, loginApi } from "@/apis/user"
import { setToken } from "@/dexie"
import { useUserStore } from "@/store/modules/user"

export default defineComponent({
  components: {
    MailOutlined,
    LockOutlined
  },
  setup() {
    const formState = reactive<LoginState>({
      email: 'zf@fendy5.cn',
      password: '8901223abc'
    })

    const store = useUserStore()
    const onFinish = async (values: LoginState) => {
      const token = (await loginApi(values)).token
      store.token = token
      const userInfo = await getUserInfoApi()
      store.userInfo = userInfo
      await setToken(userInfo, token)
      window.toggleLoginWindow(store.userInfo)
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    return {
      store,
      formState,
      onFinish,
      onFinishFailed
    }
  }
  })

</script>

<style lang="less" scoped>
.login {
  //width: 500px;
  //height: 560px;
  //background-color: #fff;
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%,-50%);
  //border-radius: 8px;
  //padding: 32px;
}
.login-form-button {
  width: 100%;
}
</style>
