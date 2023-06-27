import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight, BsGlobe } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { PiTShirt } from "react-icons/pi";
import { TbHorseToy } from "react-icons/tb";
import { TfiBook } from "react-icons/tfi";
import { Link } from "react-router-dom";
import AdmissionBtn from "../assets/images/AdmissionBtn.png";
import banner from "../assets/images/Group 212.png";
import H1 from "../assets/images/H1.png";
import H2 from "../assets/images/H2.png";
import H3 from "../assets/images/H3.png";
import H4 from "../assets/images/H4.png";
import H5 from "../assets/images/H5.png";
import H6 from "../assets/images/H6.png";
import H7 from "../assets/images/H7.png";
import H9 from "../assets/images/H9.png";
import HCI1 from "../assets/images/HCI1.png";
import HCI2 from "../assets/images/HCI2.png";
import HCI3 from "../assets/images/HCI3.png";
import HCI4 from "../assets/images/HCI4.png";
import HCI5 from "../assets/images/HCI5.png";
import HI1 from "../assets/images/HI1.png";
import HI2 from "../assets/images/HI2.png";
import HI3 from "../assets/images/HI3.png";
import HI4 from "../assets/images/HI4.png";
import HI5 from "../assets/images/HI5.png";
import Logo2 from "../assets/images/Logo2.png";
import styles from "../assets/scss/Home.module.scss";
import SetTitle from "../components/SetTitle";

