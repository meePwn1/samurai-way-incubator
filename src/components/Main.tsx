import { FC } from 'react'
import { Route } from 'react-router-dom'
import DialogsContainer from './Dialogs/DialogsContainer'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'
import UsersContainer from './Users/UsersContainer'

const Main: FC = () => {
	return (
		<main className='main'>
			<Sidebar />
			<Route exact path='/profile' render={() => <Profile />} />
			<Route exact path='/users' render={() => <UsersContainer />} />
			<Route exact path='/dialogs' render={() => <DialogsContainer />} />
		</main>
	)
}

export default Main
