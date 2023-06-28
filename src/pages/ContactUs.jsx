import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import C1 from "../assets/images/C1.png";
import C2 from "../assets/images/C2.png";
import C3 from "../assets/images/C3.png";
import C4 from "../assets/images/C4.png";
import H9 from "../assets/images/H9.png";
import styles from "../assets/scss/ContactUs.module.scss";
import SetTitle from "../components/SetTitle";

const ContactUs = () => {
	SetTitle("Contact Us");

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [address, setAddress] = useState("");
	const [message, setMessage] = useState("");

	const handelSend = () => {
		console.log("Send");
	};

	return (
		<div className={styles.ContactUs}>
			<h1>Contact Us</h1>

			<div className={styles.Container1}>
				<div className={styles.Left}>
					<h1>Visit us</h1>
					<h1>Mind school pre-school</h1>
					<p>MDL-7, Shanti Vihar,</p>
					<p>H.B Colony Baramunda, </p>
					<p>Bhubaneswar</p>
					<Link to="https://goo.gl/maps/LgMFarcqmtQYGVL68" target="_blank">
						View in Map
					</Link>
				</div>
				<div className={styles.Right}>
					<img src={H9} alt="" />
				</div>
			</div>

			<div className={styles.Container2}>
				<div className={styles.PartnerContainer}>
					<h3>Contact Us</h3>
					<div className={styles.FormContainer}>
						<div className={styles.InputContainer}>
							<label>Name</label>
							<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						<div className={styles.InputContainer}>
							<label>Email</label>
							<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className={styles.InputContainer}>
							<label>Phone</label>
							<input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
						</div>
						<div className={styles.InputContainer}>
							<label>Address</label>
							<input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
						</div>
						<div className={styles.InputContainer}>
							<label>Message</label>
							<textarea defaultValue={message} onChange={(e) => setMessage(e.target.value)}></textarea>
						</div>
						<button onClick={handelSend}>Send</button>
					</div>
				</div>
			</div>

			<div className={styles.Container3}>
				<h2>Careers</h2>

				<div className={styles.LeftContainer}>
					<div className={styles.Left}>
						<h3>vacancy for the post of Teacher's</h3>
						<span></span>
						<ul>
							<li>Graduate/ Post Graduate</li>
							<li>NTT/PTT/IMTTI</li>
							<li>Minimum Experience & Skill Requirements</li>
							<li>1-2 Years of working experience in classroom Management</li>
							<li>Knowledge of MS- Office</li>
						</ul>
						<p className={styles.Apply}>Apply Now</p>
						<div className={styles.Wrapper}>
							<div className={styles.Upload}>
								<FiUpload />
								<p>Upload your Resume</p>
							</div>
							<button>Upload</button>
						</div>
					</div>
					<div className={styles.Right}>
						<img src={C1} alt="" />
					</div>
				</div>

				<div className={styles.RightContainer}>
					<div className={styles.Left}>
						<img src={C2} alt="" />
					</div>
					<div className={styles.Right}>
						<h3>Vacancy for the post of Receptionist</h3>
						<span></span>
						<ul>
							<li>Graduate/ Post Graduate</li>
							<li>Minimum Experience & Skill Requirements</li>
							<li>1-2 Years of working experience in Office Management</li>
							<li>Knowledge of MS- Office</li>
						</ul>
						<p className={styles.Apply}>Apply Now</p>
						<div className={styles.Wrapper}>
							<div className={styles.Upload}>
								<FiUpload />
								<p>Upload your Resume</p>
							</div>
							<button>Upload</button>
						</div>
					</div>
				</div>

				<div className={styles.LeftContainer}>
					<div className={styles.Left}>
						<h3>Vacancy for the post of Attendant</h3>
						<span></span>
						<ul>
							<li>Matriculation</li>
							<li>Minimum Experience & Skill Requirements</li>
							<li>1-2 Years of working experience</li>
						</ul>
						<p className={styles.Apply}>Apply Now</p>
						<div className={styles.Wrapper}>
							<div className={styles.Upload}>
								<FiUpload />
								<p>Upload your Resume</p>
							</div>
							<button>Upload</button>
						</div>
					</div>
					<div className={styles.Right}>
						<img src={C3} alt="" />
					</div>
				</div>

				<div className={styles.RightContainer}>
					<div className={styles.Left}>
						<img src={C4} alt="" />
					</div>
					<div className={styles.Right}>
						<h3>Vacancy for the post of Security Guard</h3>
						<span></span>
						<ul>
							<li>Matriculation</li>
							<li>Minimum Experience & Skill Requirements</li>
							<li>1-2 Years of working experience in Office Management</li>
						</ul>
						<p className={styles.Apply}>Apply Now</p>
						<div className={styles.Wrapper}>
							<div className={styles.Upload}>
								<FiUpload />
								<p>Upload your Resume</p>
							</div>
							<button>Upload</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