const Home = () => {
	SetTitle("Home");
	const [admission, setAdmission] = useState(false);
	return (
		<div className={styles.Home}>
			{/* TODO: Carouse */}
			<div className={styles.Container1}>
				<img src={banner} alt="" />
				<button>Read More</button>
			</div>

			<div className={styles.Container2}>
				<div
					className={styles.admission}
					onMouseEnter={() => setAdmission(true)}
					onMouseLeave={() => setAdmission(false)}>
					<img src={AdmissionBtn} alt="" />
					{admission && (
						<div>
							<Link>Scratch From</Link>
							<Link>Admission From</Link>
						</div>
					)}
				</div>

				<div className={styles.InnerWrapper1}>
					<div className={styles.Left}>
						<img src={H1} alt="" />
					</div>
					<div className={styles.Right}>
						<h1>Welcome To Our School</h1>
						<span></span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
							maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
							Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur
							leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit{" "}
						</p>
						<button>Read More</button>
					</div>
				</div>

				<div className={styles.InnerWrapper2}>
					<div className={styles.Left}>
						<h1> Our Purpose</h1>
						<span></span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed
							maecenas tristique tincidunt cras. Vestibulum tincidunt sit Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas tristique tincidunt cras.
							Vestibulumem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur
							leo. Sed maecenas tristique tincidunt cras. Vestibulum tincidunt sit tincidunt sit{" "}
						</p>
						<button>Read More</button>
					</div>
					<div className={styles.Right}>
						<img src={H2} alt="" />
					</div>
				</div>
			</div>

			<div className={styles.Container3}>
				<button className={styles.L}>
					<BsArrowLeft />
				</button>
				<button className={styles.R}>
					<BsArrowRight />
				</button>
				<h1>Arrival & Welcome Kids</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ut curabitur curabitur leo. Sed maecenas
					tristique tincidunt cras. Vestibulum tincidunt sit risus consequat quam amet aliquet. Pharetra molestie
					vulputate tellus, massa quisque sed. Mauris non urna, sed ullamcorper. Risus.Pharetra molestie vulputate
					tellus, massa quisque Mauris non urna, sed ullamcorper. Risus.estibulum tincidunt sit risus consequat quam
					amet aliquet. Pharetra molestie vulputate tellus, massa quisque sed. Mauris non urna, sed ullamcorper.
					Risus.Pharetra molestie vulputate tellus, massa quisque sed. Mauris non urna, sed ullamcorper. Risus.
				</p>
			</div>

			<div className={styles.Container4}>
				<h1>Our Activities</h1>
				<span></span>
				<div className={styles.ImageContainer}>
					<div className={styles.ImageWrapper}>
						<img src={HI1} alt="" />
						<p>Games</p>
					</div>
					<div className={styles.ImageWrapper}>
						<img src={HI2} alt="" />
						<p>Painting</p>
					</div>
					<div className={styles.ImageWrapper}>
						<img src={HI3} alt="" />
						<p>Dance</p>
					</div>
				</div>

				<div className={styles.BlueBackground}>
					<h2>Our Gallery</h2>
					<p>View all</p>

					<div className={styles.ImageContainer}>
						<div className={styles.ImgC1}>
							<img src={HCI2} alt="" />
							<img src={HCI3} alt="" />
						</div>
						<img src={HCI1} alt="" />
						<div className={styles.ImgC1}>
							<img src={HCI4} alt="" />
							<img src={HCI5} alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className={styles.Container5}>
				<div className={styles.Left}>
					<h1>Admission Open</h1>
					<p>
						us.estibulum tincidunt sit risus consequat quam amet aliquet. Pharetra molestie vulputate tellus, massa
						quisque sed.us.estus.estibulum tincidunt sit risus consequat quam amet aliquet. Pharetra molestie
						vulputate tellus, massa quisque sed.us.estibulum tincidunt sit risus consequat quam amet aliquet. Pharetra
						molestie vulputate tellus, massa quisque sed.ibulum tincidunt sit risus consequat quam amet aliquet.
						Pharetra molestie vulputate tellus, massa quisque sed.
					</p>
					<button>Know More</button>
				</div>
				<div className={styles.Right}>
					<img src={H3} alt="" />
				</div>
			</div>

			<div className={styles.Container6}>
				<img src={HI4} alt="" />
				<img src={HI5} alt="" />
			</div>

			<div className={styles.Container7}>
				<h1>Our school Funtions</h1>
				<Link to="/">See all Videos</Link>
				<img src={H4} alt="" />
				{/* <video src={H4}></video> */}
			</div>

			<div className={styles.Container8}>
				<h1>Funny videos</h1>
				<div className={styles.Cont}>
					<span></span>
					<Link to="/">See all Videos</Link>
				</div>
				<div className={styles.ImageContainer}>
					<div className={styles.VideoWrapper}>
						<img src={H5} alt="" />
					</div>
					<div className={styles.VideoWrapper}>
						<img src={H6} alt="" />
					</div>
					<div className={styles.VideoWrapper}>
						<img src={H7} alt="" />
					</div>
				</div>
				<div className={styles.Background}></div>
			</div>

			<div className={styles.Container9}>
				<div className={styles.Left}>
					<h1>Visit us</h1>
					<h1>Mind school pre-school</h1>
					<p>MDL-7, Shanti Vihar,</p>
					<p>H.B Colony Baramunda, </p>
					<p>Bhubaneswar</p>
					<Link to="https://goo.gl/maps/LgMFarcqmtQYGVL68" target="_blank">
						View in Map
					</Link>
				</div>
				<div className={styles.Right}>
					<img src={H9} alt="" />
				</div>
			</div>

			<div className={styles.Container10}>
				<div className={styles.Top}>
					<div className={styles.C1}>
						<img src={Logo2} alt="Logo" />
					</div>
					<div className={styles.C2}>
						<h2>About us</h2>
						<Link to="/">Home</Link>
						<Link to="/AboutUs">About us</Link>
						<Link to="/OurCurriculum">Our Curriculum</Link>
					</div>
					<div className={styles.C3}>
						<h2>About us</h2>
						<Link to="/Programme">Pre-school programme</Link>
						<Link to="/Blogs">Blogs</Link>
					</div>
				</div>
				<div className={styles.Bottom}>
					<div className={styles.C1}>
						<h3>Follow Us</h3>
						<span></span>

						<div className={styles.SocialIcons}>
							<Link to="/" target="_blank">
								<FiInstagram />
							</Link>
							<Link to="/" target="_blank">
								<FiTwitter />
							</Link>
							<Link to="/" target="_blank">
								<CiLinkedin />
							</Link>
							<Link to="/" target="_blank">
								<BsGlobe />
							</Link>
						</div>
					</div>
					<div className={styles.C2}>@mineschool.in</div>
					<div className={styles.C3}>
						<h1>near by vendors</h1>
						<div className={styles.Cont}>
							<Link to="/" target="_blank" className={styles.Wrapper}>
								<div className={styles.round}>
									<PiTShirt />
								</div>
								<p>Uniform</p>
							</Link>
							<Link to="/" target="_blank" className={styles.Wrapper}>
								<div className={styles.round}>
									<TfiBook />
								</div>
								<p>Books</p>
							</Link>
							<Link to="/" target="_blank" className={styles.Wrapper}>
								<div className={styles.round}>
									<TbHorseToy />
								</div>
								<p>Toys</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
