import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Country } from './components/Country.jsx';
import {
	France,
	England,
	UnitedStates,
	China,
	Swiss,
	Ireland,
} from './components/Cards/Card.jsx';

function App() {
	
	const countries = [
		{ id: 1, card: France, sub: 'FR', name: 'France' },
		{ id: 2, card: England, sub: 'EN', name: 'England' },
		{ id: 3, card: UnitedStates, sub: 'US', name: 'United States' },
		{ id: 4, card: China, sub: 'CH', name: 'China' },
		{ id: 5, card: Swiss, sub: 'SW', name: 'Swiss' },
		{ id: 6, card: Ireland, sub: 'IR', name: 'Ireland' },
	];
	return (
		<div className='App'>
			<div className='container'>
				<div className='hero'></div>
				<div className='row'>
					<div className='col-lg-7 text-col'>
						<div className='countries'>
							<ul>
								{countries.map(({ name, sub, id }) => (
									<Country
										key='countrylist'
										name={name}
										sub={sub}
										id={id}
									/>
								))}
							</ul>
						</div>
					</div>
					<div className='col-lg-5 sticky-top d-flex align-items-center'>
						<div className='ratio ratio-1x1 rounded-5 w-100'>
							{countries.map((country) => (
								<country.card
									key={country.id}
									id={country.id}
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
