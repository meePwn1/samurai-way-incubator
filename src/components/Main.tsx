import { FC } from 'react'
import { Route } from 'react-router-dom'
import { IState } from '../redux/state'
import Dialogs from './Dialogs/Dialogs'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'

type MainPropsType = {
	state: IState
	createPost: (message: string) => void
}

const Main: FC<MainPropsType> = ({ state, createPost }) => {
	return (
		<main className='main'>
			<Sidebar />
			<Route
				exact
				path='/profile'
				render={() => <Profile posts={state.profilePage.postData} createPost={createPost} />}
			/>
			<Route
				exact
				path='/dialogs'
				render={() => <Dialogs dialogs={state.dialogsPage.dialogsData} messages={state.dialogsPage.messagesData} />}
			/>
		</main>
	)
}

export default Main
