import { ProfileActionTypes, ProfileAddPostAction, ProfileNewPostTextAction } from '../../types/profilePage'

export const createPostAction = (): ProfileAddPostAction => ({ type: ProfileActionTypes.ADD_POST })
export const updateNewPostTextAction = (newText: string): ProfileNewPostTextAction => ({
	type: ProfileActionTypes.UPDATE_NEW_POST_TEXT,
	payload: newText,
})
