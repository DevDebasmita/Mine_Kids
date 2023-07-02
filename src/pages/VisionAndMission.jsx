import React from "react";
import V1 from "../assets/images/V1.png";
import V2 from "../assets/images/V2.png";
import V3 from "../assets/images/V3.png";
import V4 from "../assets/images/V4.png";
import V5 from "../assets/images/V5.png";
import styles from "../assets/scss/VisionAndMission.module.scss";
import SetTitle from "../components/SetTitle";

const VisionAndMission = () => {
	SetTitle("Vision and Mission");

	return (
		<div className={styles.VisionAndMission}>
			<div className={styles.ContainerRight}>
				<div className={styles.Left}>
					<h1>Vision and Mission</h1>
					<span></span>
					<p>
						To provide Quality and Value Based Education and be the most preferred destination for education in this
						part of the city by 2022.
					</p>
					<p>
						Our mission is to help young minds grow and learn in an amicable environment resulting in their
						allâ€“round development.
					</p>
				</div>
				<div className={styles.Right}>
					<img src={V1} alt="" />
				</div>
			</div>

			<div className={styles.ContainerLeft}>
				<div className={styles.Left}>
					<img src={V2} alt="" />
				</div>
				<div className={styles.Right}>
					<h1>School Value system</h1>
					<span></span>
					<p>Our School Value System Drives Our Promise</p>
					<p>Attitude : Dynamic yet calm environment</p>
					<p>Behavior : Refined discipline to shape growth</p>
					<p>Action : Inspirational, joyful learning Promise </p>
					<p>Delivery : Realism unique potential</p>
				</div>
			</div>

			<div className={styles.ContainerRight}>
				<div className={styles.Left}>
					<h1>Our Strategic Objectives</h1>
					<span></span>
					<p>• Continuous improvement of curriculum & students</p>
					<p>• Focus on safety & hygiene</p>
					<p>• Enhance faculty & staff competence level</p>
					<p>• Improvement in parents€™s satisfaction</p>
					<p>• Grow with agility</p>
				</div>
				<div className={styles.Right}>
					<img src={V3} alt="" />
				</div>
			</div>

			<div className={styles.ContainerLeft}>
				<div className={styles.Left}>
					<img src={V4} alt="" />
				</div>
				<div className={styles.Right}>
					<h1>Our Function Areas</h1>
					<span></span>
					<p>• To introduce the child to the joys of learning through play.</p>
					<p>• To channelize the childâ€™s energy through recreational activities.</p>
					<p>• To instill good habits, social manners and etiquette in a child.</p>
					<p>• To enlarge the intellectual horizons and broaden the outlook of the child.</p>
				</div>
			</div>

			<div className={styles.ContainerRight}>
				<div className={styles.Left}>
					<h1>We believe in</h1>
					<span></span>
					<p>• Making our Children learn through the procedure of FUN learning.</p>
					<p>• To bring out the BEST (unique potential) in each child by adopting the best practices.</p>
					<p>• To make each child CONFIDENT enough to face the REAL LIFE SITUATIONS.</p>
				</div>
				<div className={styles.Right}>
					<img src={V5} alt="" />
				</div>
			</div>
		</div>
	);
};

export default VisionAndMission;
