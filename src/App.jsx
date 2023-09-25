import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Country } from './components/Country.jsx';
import { Card } from './components/Cards/Card';
import { useState, useEffect } from 'react';

function App() {
	const [countries, setCountries] = useState();
	const [countriesName, setCountriesName] = useState();
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
			});
	}, []);
	return (
		<div className='App'>
			<div className='container'>
				<div className='hero'></div>
				<div className='row'>
					<div className='col-lg-7 text-col'>
						<div className='countries'>
							<ul>
								{countries &&
									countries.map((country, id) => (
										<Country
											key={id}
											id={id}
											name={country.name.common}
											sub={country.altSpellings[0]}
										/>
									))}
							</ul>
						</div>
					</div>
					<div className='col-lg-5 sticky-top d-flex align-items-center'>
						<div className='ratio ratio-4x3 rounded-5 w-100'>
							{countries &&
								countries.map((country, id) => (
									<Card
										key={id}
										id={id}
										name={country.name.common}
										countrySvg={country.flags.svg}
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
