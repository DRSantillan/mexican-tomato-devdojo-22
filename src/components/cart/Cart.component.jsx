import React, { useContext } from 'react';
import css from './Cart.styles.module.scss';

import CartItem from './cart-item/CartItem.component';
import Modal from '../ui/modal/Modal.component';
import CartContext from '../../store/context/Cart.context';

const Cart = ({ onHideCart }) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItemsInCart = cartCtx.items.length > 0;

	const removeCartItemHandler = id => {
		cartCtx.removeItem(id);
	};
	const addCartItemHandler = item => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className={css['cart-items']}>
			{cartCtx.items.map(cartItem => (
				<CartItem
					className={css['cart-item']}
					key={Math.random() + cartItem.id}
					{...cartItem}
					onRemoveItemFromCart={() =>
						removeCartItemHandler(cartItem.id)
					}
					onAddItemToCart={() => addCartItemHandler(cartItem)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onHideCart={onHideCart}>
			{cartItems}
			<div className={css.total}>
				<span>Total Amount:</span>
				<span>{totalAmount}</span>
			</div>
			<div className={css.actions}>
				<button className={css['button--alt']} onClick={onHideCart}>
					Close
				</button>
				{hasItemsInCart && (
					<button className={css.button}>Order</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
