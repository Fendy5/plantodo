import axios, { Axios, AxiosPromise, AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosInstance extends Axios {
    (config: AxiosRequestConfig): AxiosPromise;
    (url: string, config?: AxiosRequestConfig): AxiosPromise;
    get<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T>;
    post<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>;
  }
}
