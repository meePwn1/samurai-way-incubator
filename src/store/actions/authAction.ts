import { Dispatch } from 'redux'
import { AuthService, IAuthPayload } from '../../services/AuthService'
import { AuthActionTypes, IAuth } from '../../types/IAuth.interface'
import { errorHandler } from '../../utils/errorHandler'
import { CombinedActions } from '../store'
import { setAppErrorAction, setAppStatusAction } from './appAction'

export const setAuthDataAction = (data: IAuth) =>
	({
		type: AuthActionTypes.SET_AUTH_DATA,
		data,
	} as const)
export const loginAction = (userID: number) =>
	({
		type: AuthActionTypes.LOGIN,
		userID,
	} as const)
export const logoutAction = () => ({ type: AuthActionTypes.LOGOUT } as const)

export const authMeThunk =
	() => async (dispatch: Dispatch<CombinedActions>) => {
		try {
			const res = await AuthService.me()
			if (!res.data.resultCode) {
				dispatch(setAuthDataAction(res.data.data))
			}
		} catch (error) {
			errorHandler(error, dispatch)
		}
	}
export const loginThunk =
	(payload: IAuthPayload) => async (dispatch: Dispatch<CombinedActions>) => {
		try {
			const res = await AuthService.login(payload)
			if (!res.data.resultCode) {
				dispatch(loginAction(res.data.data.userID))
			} else {
				dispatch(setAppErrorAction(res.data.messages[0]))
				dispatch(setAppStatusAction('failed'))
			}
		} catch (error) {
			errorHandler(error, dispatch)
		}
	}

export const logoutThunk =
	() => async (dispatch: Dispatch<CombinedActions>) => {
		try {
			const res = await AuthService.logout()
			if (!res.data.resultCode) {
				dispatch(logoutAction())
			} else {
				dispatch(setAppErrorAction(res.data.messages[0]))
				dispatch(setAppStatusAction('failed'))
			}
		} catch (error) {
			errorHandler(error, dispatch)
		}
	}
