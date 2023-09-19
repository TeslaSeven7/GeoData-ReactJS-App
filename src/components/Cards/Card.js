import { useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';
import { useCountryStore } from './Store';

const Card = (props) => {
	const id = props.id;
	const countryStore = useCountryStore();
	console.log(countryStore.inViewCountry);
	return (
		<>
			<div
				className={classNames(
					'position-absolute h-100 w-100 rounded-5 w-100 ',
					props.gradient,
					countryStore.inViewCountry === id ? 'opacity-1' : 'opacity-0'
				)}>
				{props.children}
			</div>
		</>
	);
};
export const France = (props) => {
	return (
		<Card
			gradient='gradient-1'
			id={props.id}>
			<span></span>
		</Card>
	);
};

export const England = (props) => {
	return (
		<Card
			gradient='gradient-2'
			id={props.id}>
			<span></span>
		</Card>
	);
};

export const UnitedStates = (props) => {
	return (
		<Card
			gradient='gradient-3'
			id={props.id}>
			<span></span>
		</Card>
	);
};

export const China = (props) => {
	return (
		<Card
			gradient='gradient-4'
			id={props.id}>
			<span></span>
		</Card>
	);
};

export const Swiss = (props) => {
	return (
		<Card
			gradient='gradient-5'
			id={props.id}>
			<span></span>
		</Card>
	);
};

export const Ireland = (props) => {
	return (
		<Card
			gradient='gradient-6'
			id={props.id}>
			<span></span>
		</Card>
	);
};
