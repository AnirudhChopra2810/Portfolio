import React, { useState, createRef } from 'react';
import Particles from 'react-particles-js';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import CircularMenu from './Planet';
import SideBar from './Sidebar';

const App = () => {
	const [about, setAbout] = useState(false);

	return (
		<>
			<Home />
			{/* {about === true && <About />} */}
			{/* <CircularMenu about={about} setAbout={setAbout} />
			<SideBar visible={visible} setVisible={setVisible} /> */}
			{/* 
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
			/> */}
		</>
	);
};

export default App;

{
	/*  */
}
