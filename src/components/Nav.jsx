import './nav.scss'
import { navLinks } from '../utils/nav'
import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'

const Nav = () => {
	const [isNavShown, setIsNavShown] = useState(false)

	useEffect(() => {
		if (isNavShown) {
			document.body.classList.add('scroll-hidden')
		}
		return () => {
			document.body.classList.remove('scroll-hidden')
		}
	})

	return (
		<nav className={isNavShown ? 'nav show' : 'nav'}>
			<div className="container">
				<div className="nav__mobile">
					<img src="assets/shared/logo.svg" alt="logo" className="nav__logo" />
					<img
						src="assets/shared/icon-hamburger.svg"
						alt="show nav"
						className="nav__burger nav__burger--show"
						onClick={() => setIsNavShown(true)}
					/>
				</div>
				<div className="line-nav"></div>
				<div className="nav__on-show">
					<img
						src="assets/shared/icon-close.svg"
						alt="close nav"
						className="nav__burger nav__burger--close"
						onClick={() => setIsNavShown(false)}
					/>
					<ul className="nav__links">
						{navLinks.map(({ path, link }, index) => (
							<li key={link}>
								<NavLink to={path} onClick={() => setIsNavShown(false)} className="nav__link">
									<span className="nav__link-num">{`0${index}`}</span>
									<span className="nav__link-name">{link}</span>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Nav
