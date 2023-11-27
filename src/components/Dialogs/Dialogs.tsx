import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.scss'

interface DialogItemProps {
	name: string
	id: number
}

const DialogItem: FC<DialogItemProps> = ({ name, id }) => {
	let path = `/dialogs/ + ${id}`
	return (
		<li className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{name}</NavLink>
		</li>
	)
}

interface MessageProps {
	message: string
}

const Message: FC<MessageProps> = ({ message }) => {
	return <li className={s.message}>{message}</li>
}

interface IDialogs {
	id: number
	name: string
}
interface IMessages {
	id: number
	message: string
}

const Dialogs = () => {
	const dialogsData: IDialogs[] = [
		{ id: 1, name: 'Dmitry' },
		{ id: 2, name: 'Sasha' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Valera' },
		{ id: 5, name: 'Viktor' },
	]

	const messagesData: IMessages[] = [
		{ id: 1, message: 'Yo' },
		{ id: 2, message: 'Hi' },
		{ id: 3, message: 'IT kamasutra' },
		{ id: 4, message: 'Incubator' },
	]
	return (
		<div className={s.root}>
			<h1 className={s.title}>Dialogs</h1>
			<div className={s.row}>
				<ul className={s.dialogs}>
					{dialogsData.map(data => {
						return <DialogItem key={data.id} name={data.name} id={data.id} />
					})}
				</ul>
				<ul className={s.messages}>
					{messagesData.map(message => {
						return <Message key={message.id} message={message.message} />
					})}
				</ul>
			</div>
		</div>
	)
}

export default Dialogs
