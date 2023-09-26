import React from 'react';

export default function ModalContent({ country, closeModal }) {
	console.log(country);
	return (
		<div
			className='fixed-top bg-black bg-opacity-75 w-100 h-100 d-flex align-items-center justify-content-center z-10'
			onClick={closeModal}>
			<div
				className='bg-white rounded-4 position-relative p-5 w-25'
				onClick={(e) => e.stopPropagation()}>
				<button
					className='position-absolute top-25 m-2 top-0 end-0 w-10 h-10 d-flex align-items-center justify-content-center bg-danger border-0 rounded-2 px-2 text-white'
					onClick={closeModal}>
					X
				</button>
				<h2 className='h4 mb-4'>
					Here is {country.name.common}'s informations :
				</h2>
				<p className=' h5 mb-2 fw-normal'>
					<span className='fw-semibold'>Language(s) : </span>
					{Object.entries(country.languages).map((lang) => lang[1] + ' ')}
				</p>
				<p className=' h5 mb-2 fw-normal'>
					<span className='fw-semibold'>Capital : </span>
					{country.capital[0]}
				</p>
				<p className=' h5 mb-2 fw-normal'>
					<span className='fw-semibold'>Population : </span>
					{country.population}
				</p>
			</div>
		</div>
	);
}
