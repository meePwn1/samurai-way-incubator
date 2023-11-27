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
interface ProfileType {
	postData: IPost[]
}

export interface IState {
	dialogsPage: DialogsType
	profilePage: ProfileType
}

const state: IState = {
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
	},
}

export const createPost = (post: string) => {
	const newPost = { id: 3, message: post }
	state.profilePage.postData.push(newPost)
}

export default state
