import React from 'react';
import MealsMenu from '../meals/menu/MealsMenu.component';
import MealsSummary from '../meals/summary/MealsSummary.component';

const Meals = () => {
	return (
		<>
			<MealsSummary />
			<MealsMenu />
		</>
	);
};

export default Meals;
