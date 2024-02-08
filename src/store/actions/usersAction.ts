import { IUser, UserActionTypes } from '../../types/IUser.interface'

export const followAction = (id: number) =>
	({
		type: UserActionTypes.FOLLOW,
		id,
	} as const)

export const unfollowAction = (id: number) =>
	({
		type: UserActionTypes.UNFOLLOW,
		id,
	} as const)

export const setUsersAction = (users: IUser[]) =>
	({
		type: UserActionTypes.SET_USERS,
		users,
	} as const)

export const setCurrentPageAction = (page: number) =>
	({ type: UserActionTypes.SET_CURRENT_PAGE, page } as const)

export const setTotalPagesAction = (value: number) =>
	({ type: UserActionTypes.SET_TOTAL_PAGES, value } as const)

export const setPageSizeAction = (value: number) =>
	({ type: UserActionTypes.SET_PAGE_SIZE, value } as const)
export const addFollowProgressAction = (userID: number) =>
	({ type: UserActionTypes.ADD_FOLLOW_PROGRESS, userID } as const)
export const deleteFollowProgressAction = (userID: number) =>
	({ type: UserActionTypes.DELETE_FOLLOW_PROGRESS, userID } as const)
