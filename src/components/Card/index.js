import { useDispatch } from "react-redux";
import { addItem } from "../../redux/reducers/cartReducer";
import { Button, Grid, Paper, Typography } from "@mui/material";

const Card = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<Grid item xs={6} sm={4} md={3}>
			<Paper style={{ padding: "25px", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}>
				<Grid container direction='column' justifyContent='center' alignItems='center'>
					<Grid item>
						<img width='140px' src={product.image} alt={product.name_product} />
						<Typography variant='h6'>{product.name_product}</Typography>
						<Typography variant='subtitle1' textAlign='center'>
							R$ {product.price}
						</Typography>
					</Grid>
					<Button
						variant='contained'
						onClick={() => {
							dispatch(addItem(product));
						}}
					>
						Adicionar
					</Button>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default Card;
