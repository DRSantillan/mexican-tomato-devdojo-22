import React from 'react';
import { ReactComponent as CartIcon } from '../../../assets/CartIcon.svg';
import css from './HeaderCartButton.styles.module.scss'

const HeaderCartButton = ({displayCart}) => {
	return (
		<button className={css.button} onClick={displayCart}>
			<span className={css.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={css.badge}>3</span>
		</button>
	);
};

export default HeaderCartButton;
