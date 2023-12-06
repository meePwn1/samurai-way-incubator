import { Dispatch, FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/App.scss'
import Header from './components/Header/Header'
import Main from './components/Main'
import { RootState } from './store/reducers'
import { CombinedActions } from './types'

type AppPropsType = {
	state: RootState
	dispatch: Dispatch<CombinedActions>
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
