import { Component } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { loginThunk } from '../../store/actions/authAction'
import { RootState } from '../../store/store'
import Login from './Login'

class LoginContainer extends Component<PropsType> {
	render() {
		return this.props.isAuth ? (
			<Redirect to='/profile' />
		) : (
			<Login loginThunk={this.props.loginThunk} />
		)
	}
}
export const mapStateToProps = (state: RootState) => ({
	isAuth: state.auth.isAuth,
})
const connected = connect(mapStateToProps, { loginThunk })
type PropsType = ConnectedProps<typeof connected>

export default compose(connected)(LoginContainer)
