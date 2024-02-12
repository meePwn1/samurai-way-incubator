import { Route } from 'react-router-dom'
import DialogsContainer from './Dialogs/DialogsContainer'
import Login from './Login/Login'
import ProfileContainer from './Profile/ProfileContainer'
import Sidebar from './Sidebar/Sidebar'
import UsersContainer from './Users/UsersContainer'

const Main = () => {
	return (
		<main className='main'>
			<Sidebar />
			<Route path='/profile/:userID?' render={() => <ProfileContainer />} />
			<Route exact path='/users' render={() => <UsersContainer />} />
			<Route exact path='/dialogs' render={() => <DialogsContainer />} />
			<Route exact path='/login' render={() => <Login />} />
			<Route exact path='/' render={() => <ProfileContainer />} />
		</main>
	)
}

export default Main
