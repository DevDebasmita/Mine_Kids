import React, { useRef, useState } from "react";
import logo from "../assets/images/Logo2.png";
import upload from "../assets/images/upload.png";
import styles from "../assets/scss/AdmissionForm.module.scss";
import callRound from "../assets/svg/callRound.svg";
import location from "../assets/svg/location.svg";

const Form1 = ({ active, setActive }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [date, setDate] = useState("");
	const [fatherImg, setFatherImg] = useState(null);
	const [motherImg, setMotherImg] = useState(null);
	const [childImg, setChildImg] = useState(null);
	const fatherRef = useRef();
	const motherRef = useRef();
	const childRef = useRef();

	const handelForm1Submit = () => {
		setActive("form2");
	};

	return (
		<div className={styles.form1} style={{ display: active === "form1" ? "flex" : "none" }}>
			<div className={styles.Top}>
				<div className={styles.Left}>
					<img src={logo} alt="" />
				</div>
				<div className={styles.Right}>
					<h4>MINE KIDS PRESCHOOL</h4>
					<div className={styles.inner}>
						<img src={location} alt="" />
						<p>MDL-7, Shanti Vihar,Housing Board Colony Baramunda Bhubaneswar,pin 751003</p>
					</div>
					<div className={styles.inner}>
						<img src={callRound} alt="" />
						<p>8917327419, +91 83380 26545</p>
					</div>
				</div>
			</div>

			<h1>Application Form</h1>

			<h2>Information To child</h2>

			<div className={styles.UploadContainer}>
				<div className={styles.Box} onClick={() => fatherRef.current.click()}>
					<input
						type="file"
						style={{ display: "none" }}
						ref={fatherRef}
						onChange={(e) => setFatherImg(e.target.files[0])}
					/>
					<img src={upload} alt="" />
					<p>{fatherImg ? fatherImg.name : "Upload Affix photo of Father"}</p>
				</div>

				<div className={styles.Box} onClick={() => motherRef.current.click()}>
					<input
						type="file"
						style={{ display: "none" }}
						ref={motherRef}
						onChange={(e) => setMotherImg(e.target.files[0])}
					/>
					<img src={upload} alt="" />
					<p>{motherImg ? motherImg.name : "Upload Affix photo of Mother"}</p>
				</div>

				<div className={styles.Box} onClick={() => childRef.current.click()}>
					<input
						type="file"
						style={{ display: "none" }}
						ref={childRef}
						onChange={(e) => setChildImg(e.target.files[0])}
					/>
					<img src={upload} alt="" />
					<p>{childImg ? childImg.name : "Upload Affix photo of Child"}</p>
				</div>
			</div>

			<div className={styles.FormContainer}>
				<div className={styles.SingleInputContainer}>
					<label>First Name</label>
					<input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
				</div>

				<div className={styles.SingleInputContainer}>
					<label>Last Name</label>
					<input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</div>

				<div className={styles.DoubleInputContainer}>
					<div className={styles.LeftInput}>
						<label>Gender</label>
						<select defaultValue={gender} onChange={(e) => setGender(e.target.value)}>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>

					<div className={styles.RightInput}>
						<label>Date</label>
						<input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
					</div>
				</div>

				<a href="#top" onClick={handelForm1Submit}>Next</a>
			</div>
		</div>
	);
};

export default Form1;
