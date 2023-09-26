import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountryStore } from './Cards/Store';
import classNames from 'classnames';

export const Country = (props) => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
	const id = props.id;
	const countryStore = useCountryStore();
	const firstLetter = props.dataFirstLetter;

	useEffect(() => {
		if (isInView) {
			countryStore.setInViewCountry(id);
		}
		if (!isInView && countryStore.inViewCountry === id) {
			countryStore.setInViewCountry(null);
		}
	}, [isInView, id]);

	const handleClick = () => {
		ref.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		});
	};

	return (
		<li
			onClick={handleClick}
			ref={ref}
			data-first-letter={firstLetter}
			className={classNames(
				'h1 content text-start fw-bold ' + props.id,
				isInView ? 'text-active' : ''
			)}>
			<p className={classNames('fs-5', isInView ? 'text-active' : '')}>
				{props.sub}
			</p>
			<p className={classNames(isInView ? 'text-active' : '')}>{props.name}</p>
		</li>
	);
};
export default Country;
