import React from "react";
import styles from "../assets/scss/AdmissionFAQ.module.scss";
import SetTitle from "../components/SetTitle";

const AdmissionFAQ = () => {
	SetTitle("Admission FAQ");

	return (
		<div className={styles.AdmissionFAQ}>
			<h1>Admission FAQ</h1>

			<div className={styles.Container}>
				<div className={styles.Heading}>
					<h2>About mine kids & curium</h2>
				</div>
				<h3>Why should I choose Mine Kids for my child?</h3>
				<p>
					At Mine Kids, love is the basis of our philosophy and here a child learns to start and enjoy learning with
					tender, loving care. We aim to blossom a child's personality by making the most of the formative years in an
					ideal learning environment. We prepare our children for life by imparting not only age-appropriate knowledge
					but also enhancing their talents and empowering them with life skills to ensure holistic development of the
					child that includes:
				</p>
				<ul>
					<li>Physical Development</li>
					<li>Intellectual Development</li>
					<li>Language Development </li>
					<li>Socio-Emotional Development</li>
					<li>Creative Development</li>
				</ul>
				<h3>Why should I not send my child directly to formal school?</h3>
				<p>
					Research shows that up to 50% of a child's ability to learn develops by the age of 5. Proper preschool
					educational ensures an environment for this growth to take place. According to the US Department Of Education,
					preschool plays a large role in later academic success. Children in high quality preschools display better
					language, cognitive, and social skills than children who attended low quality programs. They have longer
					attention spans, stronger social abilities, and better language and math skills well into their elementary
					school careers, and are better performers in college as well as life.
				</p>
				<h3>What is the right age to send a child to preschool?</h3>
				<p>
					Most experts call the child's 2nd year the miracle year. He/she can demonstrate amazing physical skills, think
					logically, manage simple tasks independently, speak few words or short sentences & happily stay apart from you
					for longer periods, etc. It is NOW that he/she gets the right stimulations and starts responding. The RIGHT
					ENVIRONMENT helps in developing the child's ability to learn, communicate, trust, love, and instills
					confidence and a positive self-esteem.
				</p>
				<h3>What is the curriculum that Mine Kids follows in playgroup and nursery?</h3>
				<p>
					Children at Mine Kids are groomed under the Quality Education System designed by the school's Research &
					Development department. This team of professionals plans a scientific curriculum, design innovative, effective
					teaching methods, and explore and create new and better teaching aids.
				</p>
				<h3>Does my child need to be toilet trained before he joins the preschool?</h3>
				<p>
					The school imparts toilet training by following a routine wherein a child is taken to the washroom when he
					reaches the school, before mealtime, after mealtime and when he is leaving in afternoon. Slowly and gradually
					the child falls into this pattern and starts informing the teachers and maids as and when he feels the urge.
				</p>
				<h3>Should I send him to preschool if he doesn't speak yet?</h3>
				<p>
					Our stage activities from the beginning enhance the language skills and confidence levels of each and every
					child. Not only this, all children conquer stage fright, and are trained to make the whole world a stage.
				</p>
			</div>

			<div className={styles.Container}>
				<div className={styles.Heading}>
					<h2>About Manpower</h2>
				</div>
				<h3>What is the quality/background of teachers that we have? Do they speak well in English?</h3>
				<p>
					Experienced and loving teachers are our biggest strength. The carefully selected staff is trained regularly
					about latest developments on early childhood education, child psychology, health and nutrition by a panel of
					experts. Besides possessing good communication skills, they are also specially trained to groom little
					children into leaders of tomorrow.
				</p>
				<h3>What about the class size and the student-teacher ratio that we follow?</h3>
				<p>Class size is between 15 and 20 and student teacher ratio is 10:1.</p>
				<h3>What is the student-maid ratio that you have?</h3>
				<p>
					Each class has a dedicated maid to help two teachers of the class. The washrooms across all floors have
					separate maids to assist the children with washing and cleaning.
				</p>
			</div>

			<div className={styles.Container}>
				<div className={styles.Heading}>
					<h2>About Facilities</h2>
				</div>
				<h3>What are the facilities that are unique to Mine Kids?</h3>
				<p>
					Our unique facilities include nature friendly environment, preparation of nutritious meals, safe and
					comfortable transport system, settling zone, exclusive day boarding facility, splash pool, imported teaching
					aids, equipment, and many more.
				</p>
				<h3>What are the activities that are unique to Mine Kids?</h3>
				<p>
					Our exclusive activities for children include dramatization and role-plays, educational trips, picnics and
					excursions, puppet show, story telling, sand play, water play, nature walk, structured intellectual and
					language activities, etc.
				</p>
				<h3>Do you teach swimming to the children here?</h3>
				<p>
					Splash pool is just for fun. Children at this age are too young, so we can't afford to take a chance with
					them.
				</p>
			</div>

			<div className={styles.Container}>
				<div className={styles.Heading}>
					<h2>About Fees</h2>
				</div>
				<h3>Why is Mine Kids more expensive than other play schools of its locality?</h3>
				<p>
					The answer to this is our unparalleled quality. To ensure that every child receives holistic early education,
					and enjoys every bit of his/her childhood, we provide them with the facilities that no other playschool has.
					With so much in store for your child, a little difference in fee with other playschools is worth it.
				</p>
				<h3>Do you have a Creche? If yes what are its facilities/ timings & charges?</h3>
				<p>
					Yes, day boarding facility is available in every branches of Mine Kids. The timings are from 12:30 pm to 5 pm
					( Timings do vary between branches. Kindly discuss same with the Branch Personnel's).
				</p>
				<div className={styles.Para}>
					<p>The day boarding fee is as follows:</p>
					<p>Registration Fee (one time): Rs 1000 (approx)</p>
					<p>Monthly Charge: Rs 4000 - Rs 5000 (approx) </p>
					<p>depending upon the hours (It may vary between branches)</p>
				</div>
				<h3>What do annual charges include?</h3>
				<p>Events, picnics, excursions, celebrations, activities, etc.</p>
			</div>

			<div className={styles.Container}>
				<div className={styles.Heading}>
					<h2>Miscellaneous</h2>
				</div>
				<h3>When does the session start in Mine Kids?</h3>
				<p>
					As lot of children turn 2 in every month, we form Play Groups each month. Keeping in mind the date of birth &
					corresponding eligibility for formal school, the New Joinee children are assigned a class.
				</p>
				<h3>Do you have any tie up with any formal school?</h3>
				<p>
					In the history of Mine Kids it has not happened yet that our children have not got selected anywhere. In fact,
					a lot of formal schools very proudly announce that many of their children have come from the elite families at
					Mine Kids. But few of the upcoming branded formal school had completed the tie up process with us to secure
					few seats for Std I.
				</p>
			</div>
		</div>
	);
};

export default AdmissionFAQ;
