import React from "react";
import styles from "../assets/scss/AdmissionForm.module.scss";
import { useState } from "react";

const Form4 = ({ active, setActive }) => {
	const [PreviousSchool, setPreviousSchool] = useState("")
	const [Sibling, setSibling] = useState("")
	const [SchoolName, setSchoolName] = useState("")
	const [StaffWard, setStaffWard] = useState("")
	const [Designation, setDesignation] = useState("")

	const handelForm4Submit = () => {
		setActive("form1");
	};

	return (
		<div className={styles.form4} style={{ display: active === "form4" ? "block" : "none" }}>
			<h1>Family Information </h1>

			<div className={styles.Container}>
				<div className={styles.Left}>
					<div className={styles.SingleInputContainer}>
						<label>Previous school if any attended</label>
						<input type="text" value={PreviousSchool} onChange={(e) => setPreviousSchool(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Details of any Sibling: Name of the Child</label>
						<input type="text" value={Sibling} onChange={(e) => setSibling(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Name of the School</label>
						<input type="text" value={SchoolName} onChange={(e) => setSchoolName(e.target.value)} />
					</div>
				</div>

				<div className={styles.Right}>
					<div className={styles.SingleInputContainer}>
						<label>In case of Staff ward: Name of the Parent</label>
						<input type="text" value={StaffWard} onChange={(e) => setStaffWard(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label>Designation</label>
						<input type="text" value={Designation} onChange={(e) => setDesignation(e.target.value)} />
					</div>

					<div className={styles.SingleInputContainer}>
						<label className={styles.text}>
							I hereby certify that the information given in the admission form is complete and accurate. I
							understand and agree this misrepresentation or omission of facts will be justifying the denial of
							admission, the cancellation of admission or expulsion. I have read and do hereby consent to the term
							and condition enclosed with the registration form.
						</label>
					</div>

					<div className={styles.ButtonContainer}>
						<button onClick={() => setActive("form3")}>Previous</button>
						<button onClick={handelForm4Submit}>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form4;
