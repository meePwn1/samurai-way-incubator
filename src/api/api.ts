import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/'
const config: AxiosRequestConfig<any> = {
	withCredentials: true,
}

export const apiAxios = axios.create({
	baseURL: BASE_URL,
	...config,
})
