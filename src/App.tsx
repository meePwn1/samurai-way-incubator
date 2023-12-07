import { FC } from 'react'
import './assets/scss/App.scss'
import Header from './components/Header/Header'
import Main from './components/Main'

const App: FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Main />
		</div>
	)
}

export default App
