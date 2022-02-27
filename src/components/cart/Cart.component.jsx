import React, { useContext, useState } from 'react';
import css from './Cart.styles.module.scss';

import CartItem from './cart-item/CartItem.component';
import Modal from '../ui/modal/Modal.component';
import CartContext from '../../store/context/Cart.context';
import Checkout from './checkout/Checkout.component';

const Cart = ({ onHideCart }) => {
	const [orderButtonClicked, setOrderButtonClicked] = useState(false);
	const [confirmedOrder, setConfirmedOrder] = useState(false);
	const [isOrderSuccessful, setisOrderSuccessful] = useState(false);
	const [orderNumber, setOrderNumber] = useState(null);
	const cartCtx = useContext(CartContext);
	//
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItemsInCart = cartCtx.items.length > 0;
	//
	const removeCartItemHandler = id => {
		cartCtx.removeItem(id);
	};
	//
	const addCartItemHandler = item => {
		cartCtx.addItem({ ...item, amount: 1 });
	};
	//
	const onClickOrderHandler = () => {
		setOrderButtonClicked(true);
	};
	//
	const submitOrderHandler = async orderData => {
		setConfirmedOrder(true);
		const response = await fetch(
			'https://mexican-tomatoes-devdojo-22-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({
					customer: orderData,
					order: cartCtx.items,
				}),
			}
		);
		const orderSuccess = await response.json();

		const { name } = orderSuccess;
		//
		setOrderNumber(name);
		setConfirmedOrder(false);
		setisOrderSuccessful(true);
		cartCtx.clearCart();
	};
	//
	const displayCheckOut = orderButtonClicked && (
		<Checkout
			onCancelOrder={onHideCart}
			onSubmitOrder={submitOrderHandler}
		/>
	);
	const displayCloseAndOrderButtons = !orderButtonClicked && (
		<div className={css.actions}>
			<button className={css['button--alt']} onClick={onHideCart}>
				Close
			</button>
			{hasItemsInCart && (
				<button className={css.button} onClick={onClickOrderHandler}>
					Order
				</button>
			)}
		</div>
	);

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

	const cartModalContent = (
		<>
			{cartItems}
			<div className={css.total}>
				<span>Total Amount:</span>
				<span>{totalAmount}</span>
			</div>
			{displayCheckOut}
			{displayCloseAndOrderButtons}
		</>
	);

	const orderSubmittingModalContent = (
		<>
			<p>Sending order data for processing......</p>
		</>
	);

	const orderSuccessModalContent = (
		<>
			<p>
				Order #{orderNumber}
				<br />
				You have successfully made an order. Thank you!
			</p>
			<div className={css.actions}>
				<button className={css['button--alt']} onClick={onHideCart}>
					Close
				</button>
			</div>
		</>
	);

	return (
		<Modal onHideCart={onHideCart}>
			{!confirmedOrder && !isOrderSuccessful && cartModalContent}
			{confirmedOrder && orderSubmittingModalContent}
			{!confirmedOrder && isOrderSuccessful && orderSuccessModalContent}
		</Modal>
	);
};

export default Cart;
