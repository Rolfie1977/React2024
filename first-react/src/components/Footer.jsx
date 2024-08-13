import React from "react";
import styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<p className={styles.footerText}>
				&copy; 2024 Min Hjemmeside. Alle rettigheder forbeholdes.
			</p>
		</footer>
	);
}

