import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Greeting } from "./components/Greeting";
import { CustomHeader } from "./components/CustomHeader"; // Import af CustomHeader

function App() {
	return (
		<>
			<Header />
			<Main>
				{/* Brug af CustomHeader med prop */}
				<CustomHeader headerText="Props er cool" />
				{/* Tilføj en enkelt Greeting komponent med ét navn */}
				<Greeting name="Rolf" />
			</Main>
			<Footer />
		</>
	);
}

export default App;
