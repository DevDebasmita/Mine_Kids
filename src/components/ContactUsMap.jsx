import React from "react";
import { Link } from "react-router-dom";
import H9 from "../assets/images/H9.png";
import styles from "../assets/scss/ContactUsMap.module.scss";

const ContactUsMap = () => {
	return (
		<div className={styles.ContactUsMap}>
			<div className={styles.Left}>
				<h2>Visit us</h2>
				<h3>Mind school pre-school</h3>
				<div className={styles.Content}>
					<div className={styles.L}>
						<p>MDL-7, Shanti Vihar,</p>
						<p>H.B Colony Baramunda, </p>
						<p>Bhubaneswar</p>
					</div>
					<div className={styles.R}>
						{/* <h3>Mind school pre-school</h3> */}
						<p>Plot No- 275, Bhagabanpur,</p>
						<p>Near Banyan Courtyard, </p>
						<p>Patrapada, Bhubaneswar</p>
					</div>
				</div>

				{/* <Link to="https://goo.gl/maps/kW81H9DvTBMDaNQL7" target="_blank">
					View in Map
				</Link> */}
			</div>
			<div className={styles.Right}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14969.923930721237!2d85.7865992!3d20.280349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190827563ae50b%3A0xa635de87d04d9ab6!2sMine%20Kids%20Preschool%20%26%20Creche!5e0!3m2!1sen!2sin!4v1688293127108!5m2!1sen!2sin"
					width="100%"
					height="100%"
					allowfullscreen="none"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	);
};

export default ContactUsMap;
