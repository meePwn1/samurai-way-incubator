import { FC } from 'react'
import { ProfileType } from '../../redux/store'
import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.scss'
import UserInfo from './UserInfo/UserInfo'

type ProfilePropsType = {
	profilePage: ProfileType
	dispatch: any
}

const Profile: FC<ProfilePropsType> = ({ profilePage, dispatch }) => {
	return (
		<div className={style.profile}>
			<div className={style.profile__main}>
				<img
					src='https://img.freepik.com/premium-photo/mountain-landscape-with-lake-mountains-background_887562-4077.jpg'
					alt=''
				/>
			</div>
			<UserInfo />
			<MyPosts posts={profilePage} dispatch={dispatch} />
		</div>
	)
}

export default Profile
