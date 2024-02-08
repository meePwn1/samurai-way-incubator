import React, { ChangeEvent } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import LinearLoader from '../../UI/Loader/LinearLoader'
import { FollowService } from '../../services/FollowService'
import { UsersService } from '../../services/UsersService'
import * as UsersActions from '../../store/actions/usersAction'
import { RootState } from '../../store/store'
import { getPages } from '../../utils/getPages'
import Users from './Users'

interface UserState {
	isLoading: boolean
}

class UsersContainer extends React.Component<UsersReduxProps, UserState> {
	constructor(props: UsersReduxProps) {
		super(props)
		this.state = {
			isLoading: true,
		}
	}
	fetchData() {
		const { usersPage, setUsersAction, setTotalPagesAction } = this.props
		this.setState({ isLoading: true })
		UsersService.get({
			count: usersPage.pageSize,
			page: usersPage.currentPage,
		}).then(res => {
			setUsersAction(res.data.items)
			const totalPages = getPages(res.data.totalCount, usersPage.pageSize)
			setTotalPagesAction(totalPages)
			this.setState({ isLoading: false })
		})
	}
	changePageHandler = (e: ChangeEvent<unknown>, page: number) => {
		this.props.setCurrentPageAction(page)
		this.fetchData()
	}
	componentDidMount() {
		this.fetchData()
	}
	followHandler = (userID: number) => {
		this.props.addFollowProgressAction(userID)
		FollowService.follow(userID)
			.then(res => {
				if (!res.data.resultCode) {
					this.props.followAction(userID)
				}
			})
			.finally(() => this.props.deleteFollowProgressAction(userID))
	}
	unFollowHandler = (userID: number) => {
		this.props.addFollowProgressAction(userID)
		FollowService.unFollow(userID)
			.then(res => {
				if (!res.data.resultCode) {
					this.props.unfollowAction(userID)
				}
			})
			.finally(() => this.props.deleteFollowProgressAction(userID))
	}
	render() {
		const { usersPage } = this.props

		return (
			<>
				{this.state.isLoading && <LinearLoader />}
				<Users
					follow={this.followHandler}
					unfollow={this.unFollowHandler}
					changePageHandler={this.changePageHandler}
					usersPage={usersPage}
					isLoading={this.state.isLoading}
				/>
			</>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	usersPage: state.usersPage,
})

const connected = connect(mapStateToProps, { ...UsersActions })
export type UsersReduxProps = ConnectedProps<typeof connected>

export default connected(UsersContainer)
