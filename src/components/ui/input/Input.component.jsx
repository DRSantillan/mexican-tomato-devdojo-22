import React from 'react';
import css from './Input.styles.module.scss';
const Input = React.forwardRef(({ input, label },ref) => {
	return (
		<div className={css.input}>
			<label htmlFor={input.id}>{label}</label>
			<input ref={ref} {...input} />
		</div>
	)
});

export default Input;
