import { DialogsActionType, DialogsAddMessageAction, DialogsUpdateNewMessageTextAction } from '../../types/dialogsPage'

export const updateNewMessageText = (text: string): DialogsUpdateNewMessageTextAction => ({
	type: DialogsActionType.UPDATE_NEW_MESSAGE_TEXT,
	payload: text,
})
export const createMessage = (): DialogsAddMessageAction => ({ type: DialogsActionType.ADD_MESSAGE })
