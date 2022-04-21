import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
};

export default MainRoutes;
