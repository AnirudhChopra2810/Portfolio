import React, { useState, createRef } from 'react';
import Nav from './Nav';
import Home from './Home';
import CircularMenu from './Planet';

const App = () => {
	const [nav, setNav] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 60) {
			console.log('hello');
			setNav(true);
		} else {
			setNav(false);
		}
	};

	window.addEventListener('scroll', handleScroll);
	return (
		<>
			<Nav flag={nav} />
			<Home />
			<CircularMenu />
		</>
	);
};

export default App;

{
	/*  */
}
