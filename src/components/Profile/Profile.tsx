import { FC } from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import style from './Profile.module.scss'
import UserInfo from './UserInfo/UserInfo'

const Profile: FC = () => {
	return (
		<div className={style.profile}>
			<div className={style.profile__main}>
				<img
					src='https://img.freepik.com/premium-photo/mountain-landscape-with-lake-mountains-background_887562-4077.jpg'
					alt=''
				/>
			</div>
			<UserInfo />
			<MyPostsContainer />
		</div>
	)
}

export default Profile
