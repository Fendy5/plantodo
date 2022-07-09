/**
 * @Author fendy
 * @CreateTime 2022/7/7 21:26
 * @Description
 */
import { defineStore } from "pinia"
import { store } from "@/store"

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => {
    return {
      token: '',
      userInfo: {
        id: 1,
        nickname: '',
        avatar: ''
      }
    }
  },
  getters: {},
  actions: {}
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}
