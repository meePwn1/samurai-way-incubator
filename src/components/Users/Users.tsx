import axios, { AxiosResponse } from 'axios'
import React from 'react'
import avatar from '../../assets/img/avatar.jpg'
import { IUser } from '../../types/usersPage'
import styles from './Users.module.scss'

interface UserData {
	error: null | string
	items: IUser[]
	totalCount: number
}

interface UsersProps {
	users: IUser[]
	follow: (id: number) => void
	unfollow: (id: number) => void
	setUser: (users: IUser[]) => void
}

class Users extends React.Component<UsersProps> {
	constructor(props: UsersProps) {
		super(props)
		this.state = { page: 1 }
	}

	componentDidMount(): void {
		axios
			.get<UserData>('https://social-network.samuraijs.com/api/1.0/users')
			.then((respone: AxiosResponse<UserData>) => this.props.setUser(respone.data.items))
	}

	render() {
		const { users, follow, unfollow } = this.props

		return (
			<div className={styles.root}>
				<h1 className={styles.title}>Users</h1>
				<div><span></span></div>
				<div className={styles.users}>
					{users.map(el => {
						return (
							<div className={styles.item}>
								<div className={styles.avatar}>
									<div className={styles.image}>
										<img src={el.photos.small ? el.photos.small : avatar} alt={el.name} />
									</div>
									{el.followed ?
										<button onClick={() => unfollow(el.id)}>Unfollowed</button> :
										<button onClick={() => follow(el.id)}>Followed</button>}
								</div>
								<div className={styles.content}>
									<div className={styles.userinfo}>
										<div className={styles.userinfoItem}>{el.name}</div>
									</div>
									<div className={styles.statusComment}>
										{el.status}
									</div>
								</div>
							</div>
						)
					})}

				</div>
				<div className={styles.showmore}>
					<button>Show more</button>
				</div>
			</div>)
	}
}
export default Users