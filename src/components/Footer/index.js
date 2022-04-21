import { Grid } from "@mui/material";

const Footer = () => {
	return (
		<Grid container direction='column' justifyContent='center' alignItems='center' height='100px'>
			<Grid item>
				<h4>
					Developed by{" "}
					<a href='https://github.com/viniciusdsv93' target='_blank'>
						Vinícius dos Santos Verissimo
					</a>{" "}
					- 2022
				</h4>
			</Grid>
		</Grid>
	);
};

export default Footer;
