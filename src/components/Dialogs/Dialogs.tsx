import { ChangeEvent, Dispatch, FC, useRef } from 'react'
import { createMessage, updateNewMessageText } from '../../store/actions/dialogsAciton'
import { CombinedActions } from '../../types'
import { DialogsState } from '../../types/dialogsPage'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.scss'
import Message from './Message/Message'

type DialogsPropsType = {
	dialogsPage: DialogsState
	dispatch: Dispatch<CombinedActions>
}

const Dialogs: FC<DialogsPropsType> = ({ dialogsPage, dispatch }) => {
	const textRef = useRef<HTMLTextAreaElement | null>(null)
	const handleClick = () => {
		if (textRef.current?.value.trim()) {
			dispatch(createMessage())
		}
	}

	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value.trimStart()
		dispatch(updateNewMessageText(text))
		console.log(dialogsPage.newMessageText)
	}

	return (
		<div className={s.root}>
			<h1 className={s.title}>Dialogs</h1>
			<div className={s.row}>
				<div className={s.dialogs}>
					<ul>
						{dialogsPage.dialogsData.map(data => {
							return <DialogItem key={data.id} name={data.name} id={data.id} />
						})}
					</ul>
				</div>
				<div className={s.messages}>
					<ul>
						{dialogsPage.messagesData.map(message => {
							const isMyMassage = message.id === 0
							return <Message key={message.id} message={message.message} isMyMassage={isMyMassage} />
						})}
					</ul>
					<div className={s.newMessageWrapper}>
						<textarea
							ref={textRef}
							value={dialogsPage.newMessageText}
							onChange={handleOnChange}
							className={s.input}
						></textarea>
						<button onClick={handleClick} className={s.btn}>
							push
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
