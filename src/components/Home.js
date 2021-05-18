import react from 'react';
import Typewriter from 'typewriter-effect';
import { Grid, Image, Sticky } from 'semantic-ui-react';
import image from './image3.jpg';

const Home = (props) => {
	return (
		<>
			<Grid columns={2} centered>
				<Grid.Column>
					<h3 className="home">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('Hello there, my name is')
									.typeString('Anirudh Chopra, ')
									.typeString(' welcome to my Portfolio website.')
									.start();
							}}
						/>
					</h3>
				</Grid.Column>

				{/* <Grid.Column>
					<Image src={image} />
				</Grid.Column> */}
			</Grid>
		</>
	);
};

export default Home;
