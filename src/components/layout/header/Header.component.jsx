import React from 'react';
import headerImage from '../../../assets/png/meals.png';
import css from './Header.styles.module.scss';
import HeaderCartButton from '../header-cart-button/HeaderCartButton.component';
import Logo from '../../../assets/png/logo.png';


const Header = ({ onDisplayCart }) => {
	return (
		<>
			<header className={css.header}>
				
					<img
						src={Logo}
						alt='Mexican Tomatoes - Fresh Food Delivered'
						height={90}
					/>
				
				<h1>Mexican Tomatoes</h1>
				<HeaderCartButton onDisplayCart={onDisplayCart} />
			</header>
			<div className={css['main-image']}>
				<img src={headerImage} alt='Mexican Tomatoes' />
			</div>
		</>
	);
};

export default Header;
