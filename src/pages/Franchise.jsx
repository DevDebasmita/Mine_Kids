import React, { useState } from "react";
import Logo2 from "../assets/images/Logo2.png";
import styles from "../assets/scss/Franchise.module.scss";

const Franchise = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [message, setMessage] = useState("");

	const handelSend = () => {
		console.log("Send");
	};

	return (
		<div className={styles.Franchise}>
			<h1>Franchise</h1>
			<h2>Franchise Opportunity // Partnering success</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas
				tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
				mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulumem ipsum dolor sit amet,
				consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulum tincidunt sit tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut
				curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo
			</p>
			<h2>About Mine Kids</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas
				tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
				mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulumem ipsum dolor sit amet,
				consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulum tincidunt sit tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut
				curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo
			</p>
			<h2>About S D Group of Education</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas
				tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
				mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulumem ipsum dolor sit amet,
				consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulum tincidunt sit tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut
				curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo
			</p>
			<h2>Who Can Start</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas
				tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
				mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulumem ipsum dolor sit amet,
				consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulum tincidunt sit tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut
				curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo
			</p>
			<h2>Why Mine Kids</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas
				tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
				mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulumem ipsum dolor sit amet,
				consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulum tincidunt sit tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut
				curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
				Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo
			</p>

			<div className={styles.PartnerContainer}>
				<img src={Logo2} alt="" />
				<h3>Partner with us</h3>
				<p>If you share our passion and want to be a part of our growth story, get in touch with us.</p>
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
						<label>Message</label>
						<textarea defaultValue={message} onChange={(e) => setMessage(e.target.value)}></textarea>
					</div>
					<button onClick={handelSend}>Send</button>
				</div>
			</div>
		</div>
	);
};

export default Franchise;
