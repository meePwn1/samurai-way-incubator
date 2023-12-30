import { ChangeEvent, FC, KeyboardEvent, createRef } from 'react'
import { PostData } from '../../../types/profilePage'
import style from './MyPosts.module.scss'
import Post from './Post/Post'

type MyPostsProps = {
	posts: PostData[]
	newPostText: string
	createPost: () => void
	updateNewPostText: (text: string) => void
}

const MyPosts: FC<MyPostsProps> = ({ posts, createPost, updateNewPostText, newPostText }) => {
	const textRef = createRef<HTMLTextAreaElement>()
	const addPost = () => {
		if (textRef.current?.value.trim()) {
			createPost()
		}
	}
	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		debugger
		const text = e.target.value.trimStart()
		updateNewPostText(text)
	}
	const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			addPost()
		}
	}

	return (
		<div className={style.myPosts}>
			<div className={style.myPosts__title}>My Posts</div>
			<div className={style.myPosts__newPost}>
				<form>
					<textarea
						ref={textRef}
						value={newPostText}
						className={style.myPosts__text}
						onChange={handleOnChange}
						onKeyDown={handleKeyPress}
					/>
					<button type='button' onClick={addPost} className={style.myPosts__btn}>
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
