/**
 * @Author fendy
 * @CreateTime 2022/7/5 08:51
 * @Description
 */
import request from "@/utils/request"
import { LoginState, UserInfoProp } from "@/types/user.d"

export const getUserInfoApi = () => {
  return request.get<UserInfoProp>('/api/v1/getUserInfo')
}

export const loginApi = (data: LoginState) => {
  return request.post<{ token: string }>('/api/v1/login', data)
}
