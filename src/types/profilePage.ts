export interface PostData {
	id: number
	message: string
}

export interface ProfileState {
	postData: PostData[]
	newPostText: string
}

export enum ProfileActionTypes {
	ADD_POST = 'ADD-POST',
	UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
}

export interface ProfileAddPostAction {
	type: ProfileActionTypes.ADD_POST
}
export interface ProfileNewPostTextAction {
	type: ProfileActionTypes.UPDATE_NEW_POST_TEXT
	payload: string
}

export type ProfileAction = ProfileAddPostAction | ProfileNewPostTextAction
