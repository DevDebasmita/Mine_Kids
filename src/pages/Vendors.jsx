import React from "react";
import Call from "../assets/images/Call.png";
import Location from "../assets/images/Location.png";
import styles from "../assets/scss/Vendors.module.scss";
import SetTitle from "../components/SetTitle";

const Vendors = () => {
	SetTitle("Vendors");

	return (
		<div className={styles.Vendors}>
			<h1>Vendors</h1>
			<p>purchase uniform from Near by vendors</p>
			<h2>vendors for uniform</h2>
			<span></span>
			<div className={styles.Container}>
				<div className={styles.BoxWrapper}>
					<div className={styles.Box}>
						<div className={styles.Top}>
							<div className={styles.Left}>
								<img src="https://picsum.photos/200/300" alt="" />
								<p>Rohan Mondal</p>
							</div>
							<div className={styles.Right}>
								<h2>Dev Book store</h2>
								<div className={styles.LocationCont}>
									<img src={Location} alt="" />
									<div className={styles.Cont}>
										<p>New Delhi</p>
										<p>Rohini, india, 140071 </p>
									</div>
								</div>
								<div className={styles.CallContainer}>
									<img src={Call} alt="" />
									<p>+91 9XXXXXX980</p>
								</div>
							</div>
						</div>
						<div className={styles.Bottom}>
							<a href="#">view in map</a>
						</div>
					</div>
				</div>

				<div className={styles.BoxWrapper}>
					<div className={styles.Box}>
						<div className={styles.Top}>
							<div className={styles.Left}>
								<img src="https://picsum.photos/200/300" alt="" />
								<p>Rohan Mondal</p>
							</div>
							<div className={styles.Right}>
								<h2>Dev Book store</h2>
								<div className={styles.LocationCont}>
									<img src={Location} alt="" />
									<div className={styles.Cont}>
										<p>New Delhi</p>
										<p>Rohini, india, 140071 </p>
									</div>
								</div>
								<div className={styles.CallContainer}>
									<img src={Call} alt="" />
									<p>+91 9XXXXXX980</p>
								</div>
							</div>
						</div>
						<div className={styles.Bottom}>
							<a href="#">view in map</a>
						</div>
					</div>
				</div>

				<div className={styles.BoxWrapper}>
					<div className={styles.Box}>
						<div className={styles.Top}>
							<div className={styles.Left}>
								<img src="https://picsum.photos/200/300" alt="" />
								<p>Rohan Mondal</p>
							</div>
							<div className={styles.Right}>
								<h2>Dev Book store</h2>
								<div className={styles.LocationCont}>
									<img src={Location} alt="" />
									<div className={styles.Cont}>
										<p>New Delhi</p>
										<p>Rohini, india, 140071 </p>
									</div>
								</div>
								<div className={styles.CallContainer}>
									<img src={Call} alt="" />
									<p>+91 9XXXXXX980</p>
								</div>
							</div>
						</div>
						<div className={styles.Bottom}>
							<a href="#">view in map</a>
						</div>
					</div>
				</div>

				<div className={styles.BoxWrapper}>
					<div className={styles.Box}>
						<div className={styles.Top}>
							<div className={styles.Left}>
								<img src="https://picsum.photos/200/300" alt="" />
								<p>Rohan Mondal</p>
							</div>
							<div className={styles.Right}>
								<h2>Dev Book store</h2>
								<div className={styles.LocationCont}>
									<img src={Location} alt="" />
									<div className={styles.Cont}>
										<p>New Delhi</p>
										<p>Rohini, india, 140071 </p>
									</div>
								</div>
								<div className={styles.CallContainer}>
									<img src={Call} alt="" />
									<p>+91 9XXXXXX980</p>
								</div>
							</div>
						</div>
						<div className={styles.Bottom}>
							<a href="#">view in map</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vendors;
