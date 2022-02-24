import React from 'react';
import css from './MealItem.styles.module.scss';
import MealItemForm from '../meal-item-form/MealItemForm.component';

const MealItem = ({ name, description, price }) => {
	const displayPrice = `$${price.toFixed(2)}`;
	return (
		<li className={css.meal}>
			<div>
				<h3>{name}</h3>
				<div className={css.description}>{description}</div>
				<div className={css.price}>{displayPrice}</div>
			</div>
			<div>
                <MealItemForm/>
            </div>
		</li>
	);
};

export default MealItem;
