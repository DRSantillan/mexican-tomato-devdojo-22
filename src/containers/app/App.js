import { useState } from 'react';
import Header from '../../components/layout/header/Header.component';
import Meals from '../../components/meals/Meals.component';
import Cart from '../../components/cart/Cart.component';
import CartProvider from '../../store/provider/Cart.provider';

function App() {
	const [isCartVisible, setIsCartVisible] = useState(false);
	const displayCartHandler = () => {
		setIsCartVisible(true);
	};
	const hideCartHandler = () => {
		setIsCartVisible(false);
	};

	return (
		<CartProvider>
			{isCartVisible && <Cart onHideCart={hideCartHandler} />}
			<Header onDisplayCart={displayCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
