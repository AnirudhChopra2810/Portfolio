import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Planet } from 'react-planet';
import SideBar from './Sidebar';
import { Popup, Button, Icon, Sidebar, Segment, Menu, Grid, Checkbox, Header, Image } from 'semantic-ui-react';
//import Description from './Modal';

const CircularMenu = ({ setAbout }) => {
	const [eventsEnabled, setEventsEnabled] = useState(true);
	const [visible, setVisible] = React.useState(true);
	const [open, setOpen] = React.useState(true);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [home, setHome] = useState(false);
	const [skill, setSkill] = useState(false);
	const [contact, setContact] = useState(false);
	const history = useHistory();

	return (
		<>
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
									setAbout(false);
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
								onClick={() => {
									setAbout(true);
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
								onClick={() => {
									setModalOpen(true);
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
								onClick={() => {
									setModalOpen(true);
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
