import React, { useRef, useState } from 'react';
import css from './MealItemForm.styles.module.scss';
import Input from '../../ui/input/Input.component';

const MealItemForm = ({onAddToCart}) => {
	const [amountIsValid, setAmountIsValid] = useState(true);

	const amountInputRef = useRef();

	const addMealItemHandler = event => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value.trim();
		const enteredItemsAmount = +enteredAmount;
		if (
			enteredAmount.length === 0 ||
			enteredItemsAmount < 1 ||
			enteredItemsAmount > 5
		) {
			setAmountIsValid(false);
			return;
		}
    onAddToCart(enteredItemsAmount)
	};

	return (
		<form className={css.form} onSubmit={addMealItemHandler}>
			<Input
				ref={amountInputRef}
				label='Amount '
				input={{
					id: 'amount',
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+</button>
			{!amountIsValid && <p>Please enter a valid order amount (1-5).</p>}
		</form>
	);
};

export default MealItemForm;
