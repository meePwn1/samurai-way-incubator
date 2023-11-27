import s from './Header.module.scss'
const Header = () => {
	return (
		<header className={s.header}>
			<a href='/' className={s.header__logo}>
				<img src='https://i.pinimg.com/originals/dc/be/80/dcbe8061a60da1ee10dcba4f0adcef66.jpg' alt='logo' />
			</a>
		</header>
	)
}

export default Header
