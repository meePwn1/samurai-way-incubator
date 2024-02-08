import {
	IProfile,
	ProfileAction,
	ProfileActionTypes,
} from '../../types/IProfile.interface'

const initialState = {} as IProfile

export const profileReducer = (
	state = initialState,
	action: ProfileAction
): IProfile => {
	switch (action.type) {
		case ProfileActionTypes.SET_PROFILE:
			return { ...state, ...action.data }
		default:
			return state
	}
}
