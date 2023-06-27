import React from "react";
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
						<img src="https://picsum.photos/200/300" alt="" />
					</div>
					<div className={`${styles.ImgWrapper} ${styles.Right}`}>
						<img src="https://picsum.photos/200/300" alt="" />
					</div>
				</div>
				<div className={styles.Row}>
					<div className={`${styles.ImgWrapper} ${styles.Left}`}>
						<img src="https://picsum.photos/200/300" alt="" />
					</div>
					<div className={`${styles.ImgWrapper} ${styles.Right}`}>
						<img src="https://picsum.photos/200/300" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
