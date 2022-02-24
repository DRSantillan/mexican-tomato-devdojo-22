import React from 'react';
import headerImage from '../../../assets/png/meals.png';
import css from './Header.styles.module.scss';
import HeaderCartButton from '../header-cart-button/HeaderCartButton.component';

const Header = () => {
	return (
		<>
			<header className={css.header}>
				<h1>Mexican Tomatoes</h1>
				<HeaderCartButton/>
			</header>
			<div className={css['main-image']}>
				<img src={headerImage} alt='Mexican Tomatoes' />
			</div>
		</>
	);
};

export default Header;
