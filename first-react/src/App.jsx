import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Greeting } from "./components/Greeting";

function App() {
	return (
		<>
			<Header />
			<Main>
				{/* Tilføj en enkelt Greeting komponent med ét navn */}
				<Greeting name="Rolf" />
							</Main>
			<Footer />
		</>
	);
}

export default App;
