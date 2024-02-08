import { FC } from 'react'
import avatar from '../../../assets/img/avatar.jpg'
import { IProfile } from '../../../types/IProfile.interface'
import style from './UserInfo.module.scss'

interface UserInfoProps {
	profileData: IProfile
}

const UserInfo: FC<UserInfoProps> = ({ profileData }) => {
	const {
		contacts,
		fullName,
		lookingForAJob,
		lookingForAJobDescription,
		photos,
	} = profileData
	return (
		<div className={style.userInfo}>
			<div className={style.userInfo__ava}>
				<img src={photos.small ? photos.small : avatar} alt='' />
			</div>
			<div>
				<div className={style.userInfo__name}>{fullName}</div>
				<div className={style.userInfo__desc}>
					<div className={style.userInfo__item}>
						<span className={style.userInfo__itemLabel}>
							Looking for a job:{' '}
						</span>
						<span className={style.userInfo__itemValue}>
							{' '}
							{lookingForAJob ? 'yes' : 'no'}
						</span>
					</div>
					<div className={style.userInfo__item}>
						<span className={style.userInfo__itemLabel}>
							Work expectations:{' '}
						</span>
						<span className={style.userInfo__itemValue}>
							{lookingForAJobDescription ? lookingForAJobDescription : '...'}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserInfo
