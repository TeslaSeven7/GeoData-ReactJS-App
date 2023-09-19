import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './components/Country.js';
import { Country } from './components/Country.js';
function App() {
	const countries = [
		{ id: 1, sub: 'FR', name: 'France' },
		{ id: 2, sub: 'EN', name: 'England' },
		{ id: 3, sub: 'US', name: 'United States' },
		{ id: 4, sub: 'CH', name: 'China' },
		{ id: 5, sub: 'SW', name: 'Swiss' },
		{ id: 6, sub: 'IR', name: 'Ireland' },
		{ id: 7, sub: 'UK', name: 'United Kingdom' },
	];
	return (
		<div className='App'>
			<div className='container'>
				<div className='hero'></div>
				<div className='row'>
					<div className='col-lg-7 text-col'>
						<div className='countries'>
							{countries.map(({ name, sub, id }) => (
								<Country
									name={name}
									sub={sub}
									id={id}
								/>
							))}
						</div>
					</div>
					<div className='col-lg-5 sticky-top d-flex align-items-center'>
						<p className='h1 mt-5 fw-bold img-slick'></p>
					</div>
				</div>
				<div className='hero'></div>
			</div>
		</div>
	);
}

export default App;
