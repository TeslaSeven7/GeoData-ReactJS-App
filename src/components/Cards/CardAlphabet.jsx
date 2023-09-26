import classNames from 'classnames';

export default function CardAlphabet(props) {
	const clickToLetter = props.onClick;
	return (
		<div
			className='col-lg-2 col-md-12'
			onClick={() => clickToLetter(props.letter)}>
			<span
				className={classNames(
					'rounded-5 border py-1 px-2 d-flex align-items-center justify-content-center',
					props.presentLetter.includes(props.letter)
						? 'text-active fw-medium cursor-pointer'
						: 'text-muted fw-light cursor-normal'
				)}>
				{props.letter}
			</span>
		</div>
	);
}
