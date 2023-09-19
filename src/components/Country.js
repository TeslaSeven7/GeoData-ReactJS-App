import { useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';
export const Country = (props) => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
	return (
		<ul>
			<li
				key={props.id}
				ref={ref}
				className={classNames(
					'h1 content text-start fw-bold',
					isInView ? 'text-active' : ''
				)}>
				<p className={classNames(isInView ? 'text-active' : '')}>
					{props.name}
				</p>
				<p className={classNames(isInView ? 'text-active' : '')}>{props.sub}</p>
			</li>
		</ul>
	);
};
