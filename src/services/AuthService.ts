import { apiAxios } from '../api/api'
import { IAuth } from '../types/IAuth.interface'

const AUTH = 'auth'

export class AuthService {
	static me() {
		return apiAxios.get<IResponse>(`${AUTH}/me`)
	}
	static login() {}
}

interface IResponse {
	resultCode: number
	messages: string[]
	data: IAuth
}
