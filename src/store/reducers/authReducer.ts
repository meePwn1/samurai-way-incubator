import {
	AuthActionTypes,
	AuthActions,
	IAuth,
	IEntityAuth,
} from '../../types/IAuth'

const initialState: IEntityAuth = {
	data: {} as IAuth,
	isAuth: false,
}

export const authReducer = (
	state = initialState,
	action: AuthActions
): IEntityAuth => {
	switch (action.type) {
		case AuthActionTypes.SET_AUTH_DATA:
			return { ...state, data: action.data, isAuth: true }
		default:
			return state
	}
}
