import react from 'react';
import Typewriter from 'typewriter-effect';
import { Grid, Image } from 'semantic-ui-react';

const Home = () => {
	return (
		<>
			<Grid columns={2} centered>
				<Grid.Column>
					<h3 className="home">
						<Typewriter
							options={{ cursor: '' }}
							onInit={(typewriter) => {
								typewriter
									.typeString('Hello their, Welcome to my Portfolio website.')
									.pause(1000)
									.start();
							}}
						/>
					</h3>
				</Grid.Column>

				<Grid.Column>
					<Image src="C:\My Projects\portfolio website\portfolio\src\components\image1.png" />
				</Grid.Column>
			</Grid>
		</>
	);
};

export default Home;
