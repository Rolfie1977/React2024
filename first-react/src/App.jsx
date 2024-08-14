import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Greeting } from "./components/Greeting";
import { CustomHeader } from "./components/CustomHeader";
import { FavoriteDishes } from "./components/FavoriteDishes";
import { Button } from "./components/Button"; // Import af Button

function App() {
	const myDishes = ["Pizza", "Sushi", "Bøf", "Tacos", "Pasta"]; // Array med livretter

	// Definer funktioner til knapperne
	const handleClick1 = () => alert("Knap 1 trykket!");
	const handleClick2 = () => alert("Knap 2 trykket!");
	const handleClick3 = () => alert("Knap 3 trykket!");

	return (
		<>
			<Header />
			<Main>
				<CustomHeader headerText="Props er cool" />
				<Greeting name="Rolf" />
				<FavoriteDishes dishes={myDishes} />

				{/* Tilføjelse af Button komponenter med forskellige props */}
				<Button
					action={handleClick1}
					size="small"
					theme="light"
					text="Knap 1"
				/>
				<Button
					action={handleClick2}
					size="medium"
					theme="dark"
					text="Knap 2"
				/>
				<Button
					action={handleClick3}
					size="large"
					theme="light"
					text="Knap 3"
				/>
			</Main>
			<Footer />
		</>
	);
}

export default App;
