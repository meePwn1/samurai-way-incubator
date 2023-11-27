import { FC } from 'react'
import { IPost } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.scss'
import UserInfo from './UserInfo/UserInfo'

type ProfilePropsType = {
	posts: IPost[]
	createPost: (message: string) => void
}

const Profile: FC<ProfilePropsType> = ({ posts, createPost }) => {
	return (
		<div className={style.profile}>
			<div className={style.profile__main}>
				<img
					src='https://img.freepik.com/premium-photo/mountain-landscape-with-lake-mountains-background_887562-4077.jpg'
					alt=''
				/>
			</div>
			<UserInfo />
			<MyPosts posts={posts} createPost={createPost} />
		</div>
	)
}

export default Profile