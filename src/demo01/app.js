import React from 'react';
import {BrowserRouter , Link , Route} from 'react-router-dom'
import './app.css';

function Home(){
	return <div className='home'>Home</div>
}

function Product(){
	return <div className='product'>Product</div>
}

function About(){
	return <div className='about'>About</div>
}

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className='hd'>
					<Link to='/home'>home</Link>
					<Link to='/product'>product</Link>
					<Link to='/about'>A bout</Link>
				</div>
				<div className='bd'>
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='/product'>
						<Product />
					</Route>
					<Route path='/about'>
						<About /> 
					</Route>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
