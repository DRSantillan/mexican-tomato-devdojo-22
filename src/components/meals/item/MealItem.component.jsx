import React, { useContext } from 'react';
import css from './MealItem.styles.module.scss';
import MealItemForm from '../meal-item-form/MealItemForm.component';
import CartContext from '../../../store/context/Cart.context';

const MealItem = ({ id, name, description, price }) => {
	const cartCtx = useContext(CartContext);
	const displayPrice = `$${price.toFixed(2)}`;
	const addItemToCartHandler = amount => {
		cartCtx.addItem({
			id,
			name,
			amount,
			price,
		});
	};
	return (
		<li className={css.meal}>
			<div>
				<h3>{name}</h3>
				<div className={css.description}>{description}</div>
				<div className={css.price}>{displayPrice}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addItemToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
