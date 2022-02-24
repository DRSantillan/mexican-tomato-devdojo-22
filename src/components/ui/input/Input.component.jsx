import React from 'react';
import css from './Input.styles.module.scss';
const Input = ({ input, label }) => {
	return (
		<div className={css.input}>
			<label htmlFor={input.id}>{label}</label>
			<input {...input} />
		</div>
	);
};

export default Input;
