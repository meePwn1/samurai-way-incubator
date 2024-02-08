import { setUserProfile } from '../store/actions/profileAction'

export enum ProfileActionTypes {
	SET_PROFILE = 'SET_PROFILE',
}

export interface IProfile {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: IContacts
	photos: IPhotos
}

interface IContacts {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}
interface IPhotos {
	small: string
	large: string
}

export type ProfileAction = ReturnType<typeof setUserProfile>
