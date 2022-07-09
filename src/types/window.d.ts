/**
 * @Author fendy
 * @CreateTime 2022/7/6 16:25
 * @Description
 */

import { UserInfoProp } from "@/types/user"

declare global {
  interface Window {
    toggleLoginWindow: (userInfo?: UserInfoProp) => void
  }
}
