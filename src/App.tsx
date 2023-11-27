import { FC } from 'react'
import './assets/scss/App.scss'
import Header from './components/Header/Header'
import Main from './components/Main'
import { IState } from './redux/state'

type AppPropsType = {
	state: IState
	createPost: (message: string) => void
}

const App: FC<AppPropsType> = ({ state, createPost }) => {
	return (
		<div className='wrapper'>
			<Header />
			<Main state={state} createPost={createPost} />
		</div>
	)
}

export default App
