import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import Cart from "../Cart";

function Header() {
	return (
		<Grid
			container
			justifyContent='space-between'
			alignItems='center'
			style={{ marginBottom: "40px", height: "100px" }}
		>
			<Typography variant='h3' fontWeight='500'>
				Soccer T-Shirts
			</Typography>
			<Link to='/'>
				<Button variant='contained'>Home</Button>
			</Link>
			<Link to='/contact'>
				<Button variant='contained'>Contact</Button>
			</Link>
			<Cart />
		</Grid>
	);
}

export default Header;
