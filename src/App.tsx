import { FC } from 'react'
import './assets/scss/App.scss'
import HeaderContainer from './components/Header/HeaderContainer'
import Main from './components/Main'

const App: FC = () => {
	return (
		<div className='wrapper'>
			<HeaderContainer />
			<Main />
		</div>
	)
}

export default App
