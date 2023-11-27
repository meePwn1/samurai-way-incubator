import { Route } from 'react-router-dom'
import Dialogs from './Dialogs/Dialogs'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'

const Main = () => {
	return (
		<main className='main'>
			<Sidebar />
			<Route exact path='/profile' component={Profile} />
			<Route exact path='/dialogs' component={Dialogs} />
		</main>
	)
}

export default Main
