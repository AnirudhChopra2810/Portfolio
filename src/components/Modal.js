import react from 'react';
import { Modal, Image, Button, Icon, Header } from 'semantic-ui-react';

const Description = ({ open, home, skill, contact, about, setHome, setSkill, setContact, setAbout, setOpen }) => {
	return (
		<Modal
			basic
			onClose={() => {
				setOpen(false);
				setContact(false);
				setAbout(false);
				setSkill(false);
				setHome(false);
			}}
			onOpen={() => setOpen(true)}
			open={open}
			size="small"
		>
			<Header icon>
				{/* {home === true && <Icon name="home" />} */}
				{about === true && <Icon name="group" />}
				{skill === true && <Icon name="eye" />}
				{contact === true && <Icon name="mail" />}
				Archive Old Messages
			</Header>
			<Modal.Content>
				{home === true && <p></p>}
				{about === true && (
					<p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
				)}
				{skill === true && (
					<p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
				)}
				{contact === true && (
					<p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
				)}
			</Modal.Content>
			<Modal.Actions>
				<Button
					basic
					color="red"
					inverted
					onClick={() => {
						setOpen(false);
						setContact(false);
						setAbout(false);
						setSkill(false);
						setHome(false);
					}}
				>
					<Icon name="remove" /> No
				</Button>
				<Button
					color="green"
					inverted
					onClick={() => {
						setOpen(false);
						setContact(false);
						setAbout(false);
						setSkill(false);
						setHome(false);
					}}
				>
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default Description;
