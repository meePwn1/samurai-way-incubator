import Content from './Content'
import Sidebar from './Sidebar'

const Main = () => {
	return (
		<main className='main'>
			<div className='container'>
				<Sidebar />
				<Content />
			</div>
		</main>
	)
}

export default Main
