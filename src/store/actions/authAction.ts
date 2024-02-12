import { Dispatch } from 'redux'
import { AuthService } from '../../services/AuthService'
import { AuthActionTypes, IAuth } from '../../types/IAuth.interface'
import { errorHandler } from '../../utils/errorHandler'
import { CombinedActions } from '../store'

export const setAuthDataAction = (data: IAuth) =>
	({
		type: AuthActionTypes.SET_AUTH_DATA,
		data,
	} as const)

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
