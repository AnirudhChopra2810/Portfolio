import React, { useEffect } from 'react';
import Nav from './Nav';
import Typewriter from 'typewriter-effect';
import { Segment, Header, Grid, Icon, Button, Search } from 'semantic-ui-react';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Nav />

			<div className="about">
				<Grid columns={2} stackable textAlign="center">
					<Grid.Column>
						<h3 className="typewriter" style={{ fontSize: '4.5rem', fontFamily: 'ArquitectaHeavy' }}>
							Hello there, Iam Anirudh Chopra and welcome to my portfolio website. Scroll down to know
							more
						</h3>
					</Grid.Column>

					<Grid.Column>
						<Header icon>
							<Icon name="world" />
							Add New Country
						</Header>
						<Button primary>Create</Button>
					</Grid.Column>
				</Grid>
			</div>
		</>
	);
};

export default About;
