import React from 'react';

export default function ModalContent({ country, closeModal }) {
	console.log('YALA');
	return (
		<div className='fixed-top bg-black bg-opacity-75 w-100 h-100 d-flex align-items-center justify-content-center z-10'>
			<div className='bg-white rounded-4 position-relative p-5 w-25'>
				<button
					className='position-absolute top-25 m-2 top-0 end-0 w-10 h-10 d-flex align-items-center justify-content-center bg-danger border-0 rounded-2 px-2 text-white'
					onClick={closeModal}>
					X
				</button>
			</div>
		</div>
	);
}
