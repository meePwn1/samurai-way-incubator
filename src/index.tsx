import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import state, { createPost } from './redux/state'

ReactDOM.render(
	<BrowserRouter>
		<App state={state} createPost={createPost} />
	</BrowserRouter>,
	document.getElementById('root')
)
