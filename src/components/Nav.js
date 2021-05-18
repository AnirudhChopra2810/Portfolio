import React, { useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Typewriter from 'typewriter-effect';

const Nav = ({ flag }) => {
	const style1 = {
		backgroundColor: 'black'
	};

	const style2 = {
		background: '0 0',
		marginLeft: '-0.35714286em',
		marginRight: '-0.35714286em',
		borderRadius: '0',
		border: 'none'
	};

	return (
		<div>
			<Menu fixed="top" secondary style={flag ? style1 : style2}>
				<Menu.Item
					header
					style={
						flag
							? {
									margin: '0',
									background: '0 0',
									boxShadow: 'none',
									fontSize: '1.5rem',
									fontFamily: 'ArquitectaHeavy',
									color: 'white'
							  }
							: {
									margin: '0',
									background: '0 0',
									boxShadow: 'none',
									fontSize: '1.5rem',
									fontFamily: 'ArquitectaHeavy',
									color: '#171616'
							  }
					}
				>
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
		</div>
	);
};

export default Nav;
