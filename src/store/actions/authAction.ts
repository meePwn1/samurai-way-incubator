import { AuthActionTypes, IAuth } from '../../types/IAuth'

export const setAuthDataAction = (data: IAuth) =>
	({
		type: AuthActionTypes.SET_AUTH_DATA,
		data,
	} as const)
