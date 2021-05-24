import react from 'react';
import Typewriter from 'typewriter-effect';
import { Grid, Image, Sticky, Segment, Container } from 'semantic-ui-react';
import image from './pic.jpeg';
import Nav from './Nav';

const Home = () => {
	return (
		<>
			<Nav />
			<div className="home">
				<Grid columns="15" stackable textAlign="center">
					<Grid.Column>
						<Container text>
							<h3 className="typewriter" style={{ fontSize: '4.5rem', fontFamily: 'ArquitectaHeavy' }}>
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.typeString(
												'Hello there, Iam Anirudh Chopra and welcome to my portfolio website.  Scroll down to know more.'
											)
											.pause(1000)
											.start();
									}}
								/>
							</h3>
						</Container>
					</Grid.Column>
				</Grid>
			</div>
		</>
	);
};

export default Home;
