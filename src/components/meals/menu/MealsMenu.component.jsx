import React, { useEffect, useState } from 'react';
import css from './MealsMenu.styles.module.scss';
import Card from '../../ui/card/Card.component';
import MealItem from '../item/MealItem.component';
import Loader from '../../../assets/Cube-1.1s-520px.gif';

const MealsMenu = () => {
	const [menuItems, setMenuItems] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const [hasErrorLoading, setHasErrorLoading] = useState(null);

	useEffect(() => {
		const getMenuItems = async () => {
			const menuItems = [];
			const response = await fetch(
				`${process.env.REACT_APP_DB_URL}/menu.json`
			);

			if (!response.ok)
				throw new Error(
					'There is a problem retrieving the menu, please try again!'
				);

			const data = await response.json();

			for (const key in data) {
				const menuItem = {
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				};
				menuItems.push(menuItem);
			}
			setMenuItems(menuItems);
			setisLoading(false);
		};
		getMenuItems().catch(error => {
			setisLoading(false);
			setHasErrorLoading(
				'There is a problem retrieving the menu, please try again!'
			);
		});
	}, []);

	if (isLoading)
		return (
			<div className={css.loader}>
				<img src={Loader} alt='Get data from server....' />
			</div>
		);
	if (hasErrorLoading) {
		return (
			<div className={css.error}>
				<p>{hasErrorLoading}</p>
			</div>
		);
	}

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
