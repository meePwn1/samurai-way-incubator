import { ChangeEvent, FC, KeyboardEvent, createRef } from 'react'
import { ProfileType } from '../../../redux/store'
import style from './MyPosts.module.scss'
import Post from './Post/Post'

type MyPostsPropsType = {
	posts: ProfileType
	dispatch: any
}

const MyPosts: FC<MyPostsPropsType> = ({ posts, dispatch }) => {
	const textRef = createRef<HTMLTextAreaElement>()

	const addPost = () => {
		if (textRef.current?.value) {
			const action = { type: 'ADD-POST' }
			dispatch(action)
		}
		console.log(posts)
	}
	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const action = { type: 'UPDATE-CHANGE-NEW-POST-TEXT', text: e.target.value.trimStart() }
		dispatch(action)
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
						value={posts.newPostText}
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
				{posts.postData.map(data => {
					return <Post key={data.id} message={data.message} />
				})}
			</ul>
		</div>
	)
}

export default MyPosts
