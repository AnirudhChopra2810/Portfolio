import React from 'react';
import { Menu, Header, Icon, Button, Segment, Grid, Breadcrumb, Container, Popup } from 'semantic-ui-react';
import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';
import Home from './Home';
import { Planet } from 'react-planet';

const sections = [
	{ key: 'Home', content: 'Home', link: true },
	{ key: 'Store', content: 'About', link: true },
	{ key: 'Skills', content: 'Skills', link: true },
	{ key: 'Contact', content: 'Contact', link: true }
];

const App = () => {
	const [eventsEnabled, setEventsEnabled] = React.useState(true);
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<Menu secondary color="black">
				<Menu.Item header>
					<Icon name="react" />
					<Typewriter
						options={{ cursor: '' }}
						onInit={(typewriter) => {
							typewriter.typeString(' PORTFOLIO.').pause(1000).start();
						}}
					/>
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item>
						<Icon circular name="instagram" inverted style={{ backgroundColor: 'black' }} size="large" />
					</Menu.Item>
					<Menu.Item>
						<Icon circular name="facebook" inverted size="large" style={{ backgroundColor: 'black' }} />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
			<Home />
			<div className="planet">
				<Planet
					hideOrbit
					rotation={45}
					orbitRadius={120}
					centerContent={
						<Popup
							content="Click Me!"
							eventsEnabled={eventsEnabled}
							on="hover"
							onClose={() => setOpen(false)}
							onOpen={() => setOpen(true)}
							open={open}
							trigger={
								<div
									style={{
										height: '5rem',
										width: '5rem',
										borderRadius: '50%',
										backgroundColor: '#171616'
									}}
								/>
							}
						/>
					}
					autoClose
				>
					<Popup
						content="Home"
						trigger={
							<Button
								circular
								icon="home"
								size="big"
								style={{
									color: 'black',
									backgroundColor: 'white'
								}}
								onClick={() => {}}
							/>
						}
					/>

					<Popup
						content="About"
						trigger={
							<Button
								circular
								icon="group"
								size="big"
								style={{
									color: 'black',
									backgroundColor: 'white'
								}}
							/>
						}
					/>
					<Popup
						content="Skills"
						trigger={
							<Button
								circular
								icon="eye"
								size="big"
								style={{
									color: 'black',
									backgroundColor: 'white'
								}}
							/>
						}
					/>
					<Popup
						content="Contact"
						trigger={
							<Button
								circular
								icon="mail"
								size="big"
								style={{
									color: 'black',
									backgroundColor: 'white'
								}}
							/>
						}
					/>
				</Planet>
			</div>
			{/* <Particles
				params={{
					particles: {
						number: {
							value: 50
						},
						size: {
							value: 3
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
			/> */}
		</>
	);
};

export default App;

{
	/*  */
}
