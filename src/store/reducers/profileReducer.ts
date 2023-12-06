import { ProfileAction, ProfileActionTypes, ProfileState } from '../../types/profilePage'

const initialState: ProfileState = {
	postData: [
		{ id: 1, message: 'hi, how are you?' },
		{ id: 2, message: 'its my first post!' },
	],
	newPostText: '',
}

export const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {
	switch (action.type) {
		case ProfileActionTypes.ADD_POST: {
			const currentId = state.postData[state.postData.length - 1].id
			const newPost = {
				id: currentId + 1,
				message: state.newPostText,
			}
			state.newPostText = ''
			state.postData.push(newPost)
			return state
		}
		case ProfileActionTypes.UPDATE_NEW_POST_TEXT: {
			if (action.payload) {
				state.newPostText = action.payload
			} else {
				state.newPostText = ''
			}
			return state
		}
		default:
			return state
	}
}
