import { useState, useRef } from 'react';
import css from './Checkout.styles.module.scss';

const isInputFieldEmpty = value => value.trim().length === 0;
const isPostCodeValid = value => value.trim().length !== 4;
const isContactNoValid = value => value.trim().length !== 10;

const Checkout = ({ onCancelOrder, onSubmitOrder }) => {
	const nameRef = useRef();
	const emailRef = useRef();
	const addressRef = useRef();
	const stateRef = useRef();
	const postcodeRef = useRef();
	const contactnoRef = useRef();

	//const [formData, setFormData] = useState({});
	const [formDataValid, setFormDataValid] = useState({
		name: true,
		email: true,
		address: true,
		state: true,
		postcode: true,
		contactno: true,
	});
	const onInputBlur = event => {};
	const onConfirmOrderHandler = event => {
		event.preventDefault();

		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const address = addressRef.current.value;
		const state = stateRef.current.value;
		const postcode = postcodeRef.current.value;
		const contactno = contactnoRef.current.value;

		const enteredName = !isInputFieldEmpty(name);
		const enteredEmail = !isInputFieldEmpty(email);
		const enteredAddress = !isInputFieldEmpty(address);
		const enteredState = !isInputFieldEmpty(state);
		const enteredPostcode = !isPostCodeValid(postcode);
		const enteredContactno = !isContactNoValid(contactno);

		setFormDataValid({
			name: enteredName,
			email: enteredEmail,
			address: enteredAddress,
			state: enteredState,
			postcode: enteredPostcode,
			contactno: enteredContactno,
		});

		const isFormDataValid =
			enteredName &&
			enteredEmail &&
			enteredAddress &&
			enteredState &&
			enteredPostcode &&
			enteredContactno;

		if (!isFormDataValid) {
			return;
		}

		// setFormData(
		// 	{
		// 		name: name,
		// 		email: email,
		// 		address: address,
		// 		state: state,
		// 		postcode: postcode,
		// 		contactno: contactno,
		// 	},
		// );

        onSubmitOrder({
			name: name,
			email: email,
			address: address,
			state: state,
			postcode: postcode,
			contactno: contactno,
		});
		//onCancelOrder()
	};

	const nameControlCss = `${css.control} ${
		!formDataValid.name && css.invalid
	}`;
	const emailControlCss = `${css.control} ${
		!formDataValid.email ? css.invalid : null
	}`;
	const addressControlCss = `${css.control} ${
		!formDataValid.address ? css.invalid : null
	}`;
	const stateControlCss = `${css.control} ${
		!formDataValid.state ? css.invalid : null
	}`;
	const postcodeControlCss = `${css.control} ${
		!formDataValid.postcode ? css.invalid : null
	}`;
	const contactnoControlCss = `${css.control} ${
		!formDataValid.contactno ? css.invalid : null
	}`;

	return (
		<form onSubmit={onConfirmOrderHandler} className={css.form}>
			<div className={nameControlCss}>
				<label htmlFor=''>Name:</label>
				<input type='text' name='name' id='name' ref={nameRef} />
				{!formDataValid.name && <p>Please enter a valid name.</p>}
			</div>

			<div className={emailControlCss}>
				<label htmlFor=''>Email:</label>
				<input type='email' name='email' id='email' ref={emailRef} />
				{!formDataValid.email && <p>Please enter a valid email.</p>}
			</div>
			<div className={addressControlCss}>
				<label htmlFor=''>Address:</label>
				<input
					type='text'
					name='address'
					id='address'
					ref={addressRef}
				/>
				{!formDataValid.address && <p>Please enter a valid address.</p>}
			</div>
			<div className={stateControlCss}>
				<label htmlFor=''>State:</label>
				<input type='text' name='state' id='state' ref={stateRef} />
				{!formDataValid.state && <p>Please enter a valid state.</p>}
			</div>
			<div className={postcodeControlCss}>
				<label htmlFor=''>Post Code:</label>
				<input
					type='text'
					name='postcode'
					id='postcode'
					ref={postcodeRef}
				/>
				{!formDataValid.postcode && (
					<p>Please enter a valid postcode.</p>
				)}
			</div>
			<div className={contactnoControlCss}>
				<label htmlFor=''>Phone / Mobile Number:</label>
				<input
					type='text'
					name='contactno'
					id='contactno'
					ref={contactnoRef}
				/>
				{!formDataValid.contactno && (
					<p>Please enter a valid contact no.</p>
				)}
			</div>
			<div className={css.actions}>
				<button type='button' onClick={onCancelOrder}>
					Close
				</button>
				<button className={css.submit}>Confirm Order</button>
			</div>
		</form>
	);
};

export default Checkout;
