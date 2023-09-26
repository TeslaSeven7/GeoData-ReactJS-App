import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Country } from './components/Country.jsx';
import { Card } from './components/Cards/Card';
import CardAlphabet from './components/Cards/CardAlphabet';
import { useState, useEffect, useRef } from 'react';
import viteImg from './vite-react-app.png';

function App() {
	const [countries, setCountries] = useState();
	const [countriesName, setCountriesName] = useState();

	const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	const alphabet = alpha.map((x) => String.fromCharCode(x));
	const [presentSubNames, setPresentSubNames] = useState([]);
	const presentNameMiddle = [];
	useEffect(() => {
		fetch('https://restcountries.com/v3.1/region/europe')
			.then((data) => data.json())
			.then((data) => {
				data.sort((a, b) => {
					if (a.name.common < b.name.common) {
						return -1;
					} else if (a.name.common > b.name.common) {
						return 1;
					} else {
						return 0;
					}
				});
				setCountries(data);
				for (let i = 0; i < data.length; i++) {
					presentNameMiddle.push(Array.from(data[i].name.common)[0]);
					let uniqueChars = [...new Set(presentNameMiddle)];
					setPresentSubNames(uniqueChars);
				}
			});
	}, []);
	function scrollToFirstLetter(a) {
		const child = document.querySelector(`[data-first-letter='${a}']`);
		if (child) {
			child.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center',
			});
		}
	}
	const ref = useRef();
	return (
		<div className='App'>
			<div className='container-fluid'>
				<div className='container col-xxl-8 px-4 py-5'>
					<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
						<div className='col-lg-6'>
							<h1 className='display-5 fw-bold lh-1 mb-3 text-start'>
								ReactJS/ViteJS Api driven project.
							</h1>
							<p className='lead text-start'>
								This project was done with :
								<ul className='p-1 ps-2'>
									<li>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='12'
											height='12'
											fill='#ffad2d'
											class='bi bi-check-circle-fill'
											viewBox='0 0 16 16'>
											<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
										</svg>
										<span class='ms-2'>ReactJs</span>
									</li>
									<li>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='12'
											height='12'
											fill='#ffad2d'
											class='bi bi-check-circle-fill'
											viewBox='0 0 16 16'>
											<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
										</svg>
										<span class='ms-2'>ViteJs</span>
									</li>
									<li>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='12'
											height='12'
											fill='#ffad2d'
											class='bi bi-check-circle-fill'
											viewBox='0 0 16 16'>
											<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
										</svg>
										<span class='ms-2'>Zustand</span>
									</li>
									<li>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='12'
											height='12'
											fill='#ffad2d'
											class='bi bi-check-circle-fill'
											viewBox='0 0 16 16'>
											<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
										</svg>
										<span class='ms-2'>FramerMotion</span>
									</li>
									<li>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='12'
											height='12'
											fill='#ffad2d'
											class='bi bi-check-circle-fill'
											viewBox='0 0 16 16'>
											<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
										</svg>
										<span class='ms-2'>Zustand</span>
									</li>
									<li>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='12'
											height='12'
											fill='#ffad2d'
											class='bi bi-check-circle-fill'
											viewBox='0 0 16 16'>
											<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
										</svg>
										<span class='ms-2'>& Bootstrap</span>
									</li>
								</ul>
							</p>
						</div>
						<div className='col-10 col-sm-8 col-lg-6'>
							<img
								src={viteImg}
								className='d-block mx-lg-auto img-fluid'
								loading='lazy'
							/>
						</div>
					</div>
				</div>
				<div className='row position-relative bottom-25'>
					<div className='col-lg-2 col-md-1 sticky-top d-flex align-items-lg-end  align-items-md-start'>
						<div className='row h-25 w-100 ps-xl-5'>
							{alphabet &&
								alphabet.map((letter) => (
									<CardAlphabet
										onClick={() => scrollToFirstLetter(letter)}
										key={letter}
										letter={letter}
										presentLetter={presentSubNames}
									/>
								))}
						</div>
					</div>
					<div className='col-lg-5 col-5 ps-md-2 ps-5 text-col'>
						<div className='countries'>
							<ul ref={ref}>
								{countries &&
									countries.map((country, id) => (
										<Country
											dataFirstLetter={Array.from(country.name.common)[0]}
											key={id}
											id={id}
											name={country.name.common}
											sub={country.altSpellings[0]}
										/>
									))}
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-md-5 col-7 sticky-top d-flex align-items-center'>
						<div className='ratio ratio-4x3 rounded-5 w-100'>
							{countries &&
								countries.map((country, id) => (
									<Card
										key={id}
										id={id}
										name={country.name.common}
										countrySvg={country.flags.svg}
										infos={country}
									/>
								))}
						</div>
					</div>
				</div>
				<div className='hero'></div>
			</div>
		</div>
	);
}

export default App;
