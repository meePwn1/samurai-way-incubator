import {
	FollowAction,
	IUser,
	SetUsersAction,
	UnfollowAction,
	UserActionTypes,
} from '../../types/usersPage'

export const followAction = (id: number): FollowAction => {
	return {
		type: UserActionTypes.FOLLOW,
		payload: id,
	}
}

export const unfollowAction = (id: number): UnfollowAction => {
	return {
		type: UserActionTypes.UNFOLLOW,
		payload: id,
	}
}

export const setUsersAction = (users: IUser[]): SetUsersAction => {
	return {
		type: UserActionTypes.SET_USERS,
		payload: users,
	}
}
