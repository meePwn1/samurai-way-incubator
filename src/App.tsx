import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/App.scss'
import Header from './components/Header/Header'
import Main from './components/Main'
import { IState } from './redux/store'

type AppPropsType = {
	state: IState
	dispatch: any
}

const App: FC<AppPropsType> = ({ state, dispatch }) => {
	return (
		<div className='wrapper'>
			<BrowserRouter>
				<Header />
				<Main state={state} dispatch={dispatch} />
			</BrowserRouter>
		</div>
	)
}

export default App
