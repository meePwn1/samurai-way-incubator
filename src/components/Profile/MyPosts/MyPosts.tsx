import { FC, MouseEvent, createRef } from 'react'
import { IPost } from '../../../redux/state'
import style from './MyPosts.module.scss'
import Post from './Post/Post'

type MyPostsPropsType = {
	posts: IPost[]
	createPost: (message: string) => void
}

const MyPosts: FC<MyPostsPropsType> = ({ posts, createPost }) => {
	const textRef = createRef<HTMLTextAreaElement>()

	const addPost = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (textRef.current) {
			createPost(textRef.current?.value)
			textRef.current.value = ''
		}
		console.log(posts)
	}

	return (
		<div className={style.myPosts}>
			<div className={style.myPosts__title}>My Posts</div>
			<div className={style.myPosts__newPost}>
				<form>
					<textarea ref={textRef} className={style.myPosts__text} />
					<button onClick={addPost} className={style.myPosts__btn}>
						Send
					</button>
				</form>
			</div>
			<ul>
				{posts.map(data => {
					return <Post key={data.id} message={data.message} />
				})}
			</ul>
		</div>
	)
}

export default MyPosts
