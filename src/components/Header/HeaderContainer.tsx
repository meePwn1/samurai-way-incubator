import { Component } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import * as AuthActions from '../../store/actions/authAction'
import { RootState } from '../../store/store'
import Header from './Header'

class HeaderContainer extends Component<HeaderProps> {
	componentDidMount() {
		this.props.authMeThunk()
	}
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state: RootState) => ({
	userData: state.auth.data,
	isAuth: state.auth.isAuth,
})

const connected = connect(mapStateToProps, { ...AuthActions })
export type HeaderProps = ConnectedProps<typeof connected>
export default connected(HeaderContainer)
