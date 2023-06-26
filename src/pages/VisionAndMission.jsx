import React from "react";
import V1 from "../assets/images/V1.png";
import V2 from "../assets/images/V2.png";
import V3 from "../assets/images/V3.png";
import V4 from "../assets/images/V4.png";
import styles from "../assets/scss/VisionAndMission.module.scss";

const VisionAndMission = () => {
	return (
		<div className={styles.VisionAndMission}>
			<div className={styles.ContainerRight}>
				<div className={styles.Left}>
					<h1>Vision and Mission</h1>
					<span></span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
						maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
						Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
						Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit.
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
						maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
						Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
						Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit{" "}
					</p>
				</div>
			</div>

			<div className={styles.ContainerRight}>
				<div className={styles.Left}>
					<h1>Our Strategic Objectives</h1>
					<span></span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
						maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
						Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
						Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit.
					</p>
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
					<h1>We believe in</h1>
					<span></span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
						maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
						Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
						Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default VisionAndMission;
