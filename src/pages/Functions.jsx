import React from "react";
import styles from "../assets/scss/Functions.module.scss";
import SetTitle from "../components/SetTitle";
import { useEffect } from "react";

const Functions = () => {
	SetTitle("School Functions");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.Functions}>
			<h1>Our school Functions</h1>

			<div className={styles.Wrapper}>
				<img src="https://picsum.photos/200/300" alt="" />
			</div>
			<div className={styles.Wrapper}>
				<img src="https://picsum.photos/200/300" alt="" />
			</div>
			<div className={styles.Wrapper}>
				<img src="https://picsum.photos/200/300" alt="" />
			</div>
			<div className={styles.Wrapper}>
				<img src="https://picsum.photos/200/300" alt="" />
			</div>
			<div className={styles.Wrapper}>
				<img src="https://picsum.photos/200/300" alt="" />
			</div>
			<div className={styles.Wrapper}>
				<img src="https://picsum.photos/200/300" alt="" />
			</div>
			<div className={styles.Wrapper}>
				<img src="https://picsum.photos/200/300" alt="" />
			</div>
		</div>
	);
};

export default Functions;
