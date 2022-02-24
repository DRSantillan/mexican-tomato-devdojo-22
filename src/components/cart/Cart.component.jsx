import React from 'react';
import css from './Cart.styles.module.scss';

import CartItem from './cart-item/CartItem.component';
import Modal from '../ui/modal/Modal.component';

const Cart = ({active, hideCart}) => {
	const cartItems = [
		{ id: 'c1', name: 'Sushi', amount: 2, price: 12.98 },
	].map(cartItem => <CartItem {...cartItem} />);

	return (
		<Modal active={active}>
			{cartItems}
			<div className={css.total}>
				<span>Total Amount:</span>
				<span>$23.43</span>
			</div>
			<div className={css.actions}>
				<button className={css['button--alt']} onClick={hideCart}>Close</button>
				<button className={css.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
