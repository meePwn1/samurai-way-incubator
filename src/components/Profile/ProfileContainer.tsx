import React from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import LinearLoader from '../../UI/Loader/LinearLoader'
import { ProfileService } from '../../services/ProfileService'
import * as ProfileActions from '../../store/actions/profileAction'
import { RootState } from '../../store/store'
import Profile from './Profile'

interface StateProps {
	isLoading: boolean
}

class ProfileContainer extends React.Component<ProfileProps, StateProps> {
	constructor(props: ProfileProps) {
		super(props)
		this.state = {
			isLoading: true,
		}
	}
	componentDidMount() {
		let userID = this.props.match.params.userID
		if (!userID) {
			userID = '2'
		}
		ProfileService.getProfile(userID).then(res => {
			this.props.setUserProfile(res.data)
			this.setState({ isLoading: false })
		})
	}
	render() {
		return (
			<>
				{this.state.isLoading ? (
					<LinearLoader />
				) : (
					<Profile profilePage={this.props.profilePage} />
				)}
			</>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	profilePage: state.profilePage,
})

const connected = connect(mapStateToProps, { ...ProfileActions })
type ParamsType = {
	userID: string
}
type ProfileReduxProps = ConnectedProps<typeof connected>
type ProfileProps = RouteComponentProps<ParamsType> & ProfileReduxProps
const ProfileContainerWithParams = withRouter(ProfileContainer)
export default connected(ProfileContainerWithParams)
