import style from './UserInfo.module.scss'
import UserInfoDesc from './UserInfoItem/UserInfoItem'

const UserInfo = () => {
	return (
		<div className={style.userInfo}>
			<div className={style.userInfo__ava}>
				<img src='https://i.pinimg.com/originals/dc/be/80/dcbe8061a60da1ee10dcba4f0adcef66.jpg' alt='' />
			</div>
			<div>
				<div className={style.userInfo__name}>Dmitry K.</div>
				<ul>
					<UserInfoDesc />
					<UserInfoDesc />
					<UserInfoDesc />
					<UserInfoDesc />
				</ul>
			</div>
		</div>
	)
}

export default UserInfo
