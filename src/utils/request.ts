/**
 * @Author fendy
 * @CreateTime 2022/7/5 08:52
 * @Description
 */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from 'axios'
import { message } from 'ant-design-vue'
import { useUserStoreWithOut } from "@/store/modules/user"
import { getToken, removeUserInfo } from "@/dexie"

export interface ApiResponse<T> extends AxiosResponse {
  data: {
    data: T
  };
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<any>;
  request?: any;
}

const store = useUserStoreWithOut()
const service = axios.create({
  baseURL: process.env.VITE_API_URL,
  timeout: 150000
})

service.interceptors.request.use(async (request) => {
  const token = store.token || await getToken()
  if (token && request.headers) {
    request.headers.Authorization = 'Bearer ' + token
  }
  return request
})

export interface ResponseDataType<T> {
  code: 0 | 1 | 401 | undefined
  data: T
  message: string
}

service.interceptors.response.use(
  <T>(response: ApiResponse<T>) => {
    console.log('response', response)
    const res = response.data as ResponseDataType<T>
    if (res.code && res.code === 1) {
      if (res.message) {
        message.success(res.message)
      }
      return res.data
    } else {
      message.error(res.message)
    }
  },
  (error) => {
    if (error.response.status === 401) {
      removeUserInfo()
    }
    // 请求错误弹窗
    message.error(error.response.data?.message || error.message)
  }
)

export default service
