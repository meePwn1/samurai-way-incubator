import { Dispatch, FC } from 'react'
import { CombinedActions } from '../../types'
import { ProfileState } from '../../types/profilePage'
import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.scss'
import UserInfo from './UserInfo/UserInfo'

type ProfilePropsType = {
	profilePage: ProfileState
	dispatch: Dispatch<CombinedActions>
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
