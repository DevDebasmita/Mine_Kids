import React, { useState } from "react";
import styles from "../assets/scss/AdmissionForm.module.scss";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Form4 from "../components/Form4";

const AdmissionForm = () => {
	const [active, setActive] = useState("form1");

	return (
		<div className={styles.AdmissionForm}>
			<div className={styles.MainContainer}>
				<div className={styles.ContentContainer}>
					<Form1 active={active} setActive={setActive} />
					<Form2 active={active} setActive={setActive} />
					<Form3 active={active} setActive={setActive} />
					<Form4 active={active} setActive={setActive} />
				</div>

				<div className={styles.DotContainer}>
					<button className={active === "form1" ? styles.active : ""}></button>
					<button className={active === "form2" ? styles.active : ""}></button>
					<button className={active === "form3" ? styles.active : ""}></button>
					<button className={active === "form4" ? styles.active : ""}></button>
				</div>
			</div>
		</div>
	);
};

export default AdmissionForm;
