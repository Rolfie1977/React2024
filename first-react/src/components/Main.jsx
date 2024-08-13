	import React from "react";
	import styles from "./Main.module.scss";

	export function Main(props) {
		return (
			<main className={styles.mainContent}>
				{/* Render hovedindholdet */}
				<p className={styles.mainHighlight}>Rolfs hovedindhold af siden.</p>

				{/* Render eventuelle children-komponenter, f.eks. Greeting */}
				{props.children}
			</main>
		);
	}
