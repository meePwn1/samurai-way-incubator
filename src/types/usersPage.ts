export enum UserActionTypes {
	FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW',
	SET_USERS = 'SET_USERS',
}
export interface FollowAction {
	type: UserActionTypes.FOLLOW
	payload: number
}
export interface UnfollowAction {
	type: UserActionTypes.UNFOLLOW
	payload: number
}
export interface SetUsersAction {
	type: UserActionTypes.SET_USERS
	payload: IUser[]
}
export type UserAction = FollowAction | UnfollowAction | SetUsersAction

export interface IUser {
	name: string
	id: number
	uniqueUrlName: null | string
	photos: {
		small: null | string
		large: null | string
	}
	status: null | string
	followed: boolean
}
