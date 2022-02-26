import { useReducer } from 'react';
import CartContext from '../context/Cart.context';
const INITIAL_CART_STATE = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	

	if (action.type === 'ADD_ITEM_TO_CART') {
		const updatedTotalAmount =
			(state.totalAmount + action.item.price) * action.item.amount;
		const existingCartItemIndex = state.items.findIndex(
			item => item.id === action.item.id
		);
		const existingCartItem = state.items[existingCartItemIndex];

		let updatedCartItems;
		if (existingCartItem) {
			const updatedCartItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedCartItems = [...state.items];
			updatedCartItems[existingCartItemIndex] = updatedCartItem;
		} else {
			updatedCartItems = state.items.concat(action.item);
		}
		return {
			items: updatedCartItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE_ITEM_FROM_CART') {
		const existingCartItemIndex = state.items.findIndex(
			item => item.id === action.id
		);
		const existingCartItem = state.items[existingCartItemIndex];
		const updatedTotalAmount =
			state.totalAmount - existingCartItem.price;
		let updatedCartItems;

		if (existingCartItem.amount === 1) {
			updatedCartItems = state.items.filter(
				item => item.id !== action.id
			);
		} else {
			const updatedCartItem = {
				...existingCartItem,
				amount: existingCartItem.amount - 1,
			};
			updatedCartItems = [...state.items];
			updatedCartItems[existingCartItemIndex] = updatedCartItem;
		}

		return {
			items: updatedCartItems,
			totalAmount: updatedTotalAmount,
		};
	}

	return INITIAL_CART_STATE;
};
const CartProvider = ({ children }) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		INITIAL_CART_STATE
	);

	const addItemToCartHandler = item => {
		dispatchCartAction({ type: 'ADD_ITEM_TO_CART', item });
	};
	const removeItemFromCartHandler = id => {
		dispatchCartAction({ type: 'REMOVE_ITEM_FROM_CART', id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
