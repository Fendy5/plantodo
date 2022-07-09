/**
 * @Author fendy
 * @CreateTime 2022/7/7 11:33
 * @Description
 */
import { useUserStoreWithOut } from "@/store/modules/user"
import { getUserInfoApi } from "@/apis/user"
import { getToken } from "@/dexie"

export const getUserInfo = async () => {
  const store = useUserStoreWithOut()
  const token = store.token || await getToken()
  if (token) {
    const userInfo = await getUserInfoApi()
    console.log('getUserInfo', userInfo)
    store.userInfo = userInfo
  }
}

