import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Greeting } from "./components/Greeting";
import { CustomHeader } from "./components/CustomHeader"; // Import af CustomHeader
import { FavoriteDishes } from "./components/FavoriteDishes"; // Import af FavoriteDishes

function App() {
	const myDishes = ["Pizza", "Sushi", "Bøf", "Tacos", "Pasta"]; // Array med livretter
	return (
		<>
			<Header />
			<Main>
				{/* Brug af CustomHeader med prop */}
				<CustomHeader headerText="Props er cool" />
				{/* Tilføj en enkelt Greeting komponent med ét navn */}
				<Greeting name="Rolf" />
				 {/* Brug af FavoriteDishes med livretter array */}
				 <FavoriteDishes dishes={myDishes} />
			</Main>
			<Footer />
		</>
	);
}

export default App;
