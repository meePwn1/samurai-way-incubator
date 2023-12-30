import { Dispatch } from 'react'
import { connect } from 'react-redux'
import { followAction, setUsersAction, unfollowAction } from '../../store/actions/usersAction'
import { RootState } from '../../store/reducers'
import { CombinedActions } from '../../types'
import { IUser } from '../../types/usersPage'
import Users from './Users'

const mapStateToProps = (state: RootState) => ({
	users: state.usersPage
})

// Функция, которая создает функции-диспетчеры и передает их как пропсы компонента
const mapDispatchToProps = (dispatch: Dispatch<CombinedActions>) => ({
	follow: (id: number) => {
		dispatch(followAction(id))
	},
	unfollow: (id: number) => {
		dispatch(unfollowAction(id))
	},
	setUser: (users: IUser[]) => {
		dispatch(setUsersAction(users))
	}
})

// Подключение компонента к Redux Store
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer