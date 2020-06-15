import React from 'react';
import Catalog from './Catalog.js'
import CategoryButtons from './CategoryButtons.js'
import './App.css';

function App() {
	return (
		<div>
			<header className='catalog-header'>
				<h1>Center for Teaching and Learning Excellence</h1>
				<h2>Catalog</h2>
			</header>
			<main className='App'>
				<CategoryButtons />
				<Catalog />
			</main>
		</div>
	);
}

export default App;