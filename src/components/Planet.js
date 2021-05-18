import React, { useState } from 'react';
import { Planet } from 'react-planet';
import { Popup, Button, Icon } from 'semantic-ui-react';

const CircularMenu = () => {
	const [eventsEnabled, setEventsEnabled] = useState(true);
	const [open, setOpen] = useState(false);

	return (
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
	);
};

export default CircularMenu;
