import { useState } from 'react';
import Header from '../../components/layout/header/Header.component';
import Meals from '../../components/meals/Meals.component';
import Cart from '../../components/cart/Cart.component';

function App() {
	const [isCartVisible, setIsCartVisible] = useState(false);
	const displayCartHandler = () => {
		setIsCartVisible(true);
	};
	const hideCartHandler = () => {
		setIsCartVisible(false);
	};

	return (
		<>
			<Cart active={isCartVisible} hideCart={hideCartHandler} />
			<Header displayCart={displayCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
