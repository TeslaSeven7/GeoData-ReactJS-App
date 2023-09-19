import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';
import { useCountryStore } from './Cards/Store';

export const Country = (props) => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });

	const id = props.id;
	const countryStore = useCountryStore();

	useEffect(() => {
		if (isInView) {
			countryStore.setInViewCountry(id);
			console.log(countryStore);
		}
	}, [isInView, id]);

	return (
		<li
			key={props.key}
			ref={ref}
			className={classNames(
				'h1 content text-start fw-bold ' + props.id,
				isInView ? 'text-active' : ''
			)}>
			<p className={classNames(isInView ? 'text-active' : '')}>{props.name}</p>
			<p className={classNames(isInView ? 'text-active' : '')}>{props.sub}</p>
		</li>
	);
};
