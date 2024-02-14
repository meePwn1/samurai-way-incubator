import {
	loginAction,
	logoutAction,
	setAuthDataAction,
} from '../store/actions/authAction'

export enum AuthActionTypes {
	SET_AUTH_DATA = 'SET_AUTH_DATA',
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT',
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

export type AuthAction =
	| ReturnType<typeof setAuthDataAction>
	| ReturnType<typeof loginAction>
	| ReturnType<typeof logoutAction>
