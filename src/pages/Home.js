import { useSelector } from "react-redux";
import Card from "../components/Card";
import { Grid } from "@mui/material";

const Home = () => {
	const productsList = useSelector((state) => state.productsList);

	return (
		<Grid container spacing={2} columns={9}>
			{productsList.map((product, index) => {
				return <Card product={product} key={index} />;
			})}
		</Grid>
	);
};

export default Home;
