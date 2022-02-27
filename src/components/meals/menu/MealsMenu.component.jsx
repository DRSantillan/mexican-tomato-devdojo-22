import React, { useEffect, useState } from 'react';
import css from './MealsMenu.styles.module.scss';
import Card from '../../ui/card/Card.component';
import MealItem from '../item/MealItem.component';

import { MENU_DB } from '../../../data/menu.db';

const MealsMenu = () => {
	const [menuItems, setMenuItems] = useState([])
	
	useEffect(() => {
		const getMenuItems = async () => {
			const menuItems = [];
			const response = await fetch(
				'https://mexican-tomatoes-devdojo-22-default-rtdb.asia-southeast1.firebasedatabase.app/menu.json'
			);
			const data = await response.json();
			
			for (const key in data) {
				const menuItem = {
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				};
				menuItems.push(menuItem)
				
			}

			setMenuItems(menuItems)
		};

		getMenuItems();
	}, []);

	const menuList = menuItems.map(menuItem => (
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
