import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Container maxWidth='xl'>
			<BrowserRouter>
				<Header />
				<Routes />
				<Footer />
			</BrowserRouter>
		</Container>
	);
};

export default App;
