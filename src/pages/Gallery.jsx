import React from "react";
import PinLeft from "../assets/images/PinLeft.png";
import PinRight from "../assets/images/PinRight.png";
import styles from "../assets/scss/Gallery.module.scss";
import SetTitle from "../components/SetTitle";

const Gallery = () => {
	SetTitle("Gallery");

	return (
		<div className={styles.Gallery}>
			<h1>Our Gallery</h1>

			<div className={styles.ImageContainer}>
				<div className={styles.Row}>
					<div className={`${styles.ImgWrapper} ${styles.Left}`}>
						<img src={PinLeft} alt="PinLeft" className={styles.PinLeft} />
						<img src={PinRight} alt="PinRight" className={styles.PinRight} />
						<div className={styles.InnerImage}>
							<img src="https://picsum.photos/200/300" alt="" />
						</div>
					</div>
					<div className={`${styles.ImgWrapper} ${styles.Right}`}>
						<img src={PinLeft} alt="PinLeft" className={styles.PinLeft} />
						<img src={PinRight} alt="PinRight" className={styles.PinRight} />
						<div className={styles.InnerImage}>
							<img src="https://picsum.photos/200/300" alt="" />
						</div>
					</div>
				</div>
				
				<div className={styles.Row}>
					<div className={`${styles.ImgWrapper} ${styles.Left}`}>
						<img src={PinLeft} alt="PinLeft" className={styles.PinLeft} />
						<img src={PinRight} alt="PinRight" className={styles.PinRight} />
						<div className={styles.InnerImage}>
							<img src="https://picsum.photos/200/300" alt="" />
						</div>
					</div>
					<div className={`${styles.ImgWrapper} ${styles.Right}`}>
						<img src={PinLeft} alt="PinLeft" className={styles.PinLeft} />
						<img src={PinRight} alt="PinRight" className={styles.PinRight} />
						<div className={styles.InnerImage}>
							<img src="https://picsum.photos/200/300" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
