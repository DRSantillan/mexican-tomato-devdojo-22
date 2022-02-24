import React from 'react';
import { ReactComponent as CartIcon } from '../../../assets/CartIcon.svg';
import css from './HeaderCartButton.styles.module.scss'

const HeaderCartButton = () => {
	return (
		<button className={css.button}>
			<span className={css.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={css.badge}>3</span>
		</button>
	);
};

export default HeaderCartButton;
