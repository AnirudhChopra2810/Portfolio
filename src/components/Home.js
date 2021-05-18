import react from 'react';
import Typewriter from 'typewriter-effect';
import { Grid, Image, Sticky, Segment } from 'semantic-ui-react';
import image from './image3.jpg';

const Home = (props) => {
	return (
		<>
			<div className="home">
				<Grid columns="2">
					<Grid.Column>
						<h3 style={{ fontSize: '4.5rem', fontFamily: 'ArquitectaHeavy' }}>
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString(
											'Hello there, my name is Anirudh Chopra and Welcome to my Portfolio website.'
										)
										.pause(1000)
										.start();
								}}
							/>
						</h3>
					</Grid.Column>
					<Grid.Column>
						<Image src={image} />
					</Grid.Column>
				</Grid>
			</div>
		</>
	);
};

export default Home;
