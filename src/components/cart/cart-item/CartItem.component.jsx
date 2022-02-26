import React from 'react';
import css from './CartItem.styles.module.scss';

const CartItem = ({ name, price, amount, onAddItemToCart, onRemoveItemFromCart }) => {
	const totalPrice = `$${price.toFixed(2)}`;
	return (
		<li className={css['cart-item']}>
			<div>
				<h2>{name}</h2>
				<div className={css.summary}>
					<span className={css.price}>{totalPrice}</span>
					<span className={css.amount}>x {amount}</span>
				</div>
			</div>
			<div className={css.actions}>
				<button onClick={onRemoveItemFromCart}>-</button>
				<button onClick={onAddItemToCart}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
