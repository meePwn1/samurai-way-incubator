type ObserverType = () => void

interface ActionType {}

export interface IDialogs {
	id: number
	name: string
}
export interface IMessages {
	id: number
	message: string
	senderID: number
	recipientID: number
}

export interface IPost {
	id: number
	message: string
}
interface DialogsType {
	dialogsData: IDialogs[]
	messagesData: IMessages[]
}
export interface ProfileType {
	postData: IPost[]
	newPostText: string
}

export interface IState {
	dialogsPage: DialogsType
	profilePage: ProfileType
}

export interface IStore {
	_state: IState
	_observer: null | ObserverType
	getPosts: () => IState
	subscribe: (observer: () => void) => void
	dispatch: (action: any) => void
}

export const store: IStore = {
	_state: {
		dialogsPage: {
			dialogsData: [
				{ id: 1, name: 'Dmitry' },
				{ id: 2, name: 'Sasha' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Valera' },
				{ id: 5, name: 'Viktor' },
			],
			messagesData: [
				{ id: 1, message: 'Yo', senderID: 1, recipientID: 2 },
				{ id: 2, message: 'Hi', senderID: 2, recipientID: 1 },
				{ id: 3, message: 'how are you?', senderID: 1, recipientID: 2 },
				{ id: 4, message: 'good thanks', senderID: 2, recipientID: 1 },
			],
		},
		profilePage: {
			postData: [
				{ id: 1, message: 'hi, how are you?' },
				{ id: 2, message: 'its my first post!' },
			],
			newPostText: '',
		},
	},
	_observer: null,
	getPosts() {
		return this._state
	},

	subscribe(observer) {
		this._observer = observer
	},

	dispatch(action) {
		if (action.type === 'ADD-POST') {
			const currentId = this._state.profilePage.postData[this._state.profilePage.postData.length - 1].id
			const newPost = {
				id: currentId + 1,
				message: this._state.profilePage.newPostText,
			}
			this._state.profilePage.newPostText = ''
			this._state.profilePage.postData.push(newPost)
			if (this._observer) {
				this._observer()
			}
		} else if (action.type === 'UPDATE-CHANGE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.text
			if (this._observer) {
				this._observer()
			}
		}
	},
}

export default store
