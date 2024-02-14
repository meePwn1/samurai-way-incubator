import {
	AuthAction,
	AuthActionTypes,
	IAuth,
	IEntityAuth,
} from '../../types/IAuth.interface'

const initialState: IEntityAuth = {
	data: {} as IAuth,
	isAuth: false,
}

export const authReducer = (
	state = initialState,
	action: AuthAction
): IEntityAuth => {
	switch (action.type) {
		case AuthActionTypes.SET_AUTH_DATA:
			return { ...state, data: action.data, isAuth: true }
		case AuthActionTypes.LOGIN:
			return {
				...state,
				isAuth: true,
				data: { ...state.data, id: action.userID },
			}
		case AuthActionTypes.LOGOUT:
			return { ...state, isAuth: false }
		default:
			return state
	}
}
