import { IUser, UserAction, UserActionTypes } from '../../types/usersPage'

const initialState: IUser[] = []

export const usersReducer = (
	state = initialState,
	action: UserAction
): IUser[] => {
	switch (action.type) {
		case UserActionTypes.FOLLOW:
			return state.map(el =>
				el.id === action.payload ? { ...el, followed: true } : el
			)
		case UserActionTypes.UNFOLLOW:
			return state.map(el =>
				el.id === action.payload ? { ...el, followed: false } : el
			)
		case UserActionTypes.SET_USERS:
			return [...state, ...action.payload]
		default:
			return state
	}
}
