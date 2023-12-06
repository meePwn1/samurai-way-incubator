import { Dispatch, FC } from 'react'
import { Route } from 'react-router-dom'
import { RootState } from '../store/reducers'
import { CombinedActions } from '../types'
import Dialogs from './Dialogs/Dialogs'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'

type MainPropsType = {
	state: RootState
	dispatch: Dispatch<CombinedActions>
}

const Main: FC<MainPropsType> = ({ state, dispatch }) => {
	return (
		<main className='main'>
			<Sidebar />
			<Route exact path='/profile' render={() => <Profile profilePage={state.profilePage} dispatch={dispatch} />} />
			<Route exact path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch} />} />
		</main>
	)
}

export default Main
