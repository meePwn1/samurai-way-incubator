import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.scss'
import UserInfo from './UserInfo/UserInfo'

const Profile = () => {
	return (
		<div className={style.profile}>
			<div className={style.profile__main}>
				<img
					src='https://img.freepik.com/premium-photo/mountain-landscape-with-lake-mountains-background_887562-4077.jpg'
					alt=''
				/>
			</div>
			<UserInfo />
			<MyPosts />
		</div>
	)
}

export default Profile
