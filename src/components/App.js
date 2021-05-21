import React, { useState, createRef } from 'react';
import Particles from 'react-particles-js';
import Nav from './Nav';
import Home from './Home';
import CircularMenu from './Planet';
import SideBar from './Sidebar';

const App = () => {
	const [nav, setNav] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 60) {
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
			{/* <SideBar visible={visible} setVisible={setVisible} /> */}

			<Particles
				style={{ color: '#111210' }}
				params={{
					particles: {
						number: {
							value: 70
						},
						size: {
							value: 3
						},
						color: {
							value: '#000000'
						},
						line_linked: {
							color: '#000000'
						}
					},
					interactivity: {
						events: {
							onHover: {
								enable: true,
								mode: 'repulse'
							}
						}
					}
				}}
				height="165vh"
			/>
		</>
	);
};

export default App;

{
	/*  */
}
