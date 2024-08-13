import React from "react";
import styles from "./Main.module.scss";

export function Main() {
	return (
		<main className={styles.mainContent}>
			<p className={styles.mainHighlight}>Rolfs hovedindhold af siden.</p>
		</main>
	);
}
