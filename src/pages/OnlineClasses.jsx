import React, { useState } from "react";
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
					BHUBANESWAR'S MOST LOVED & AWARDED PRESCHOOL NOW BEGINS ITS ONLINE CLASSES, WITH THE AIM TO ENSURE THE
					HOLISTIC DEVELOPMENT OF STUDENTS.
				</h3>
				<div className={styles.ImageCont}>
					<img src={O1} alt="" />
					<img src={O2} alt="" />
					<img src={O3} alt="" />
				</div>
			</div>

			<div className={styles.Container2}>
				<h2>ONLINE CLASSES AT MINE KIDS</h2>
				<span></span>
				<p>
					We are all witnessing an unprecedented challenge posed by the global outbreak of COVID-19 Pandemic. As the
					world hunkers down to halt the spread of the virus, it's also essential that we do not let the Pandemic act as
					a barrier to the learning process of the little ones. In line with this view, the academic team of Mine Kids
					Bhubaneswar has come up with a special Program of Online Classes for the session 2020-21, with prime focus on
					the Holistic Development of the children. Our Online Playschool Program includes two classes daily with a
					duration of 40 minutes each. Our daily classes are a healthy amalgamation of conceptual and co-curricular
					activities, fostering the overall development of the tiny tots.
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
						<h2>THE MIRACLE YEAR</h2>
						<span></span>
						<p>
							The mental and physical growth of children is believed to be the most rapid between 2 to 4 years by
							experts.
						</p>
						<p>
							At Mine Kids, we certainly know that the formative years of a childâ€™s life are of utmost importance
							for development, which is why, our child-centric approach ensures the perfect holistic development at
							this tender age. With our scientifically designed curriculum and innovative teaching practices, the
							Online Classes at Mine Kids prepare children for life by imparting not only age-appropriate knowledge
							but also enhancing their talents and empowering them with life skills to ensure their overall
							development that includes:
						</p>
						<p>• Yoga Class</p>
					</div>
				</div>
				<div className={styles.ContainerLeft}>
					<div className={styles.Left}>
						<h2>Intellectual Development</h2>
						<span></span>
						<p>
							The IQ of a child just doesn't depend on the genes alone, but the opportunities he/she gets to use
							his/her mind. Our Online Classes offer the best opportunities to stimulate intellectual curiosity in
							the little ones so as to help them understand the world around them. We organise theme based
							activities where the toddlers learn about the monthly theme & concepts such as:
						</p>
						<p>• People Around Us</p>
						<p>• Community Helpers</p>
						<p>• My Family </p>
						<p>• Fruits & Vegetables </p>
						<p>• Shapes</p>
						<p>• Numbers</p>
						<p>• Vehicles Around Us</p>
					</div>
					<div className={styles.Right}>
						<img src={O5} alt="" />
					</div>
				</div>
				<div className={styles.ContainerRight}>
					<div className={styles.Left}>
						<img src={O4} alt="" />
					</div>
					<div className={styles.Right}>
						<h2>PHYSICAL DEVELOPMENT</h2>
						<span></span>
						<p>
							The childhood of every child should be no less than a carnival of good memories, love and enjoyment
							and our Online Classes ensure they get ample opportunities to run, play and simply be themselves!
							Natural growth occurs best when children have lots of fun. And, all that fun happens at our:
						</p>
						<p>• Dance Class</p>
						<p>• Yoga Class</p>
					</div>
				</div>
				<div className={styles.ContainerLeft}>
					<div className={styles.Left}>
						<h2>LANGUAGE DEVELOPMENT</h2>
						<span></span>
						<p>
							What good is knowledge that cannot be expressed! Language learning provides the foundation for all
							later learning. By the time children enter preschool, they are already using a language at home. Our
							Online Classes provide them with the right activities like rhymes recitation and story narration to
							increase their vocabulary steadily and rapidly. We focus on all aspects of language learning, namely:
						</p>
						<p>• Listening</p>
						<p>• Speaking</p>
						<p>• Reading </p>
						<p>• Writing </p>
						<p>• Oral Expression</p>
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
							Each child has inborn creativity. All we need to do is give them encouragement and opportunities for
							free play, particularly dramatic and constructive play which will foster creativity in them. We
							provide children with stimulating experiences by arranging different types of online activities where
							they can nurture their imagination & discover their talents like:
						</p>
						<p>• Dancing </p>
						<p>• Art & craft </p>
						<p>• Clay Modelling</p>
					</div>
				</div>
				<div className={styles.ContainerLeft}>
					<div className={styles.Left}>
						<h2>Socio-Emotional Development</h2>
						<span></span>
						<p>
							Each child has his/her own unique â€˜Personalityâ€™ which is the outcome of inheritance,
							social/cultural groups, different sorts of interactions, regular appreciation and exposure. Our Online
							Classes provide the right kind of experience, which forms the learning ground for the child about
							right behaviour, friendship, & sharing.
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
							Building an understanding of the cultures and traditions at such a tender age will certainly leave
							imprints of patriotism in their hearts forever. We love celebrating each festival with immense joy. Be
							it Independence Day, Earth Day, Janmashtami, Baisakhi, Diwali, Holi, Eid or Christmas.
						</p>
					</div>
					<div className={styles.Text}>
						<h2>birthday bashes </h2>
						<span></span>
						<p>
							Birthday celebrations are the perfect source of boosting the positive self-concept of the children. We
							organize a special Virtual Birthday Party for our tiny tots to make their birthday celebrations
							memorable with fun activities like, House Hunt, Simon Says, Guess the Sounds, etc.
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
