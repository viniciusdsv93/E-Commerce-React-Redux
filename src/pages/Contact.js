import { Grid, Button, TextField } from "@mui/material";

const Contact = () => {
	return (
		<>
			<Grid container direction='row' gap={3}>
				<TextField id='name' label='Name' fullWidth />
				<TextField id='message' label='Message' fullWidth />
			</Grid>
			<Button variant='contained' color='primary' style={{ marginTop: "20px" }}>
				Sent
			</Button>
		</>
	);
};

export default Contact;
