import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as CartIcon } from '../../../assets/CartIcon.svg';
import css from './HeaderCartButton.styles.module.scss';
import CartContext from '../../../store/context/Cart.context';

const HeaderCartButton = ({ onDisplayCart }) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;
	const itemsInCart = items.reduce((acc, item) => {
		return acc + item.amount;
	}, 0);

	const btnClasses = `${css.button} ${btnIsHighlighted ? css.bump : ''}`;

	useEffect(() => {
		if (items.length === 0) return;
		setBtnIsHighlighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer)
		}
	}, [items]);
	return (
		<button className={btnClasses} onClick={onDisplayCart}>
			<span className={css.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={css.badge}>{itemsInCart}</span>
		</button>
	);
};

export default HeaderCartButton;
