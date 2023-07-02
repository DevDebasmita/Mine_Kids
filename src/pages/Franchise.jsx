import React, { useState } from "react";
import Logo2 from "../assets/images/Logo2.png";
import styles from "../assets/scss/Franchise.module.scss";
import SetTitle from "../components/SetTitle";

const Franchise = () => {
	SetTitle("Franchise");

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
				In order to start the Mine Kids preschool the first & basic requirement is that the partner should love kids and
				have a passion to do this business with a long term vision. We at Mine Kids believe that alliances are an integral
				part of contemporary strategic businesses. We always look out for good business partners who can share our vision,
				articulate it, passionately own our vision, and relentlessly drive it to completion.
			</p>
			<h2>About Mine Kids</h2>
			<p>
				The journey of Mine Kids began in 2018 with its first branch at Baramunda, Bhubaneswar. From then on, Mine Kids
				became the trendsetter for preschool education. Mine Kids remains the only preschool with a research and
				development department. All the teachers undergo rigorous training and are continuously educated about new
				revelations in child psychology.
			</p>
			<h2>About S D Group of Education</h2>
			<p>
				In order to start the Mine Kids preschool the first & basic requirement is that the partner should love kids and
				have a passion to do this business with a long term vision. We at Mine Kids believe that alliances are an integral
				part of contemporary strategic businesses. We always look out for good business partners who can share our vision,
				articulate it, passionately own our vision, and relentlessly drive it to completion.
			</p>
			<h2>Who Can Start</h2>
			<p>
				We are looking for partners who love kids and have a passion to do this business with a long-term vision. In order
				to start the Mine Kids school, the first and basic requirement is that the partner should love kids and have a
				passion to do this business with a long term vision. Along with that you should own an area between 1500 sq ft â€“
				10000 sq. ft. With an investment capacity ranging between Rs. 5 lakh to Rs. 15 lakh depending upon the area and
				location.
			</p>
			<h2>Why Mine Kids</h2>

			<ul>
				<li>One of the strongest brands of preschools with the maximum recall among parents</li>
				<li>Worldwide recognition. We are the only pre-school in India to have won a Gold Cannes.</li>
				<li>
					The only preschool with a research and development department to develop and update our child centric
					curriculum
				</li>
				<li>Focus on teacher training and recruiting of best talent</li>
			</ul>

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
