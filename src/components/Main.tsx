import { FC } from 'react'
import { Route } from 'react-router-dom'
import { IState } from '../redux/store'
import Dialogs from './Dialogs/Dialogs'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'

type MainPropsType = {
	state: IState
	dispatch: any
}

const Main: FC<MainPropsType> = ({ state, dispatch }) => {
	return (
		<main className='main'>
			<Sidebar />
			<Route exact path='/profile' render={() => <Profile profilePage={state.profilePage} dispatch={dispatch} />} />
			<Route
				exact
				path='/dialogs'
				render={() => <Dialogs dialogs={state.dialogsPage.dialogsData} messages={state.dialogsPage.messagesData} />}
			/>
		</main>
	)
}

export default Main
