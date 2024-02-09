import { setAuthDataAction } from '../store/actions/authAction'

export enum AuthActionTypes {
	SET_AUTH_DATA = 'SET_AUTH_DATA',
}
export interface IAuth {
	id: number
	email: string
	login: string
}

export interface IEntityAuth {
	data: IAuth
	isAuth: boolean
}

export type AuthAction = ReturnType<typeof setAuthDataAction>
