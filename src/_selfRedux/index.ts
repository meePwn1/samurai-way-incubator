type ObserverType = () => void

interface IDialogs {
	id: number
	name: string
}
interface IMessages {
	id: number
	message: string
}

interface IPost {
	id: number
	message: string
}
interface DialogsType {
	dialogsData: IDialogs[]
	messagesData: IMessages[]
	newMessageText: string
}
interface ProfileType {
	postData: IPost[]
	newPostText: string
}

interface IState {
	dialogsPage: DialogsType
	profilePage: ProfileType
}

interface IStore {
	_state: IState
	_observer: null | ObserverType
	getPosts: () => IState
	subscribe: (observer: () => void) => void
	dispatch: (action: any) => void
}

const store: IStore = {
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
				{ id: 1, message: 'Yo' },
				{ id: 2, message: 'Hi' },
				{ id: 3, message: 'how are you?' },
				{ id: 4, message: 'good thanks' },
			],
			newMessageText: '',
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
		// this._state.profilePage = profileReducer(this._state.profilePage, action)
		// this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		if (this._observer) {
			this._observer()
		}
	},
}
