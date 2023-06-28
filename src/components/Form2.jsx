import React, { useState } from "react";
import styles from "../assets/scss/AdmissionForm.module.scss";

const Form2 = ({ active, setActive }) => {
	const [admissionClass, setAdmissionClass] = useState("");
	const [religion, setReligion] = useState("");
	const [nationality, setNationality] = useState("");
	const [cast, setCast] = useState("");
	const [l1, setL1] = useState("");
	const [l2, setL2] = useState("");
	const [l3, setL3] = useState("");
	const [rAddress, setRAddress] = useState("")
	const [rTel, setRTel] = useState("")
	const [rFax, setRFax] = useState("")
	const [cAddress, setCAddress] = useState("")
	const [cTel, setCTel] = useState("")
	const [cFax, setCFax] = useState("")
	const [distance, setDistance] = useState("")
	const [phone, setPhone] = useState("")
	const [ePhone, setEPhone] = useState("")
	const [name, setName] = useState("")
	const [relationship, setRelationship] = useState("")

	const handelForm2Submit = () => {
		setActive("form3");
	};

	return (
		<div className={styles.form2} style={{ display: active === "form2" ? "block" : "none" }}>
			<h1>Information of Child</h1>
			<div className={styles.Container}>
				<div className={styles.Left}>
					<div className={styles.SingleInputContainer}>
						<label>Class for which admission is sought</label>
						<input type="text" value={admissionClass} onChange={(e) => setAdmissionClass(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Religion</label>
						<input type="text" value={religion} onChange={(e) => setReligion(e.target.value)} />
					</div>

					<div className={styles.DoubleInputContainer}>
						<div className={styles.LeftInput}>
							<label>Nationality</label>
							<input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
						</div>

						<div className={styles.RightInput}>
							<label>SC / ST / General</label>
							<input type="text" value={cast} onChange={(e) => setCast(e.target.value)} />
						</div>
					</div>

					<div className={styles.DoubleInputContainer}>
						<div className={styles.LeftInput}>
							<label>Languages Known</label>
							<input type="text" value={l1} onChange={(e) => setL1(e.target.value)} />
						</div>

						<div className={styles.RightInput}>
							<label></label>
							<input type="text" value={l2} onChange={(e) => setL2(e.target.value)} />
						</div>
					</div>

					<div className={styles.DoubleInputContainer}>
						<div className={styles.LeftInput}>
							<label></label>
							<input type="text" value={l3} onChange={(e) => setL3(e.target.value)} />
						</div>
						<div className={styles.RightInput}></div>
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Residential Address</label>
						<textarea defaultValue={rAddress} onChange={(e) => setRAddress(e.target.value)}></textarea>
					</div>

					<div className={styles.DoubleInputContainer}>
						<div className={styles.LeftInput}>
							<label>Tel</label>
							<input type="number" value={rTel} onChange={(e) => setRTel(e.target.value)} />
						</div>

						<div className={styles.RightInput}>
							<label>Fax</label>
							<input type="number" value={rFax} onChange={(e) => setRFax(e.target.value)} />
						</div>
					</div>
				</div>

				<div className={styles.Right}>
					<div className={styles.SingleInputContainer}>
						<label>Correspondence Address</label>
						<textarea defaultValue={cAddress} onChange={(e) => setCAddress(e.target.value)}></textarea>
					</div>

					<div className={styles.DoubleInputContainer}>
						<div className={styles.LeftInput}>
							<label>Tel</label>
							<input type="number" value={cTel} onChange={(e) => setCTel(e.target.value)} />
						</div>

						<div className={styles.RightInput}>
							<label>Fax</label>
							<input type="number" value={cFax} onChange={(e) => setCFax(e.target.value)} />
						</div>
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Distance from school (in Kms):</label>
						<input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Preferred Phone Number for school SMS:</label>
						<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Emergency Contact Numbers Mobile No</label>
						<input type="text" value={ePhone} onChange={(e) => setEPhone(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Name of the person to be contacted</label>
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Relationship</label>
						<input type="text" value={relationship} onChange={(e) => setRelationship(e.target.value)} />
					</div>

					<div className={styles.ButtonContainer}>
						<button onClick={()=>setActive("form1")}>Previous</button>
						<button onClick={handelForm2Submit}>Next</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form2;
