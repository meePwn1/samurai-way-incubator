import { ProfileActionTypes, ProfileAddPostAction, ProfileNewPostTextAction } from '../../types/profilePage'

export const createPost = (): ProfileAddPostAction => ({ type: ProfileActionTypes.ADD_POST })
export const updateNewPostText = (newText: string): ProfileNewPostTextAction => ({
	type: ProfileActionTypes.UPDATE_NEW_POST_TEXT,
	payload: newText,
})
