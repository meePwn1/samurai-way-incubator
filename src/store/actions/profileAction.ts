import { IProfile, ProfileActionTypes } from '../../types/IProfile.interface'

export const setUserProfile = (data: IProfile) =>
	({
		type: ProfileActionTypes.SET_PROFILE,
		data,
	} as const)
