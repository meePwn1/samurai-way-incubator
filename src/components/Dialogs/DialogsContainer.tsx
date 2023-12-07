import { Dispatch } from 'react'
import { connect } from 'react-redux'
import { createMessageAction, updateNewMessageTextAction } from '../../store/actions/dialogsAciton'
import { RootState } from '../../store/reducers'
import { CombinedActions } from '../../types'
import Dialogs from './Dialogs'

const mapStateToProps = (state: RootState) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
const mapDispatchToProps = (dispatch: Dispatch<CombinedActions>) => {
	return {
		createMessage: () => {
			dispatch(createMessageAction())
		},
		updateMessage: (text: string) => {
			dispatch(updateNewMessageTextAction(text))
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer
