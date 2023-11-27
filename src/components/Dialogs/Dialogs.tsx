import { FC } from 'react'
import { IDialogs, IMessages } from '../../redux/state'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.scss'
import Message from './Message/Message'

type DialogsPropsType = {
	dialogs: IDialogs[]
	messages: IMessages[]
}

const Dialogs: FC<DialogsPropsType> = ({ dialogs, messages }) => {
	return (
		<div className={s.root}>
			<h1 className={s.title}>Dialogs</h1>
			<div className={s.row}>
				<ul className={s.dialogs}>
					{dialogs.map(data => {
						return <DialogItem key={data.id} name={data.name} id={data.id} />
					})}
				</ul>
				<ul className={s.messages}>
					{messages.map(message => {
						const isMyMassage = message.senderID === 1
						return <Message key={message.id} message={message.message} isMyMassage={isMyMassage} />
					})}
				</ul>
			</div>
		</div>
	)
}

export default Dialogs
