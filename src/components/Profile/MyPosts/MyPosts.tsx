import style from './MyPosts.module.scss'
import Post from './Post/Post'

interface IPost {
	id: number
	message: string
}

const MyPosts = () => {
	const postData: IPost[] = [
		{ id: 1, message: 'hi, how are you?' },
		{ id: 1, message: 'its my first post!' },
	]
	return (
		<div className={style.myPosts}>
			<div className={style.myPosts__title}>My Posts</div>
			<div className={style.myPosts__newPost}>
				<form>
					<textarea className={style.myPosts__text} />
					<button className={style.myPosts__btn}>Send</button>
				</form>
			</div>
			<ul>
				{postData.map(data => {
					return <Post key={data.id} message={data.message} />
				})}
			</ul>
		</div>
	)
}

export default MyPosts
