import ReactDOM from 'react-dom'
import App from './App'
import { store } from './store'
import { RootState } from './store/reducers'

const renderEntireTree = (state: RootState) => {
	ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'))
}
renderEntireTree(store.getState())

store.subscribe(() => {
	renderEntireTree(store.getState())
})
