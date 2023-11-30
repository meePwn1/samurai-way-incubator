import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

const renderEntireTree = () => {
	ReactDOM.render(
		<App state={store.getPosts()} dispatch={store.dispatch.bind(store)} />,
		document.getElementById('root')
	)
}
renderEntireTree()

store.subscribe(renderEntireTree)
