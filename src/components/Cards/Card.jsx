import classNames from 'classnames';
import { useCountryStore } from './Store.jsx';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent.jsx';

export const Card = (props) => {
	const [showModal, setShowModal] = useState(false);
	const id = props.id;
	const countryStore = useCountryStore();
	return (
		<>
			<div
				className={classNames(
					'position-absolute h-100 w-100 rounded-5 w-100 d-flex align-items-end justify-content-end flex-column p-4',
					countryStore.inViewCountry === id ? 'opacity-1' : 'opacity-0'
				)}>
				<img
					src={props.countrySvg}
					className='country-flag border'
					alt=''
				/>
				<button
					onClick={() => setShowModal(!showModal)}
					className='w-25 rounded-5 py-1 bg-black text-white border-0 z-1'>
					Show
				</button>
			</div>
			{showModal &&
				createPortal(
					<ModalContent
						country={props.infos}
						closeModal={() => setShowModal(!showModal)}
					/>,
					document.body
				)}
		</>
	);
};
