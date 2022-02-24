import React from 'react';
import css from './MealsMenu.styles.module.scss';
import Card from '../../ui/card/Card.component';
import MealItem from '../item/MealItem.component';

import { MENU_DB } from '../../../data/menu.db';

const MealsMenu = () => {
	const menuList = MENU_DB.map(menuItem => (
		<MealItem key={menuItem.id} {...menuItem} />
	));

	return (
		<section className={css.meals}>
			<Card>
				<ul>{menuList}</ul>
			</Card>
		</section>
	);
};

export default MealsMenu;
