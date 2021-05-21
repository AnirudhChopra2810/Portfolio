import React, { useState } from 'react';
import { Planet } from 'react-planet';
import { Popup, Button, Icon, Sidebar, Segment, Menu, Grid, Checkbox, Header, Image } from 'semantic-ui-react';

const CircularMenu = () => {
	const [eventsEnabled, setEventsEnabled] = useState(true);
	const [open, setOpen] = useState(true);
	const [visible, setVisible] = React.useState(true);

	return (
		<>
			<Grid columns={1}>
				<Grid.Column>
					<Sidebar.Pushable as={Segment}>
						<Sidebar
							as={Menu}
							animation="overlay"
							icon="labeled"
							inverted
							onHide={() => setVisible(false)}
							vertical
							visible={visible}
							width="thin"
						></Sidebar>

						<Sidebar.Pusher>
							<Segment basic>Hello</Segment>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</Grid.Column>
			</Grid>
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
										height: '6rem',
										width: '6rem',
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
								size="massive"
								style={{
									color: 'black',
									backgroundColor: 'white'
								}}
								onClick={() => {
									setVisible(true);
								}}
							/>
						}
					/>

					<Popup
						content="About"
						trigger={
							<Button
								circular
								icon="group"
								size="massive"
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
								size="massive"
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
								size="massive"
								style={{
									color: 'black',
									backgroundColor: 'white'
								}}
							/>
						}
					/>
				</Planet>
			</div>
		</>
	);
};

export default CircularMenu;
