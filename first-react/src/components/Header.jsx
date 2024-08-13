import React from "react";
import styles from "./Header.module.scss";

export function Header() {
	return (
		<header>
			<h1 className={styles.headerTitle}>Velkommen til Rolfs hjemmeside</h1>
			<h2 className={styles.headerSubtitle}>Her er en underoverskrift</h2>
		</header>
	);
}
