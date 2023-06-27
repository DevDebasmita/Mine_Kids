import React from "react";
import O1 from "../assets/images/O1.png";
import O2 from "../assets/images/O2.png";
import O3 from "../assets/images/O3.png";
import O4 from "../assets/images/O4.png";
import O5 from "../assets/images/O5.png";
import O6 from "../assets/images/O6.png";
import O7 from "../assets/images/O7.png";
import O8 from "../assets/images/O8.png";
import O9 from "../assets/images/O9.png";
import styles from "../assets/scss/OnlineClasses.module.scss";
import SetTitle from "../components/SetTitle";
import { useState } from "react";

const OnlineClasses = () => {
	SetTitle("Online Classes");

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [address, setAddress] = useState("");
	const [interest, setInterest] = useState("");
	const [note, setNote] = useState("");

	const handelSend = () => {
		console.log("Send");
	};

	return (
		<div className={styles.OnlineClasses}>
			<div className={styles.Container1}>
				<h3>
					BHUBANESWAR'S MOST LOVED & AWARDED PRESCHOOL NOW BEGINS ITS ONLINE CLASSES,WITH THE AIM TO ENSURE THE HOLISTIC
					DEVELOPMENT OF STUDENTS.
				</h3>
				<div className={styles.ImageCont}>
					<img src={O1} alt="" />
					<img src={O2} alt="" />
					<img src={O3} alt="" />
				</div>
			</div>

			<div className={styles.Container2}>
				<h2>Online Classes</h2>
				<span></span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas
					tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulumem ipsum dolor sit
					amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt
					cras. Vestibulum tincidunt sit tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
					mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique
					tincidunt cras. Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur
					curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit Lorem ipsum dolor
					sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique
					tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
					ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulumem ipsum dolor sit amet,
					consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
					Vestibulum tincidunt sit tincidunt sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut
					curabitur curabitur leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt
					cras. Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
					Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit{" "}
				</p>
			</div>

			<div className={styles.Container3}>
				<h2>Online Classes Routine</h2>
				<div className={styles.Row}>
					<div className={styles.Col}>
						<h3>Concept Based Learning</h3>
						<p>
							Our scientifically planned curriculum is designed, keeping in mind an integrated approach and age-wise
							milestones, to systematically cover all major concepts like:
						</p>
						<ul>
							<li>Body Parts</li>
							<li>My Family </li>
							<li>Fruits</li>
							<li>Vegetables</li>
							<li>Colors</li>
							<li>Helpers</li>
							<li>Alphabets</li>
							<li>Numbers</li>
							<li>Positional & Spatial concepts</li>
							<li>Transport</li>
						</ul>
					</div>
					<div className={styles.Col}>
						<h3>Co-Curricular Activities</h3>
						<p>
							A wide variety of Co-curricular activities contribute to the overall development of the children while
							making their experience of online classes an enjoyable one. Our curriculum offers a great blend of
							activities that cater to all the domains of development in the little ones:
						</p>
						<ul>
							<li>Yoga / Taekwondo </li>
							<li>Story Narration</li>
							<li>Creative Hands</li>
							<li>Dance</li>
							<li>Celebration</li>
							<li>Event</li>
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.Container4}>
				<div className={styles.ContainerRight}>
					<div className={styles.Left}>
						<img src={O4} alt="" />
					</div>
					<div className={styles.Right}>
						<h2>PHYSICAL DEVELOPMENT</h2>
						<span></span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
							maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
							Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur
							leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit
							amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
						</p>
					</div>
				</div>
				<div className={styles.ContainerLeft}>
					<div className={styles.Left}>
						<h2>LANGUAGE DEVELOPMENT</h2>
						<span></span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
							maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
							Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur
							leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit
							amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
						</p>
					</div>
					<div className={styles.Right}>
						<img src={O5} alt="" />
					</div>
				</div>
				<div className={styles.ContainerRight}>
					<div className={styles.Left}>
						<img src={O6} alt="" />
					</div>
					<div className={styles.Right}>
						<h2>development of creative expression</h2>
						<span></span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
							maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
							Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur
							leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit
							amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
						</p>
					</div>
				</div>
				<div className={styles.ContainerLeft}>
					<div className={styles.Left}>
						<h2>Socio-Emotional Development</h2>
						<span></span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
							maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
							Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur
							leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit
							amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
						</p>
					</div>
					<div className={styles.Right}>
						<img src={O7} alt="" />
					</div>
				</div>
				<div className={styles.ImgCont}>
					<img src={O8} alt="" />
					<img src={O9} alt="" />
				</div>
				<div className={styles.TextCont}>
					<div className={styles.Text}>
						<h2>Celebrations</h2>
						<span></span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
							maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
							Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur
							leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit
							amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
						</p>
					</div>
					<div className={styles.Text}>
						<h2>birthday bashes </h2>
						<span></span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
							maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
							Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur
							leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit
							amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
						</p>
					</div>
				</div>
			</div>

			<div className={styles.Container5}>
				<div className={styles.Left}>
					<h4>Age Group</h4>
					<ul>
						<li>Play Group: 2+</li>
						<li>Nursery: 3+</li>
						<li>Prep: 4+</li>
					</ul>
				</div>
				<div className={styles.Right}>
					<h4>Fess Of The Program</h4>
					<p>
						The monthly fees for Session 2020-21 is Rs. 1500/-,Book set will be charged separately. Courier
						chargeswill be extra.
					</p>
				</div>
			</div>

			<div className={styles.Container6}>
				<div className={styles.PartnerContainer}>
					<h3>Quick Contact</h3>
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
							<label>I'm interested in</label>
							<textarea defaultValue={interest} onChange={(e) => setInterest(e.target.value)}></textarea>
						</div>
						<div className={styles.InputContainer}>
							<label>Other Notes</label>
							<textarea defaultValue={note} onChange={(e) => setNote(e.target.value)}></textarea>
						</div>
						<button onClick={handelSend}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OnlineClasses;
