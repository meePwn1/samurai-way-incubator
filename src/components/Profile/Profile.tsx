import { FC } from 'react'
import { IProfile } from '../../types/IProfile.interface'
import style from './Profile.module.scss'
import UserInfo from './UserInfo/UserInfo'

interface ProfileProps {
	profilePage: IProfile
}

const Profile: FC<ProfileProps> = ({ profilePage }) => {
	return (
		<div className={style.profile}>
			<div className={style.profile__main}>
				<img
					src='https://img.freepik.com/premium-photo/mountain-landscape-with-lake-mountains-background_887562-4077.jpg'
					alt=''
				/>
			</div>
			<UserInfo profileData={profilePage} />
			{/* <MyPostsContainer /> */}
		</div>
	)
}

export default Profile
