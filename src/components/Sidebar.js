import react from 'react';
import { Sidebar, Menu, Icon, Segment, Header, Image } from 'semantic-ui-react';

const SideBar = ({ visible, setVisible }) => {
	return (
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
			>
				<Menu.Item as="a">
					<Icon name="home" />
					Home
				</Menu.Item>
				<Menu.Item as="a">
					<Icon name="gamepad" />
					Games
				</Menu.Item>
				<Menu.Item as="a">
					<Icon name="camera" />
					Channels{' '}
				</Menu.Item>
			</Sidebar>
		</Sidebar.Pushable>
	);
};

export default SideBar;
