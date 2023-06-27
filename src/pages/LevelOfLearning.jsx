import React from "react";
import L1 from "../assets/images/L1.png";
import L2 from "../assets/images/L2.png";
import L3 from "../assets/images/L3.png";
import L4 from "../assets/images/L4.png";
import L5 from "../assets/images/L5.png";
import styles from "../assets/scss/LevelOfLearning.module.scss";
import SetTitle from "../components/SetTitle";

const LevelOfLearning = () => {
  SetTitle("Level of Learning");

	return (
		<div className={styles.LevelOfLearning}>
			<h1>Level of Learning</h1>

			<div className={styles.ContainerLeft}>
				<div className={styles.Left}>
					<h2>settling batch</h2>
					<span></span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
						maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
						Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
						Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit amet,
						consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
					</p>
				</div>
				<div className={styles.Right}>
					<img src={L1} alt="" />
				</div>
			</div>

			<div className={styles.ContainerRight}>
				<div className={styles.Left}>
					<img src={L2} alt="" />
				</div>
				<div className={styles.Right}>
					<h2>play group (till 2.5 years )</h2>
					<span></span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
						maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
						Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
						Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit amet,
						consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
					</p>
				</div>
			</div>

			<div className={styles.ContainerLeft}>
				<div className={styles.Left}>
					<h2>play group (till 2 to 3.5 years )</h2>
					<span></span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
						maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
						Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
						Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit amet,
						consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
					</p>
				</div>
				<div className={styles.Right}>
					<img src={L3} alt="" />
				</div>
			</div>

			<div className={styles.ContainerRight}>
				<div className={styles.Left}>
					<img src={L4} alt="" />
				</div>
				<div className={styles.Right}>
					<h2>L. K.G (3.5 to 4.5 years)</h2>
					<span></span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
						maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
						Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
						Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit amet,
						consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
					</p>
				</div>
			</div>

			<div className={styles.ContainerLeft}>
				<div className={styles.Left}>
					<h2>U.K.G (4.5 to 5.5 years)</h2>
					<span></span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
						maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
						Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo.
						Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit ipsum dolor sit amet,
						consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique{" "}
					</p>
				</div>
				<div className={styles.Right}>
					<img src={L5} alt="" />
				</div>
			</div>
		</div>
	);
};

export default LevelOfLearning;
