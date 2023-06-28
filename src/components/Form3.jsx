import React, { useState } from "react";
import styles from "../assets/scss/AdmissionForm.module.scss";

const Form3 = ({ active, setActive }) => {
	const [Name, setName] = useState("");
	const [Age, setAge] = useState("");
	const [Nationality, setNationality] = useState("");
	const [EducationalQualification, setEducationalQualification] = useState("");
	const [Institution, setInstitution] = useState("");
	const [Occupation, setOccupation] = useState("");
	const [Designation, setDesignation] = useState("");
	const [OfficialAddress, setOfficialAddress] = useState("");
	const [AnnualIncome, setAnnualIncome] = useState("");
	const [MobileNumber, setMobileNumber] = useState("");

	const handelForm3Submit = () => {
		setActive("form4");
	};

	return (
		<div className={styles.form3} style={{ display: active === "form3" ? "block" : "none" }}>
			<h1>Family Information </h1>
			
			<div className={styles.Container}>
				<div className={styles.Left}>
					<div className={styles.SingleInputContainer}>
						<label>Name</label>
						<input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Age</label>
						<input type="number" value={Age} onChange={(e) => setAge(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Nationality</label>
						<input type="text" value={Nationality} onChange={(e) => setNationality(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Educational Qualification</label>
						<input type="text" value={EducationalQualification} onChange={(e) => setEducationalQualification(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Institution</label>
						<input type="text" value={Institution} onChange={(e) => setInstitution(e.target.value)} />
					</div>
				</div>

				<div className={styles.Right}>
					<div className={styles.SingleInputContainer}>
						<label>Occupation</label>
						<input type="text" value={Occupation} onChange={(e) => setOccupation(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Designation</label>
						<input type="text" value={Designation} onChange={(e) => setDesignation(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Official Address</label>
						<input type="text" value={OfficialAddress} onChange={(e) => setOfficialAddress(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Annual Income</label>
						<input type="text" value={AnnualIncome} onChange={(e) => setAnnualIncome(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Mobile Number</label>
						<input type="text" value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
					</div>

					<div className={styles.ButtonContainer}>
						<button onClick={() => setActive("form2")}>Previous</button>
						<button onClick={handelForm3Submit}>Next</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form3;
