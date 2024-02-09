import { Dispatch } from 'redux'
import { ProfileService } from '../../services/ProfileService'
import { IProfile, ProfileActionTypes } from '../../types/IProfile.interface'
import { errorHandler } from '../../utils/errorHandler'
import { CombinedActions } from '../store'
import { setAppErrorAction, setAppStatusAction } from './appAction'

export const setUserProfile = (data: IProfile) =>
	({
		type: ProfileActionTypes.SET_PROFILE,
		data,
	} as const)

export const fetchUsersProfile =
	(userID: string) => async (dispatch: Dispatch<CombinedActions>) => {
		dispatch(setAppStatusAction('loading'))
		dispatch(setAppErrorAction(null))
		try {
			const res = await ProfileService.getProfile(userID)
			dispatch(setUserProfile(res.data))
			dispatch(setAppStatusAction('succeeded'))
		} catch (error) {
			errorHandler(error, dispatch)
		}
	}
