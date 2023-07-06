import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { PiTShirt } from "react-icons/pi";
import { TbHorseToy } from "react-icons/tb";
import { TfiBook } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import AdmissionBtn from "../assets/images/AdmissionBtn.png";
import Banner1 from "../assets/images/Banner1.png";
import Banner2 from "../assets/images/Banner2.png";
import Banner3 from "../assets/images/Banner3.png";
import Banner4 from "../assets/images/Banner4.png";
import Banner5 from "../assets/images/Banner5.png";
import H1 from "../assets/images/H1.png";
import H2 from "../assets/images/H2.png";
import H3 from "../assets/images/H3.png";
import H4 from "../assets/images/H4.png";
import H5 from "../assets/images/H5.png";
import H6 from "../assets/images/H6.png";
import H7 from "../assets/images/H7.png";
// import HCI1 from "../assets/images/HCI1.png";
// import HCI2 from "../assets/images/HCI2.png";
// import HCI3 from "../assets/images/HCI3.png";
// import HCI4 from "../assets/images/HCI4.png";
// import HCI5 from "../assets/images/HCI5.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HI1 from "../assets/images/HI1.png";
import HI2 from "../assets/images/HI2.png";
import HI3 from "../assets/images/HI3.png";
import HI4 from "../assets/images/HI4.png";
import HI5 from "../assets/images/HI5.png";
import Logo2 from "../assets/images/Logo2.png";
import styles from "../assets/scss/Home.module.scss";
import ContactUsMap from "../components/ContactUsMap";
import SetTitle from "../components/SetTitle";

const Home = () => {
	SetTitle("Home");
	const navigate = useNavigate();
	const [admission, setAdmission] = useState(false);

	return (
		<div className={styles.Home}>
			<div className={`${styles.Container1} Container1`}>
				<AliceCarousel
					mouseTracking
					autoPlay
					infinite
					autoPlayStrategy={"none"}
					autoPlayInterval={5000}
					disableButtonsControls
					responsive={{
						0: {
							items: 1,
						},
					}}>
					<div
						className={styles.BannerWrapper}
						onDragStart={(e) => e.preventDefault()}
						onClick={() => navigate("/Home/OurSchool")}>
						<img src={Banner1} alt="Banner1" />
					</div>
					<div
						className={styles.BannerWrapper}
						onDragStart={(e) => e.preventDefault()}
						onClick={() => navigate("/ContactUs")}>
						<img src={Banner2} alt="Banner2" />
					</div>
					<div
						className={styles.BannerWrapper}
						onDragStart={(e) => e.preventDefault()}
						onClick={() => navigate("/AboutUs/VisionAndMission")}>
						<img src={Banner3} alt="Banner3" />
					</div>
					<div className={styles.BannerWrapper} onDragStart={(e) => e.preventDefault()}>
						<img src={Banner4} alt="Banner4" />
					</div>
					<div
						className={styles.BannerWrapper}
						onDragStart={(e) => e.preventDefault()}
						onClick={() => navigate("/ContactUs")}>
						<img src={Banner5} alt="Banner5" />
					</div>
				</AliceCarousel>
			</div>

			<div className={styles.Container2}>
				<div
					className={styles.admission}
					onMouseEnter={() => setAdmission(true)}
					onMouseLeave={() => setAdmission(false)}>
					<img src={AdmissionBtn} alt="" />
					{admission && (
						<div>
							<Link to="/Admission/AdmissionForm">Creche From</Link>
							<Link to="/Admission/AdmissionForm">Admission From</Link>
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
							The most important priority for MINE KIDS is to lay a sound foundation for life for the little ones
							which requires quality early childhood education. For us, education will never be limited to books,
							one can learn anywhere, anytime. Nursery is a level that takes the children a step ahead in their
							educational journey. Their little minds solve small challenges which in turn build their
							problem-solving and logical reasoning skills. Their curiosity is also addressed perfectly well as
							every term brings to them a new theme and concept to unfold.
						</p>
						<button onClick={() => navigate("/Home/OurSchool")}>Read More</button>
					</div>
				</div>

				<div className={styles.InnerWrapper2}>
					<div className={styles.Left}>
						<h1> Our Purpose</h1>
						<span></span>
						<p>
							Children at Mine Kids are groomed under the Quality Education System designed by the school's Research
							& Development department. This team of professionals plans a scientific curriculum, design innovative,
							effective teaching methods, and explore and create new and better teaching aids.
						</p>
						<button onClick={() => navigate("/Home/OurPurpose")}>Read More</button>
					</div>
					<div className={styles.Right}>
						<img src={H2} alt="" />
					</div>
				</div>
			</div>

			<div className={`${styles.Container3} container3`}>
				<AliceCarousel
					mouseTracking
					autoPlay
					infinite
					autoPlayStrategy={"none"}
					autoPlayInterval={10000}
					disableDotsControls
					responsive={{
						0: {
							items: 1,
						},
					}}>
					<div className={styles.Con3Content}>
						<h1>Arrival & Welcome Kids</h1>
						<p>
							A great day begins with a good morning! As the gates open, we gear up to welcome our little bundles of
							joy who fill the school of love with happiness. A set of activities are planned in the activity room
							to help children settle down. And, who doesn’t love puzzles and block towers? Some months also feature
							a theme colour that is woven throughout free play activities.
						</p>
					</div>
					<div className={styles.Con3Content}>
						<h1>ASSEMBLY</h1>
						<p>
							Every day here is a celebration of life and thus, all the festivals and events are celebrated with
							grandeur through a special assembly, be it our child’ birthdays or festivals like Independence Day,
							Gandhi Jayanti and Diwali. At our assembly, together, children participate in rhyme sessions and also
							indulge in physical exercises.
						</p>
					</div>
					<div className={styles.Con3Content}>
						<h1>CIRCLE TIME</h1>
						<p>
							Our favourite activity at Mine Kids is the Circle Time! Here, the toddlers are seated in a circle and
							the teachers indulge them in fun conversations, stories and puppet play. Circle Time is divided into
							five rounds:
						</p>
						<p>1. Warming up 2. Meeting up</p>
						<p>3. Opening up 4. Cheering up</p>
						<p>5. Calming Down</p>
					</div>
					<div className={styles.Con3Content}>
						<h1>CURRICULAR ACTIVITY</h1>
						<p>
							At Mine Kids, letters and numbers are not just modes of expression but our children's best friends. We
							simply love to be the cupid and introduce them to magic of words and rhymes! Our curriculum books are
							filled with delightful activities and colourful illustrations to provide a wholesome learning
							experience with a focus on pre-reading, pre-numbers and pattern writing.
						</p>
					</div>
					<div className={styles.Con3Content}>
						<h1>CO-CURRICULAR ACTIVITY</h1>
						<p>
							After chit-chatting in the fun circle time, the children also enjoy the peaceful yoga class. Sports is
							a focus area when it comes to physical development of the students. Natural growth occurs best when
							children have lots of fun.
						</p>
					</div>
					<div className={styles.Con3Content}>
						<h1>SAFE DISPERSAL</h1>
						<p>
							It’s finally time to say goodbye to the teachers and pals! The exit slips and safe handover process
							ensures smooth dispersal every day. The excitement with which the children share about their day with
							their parents is a sight to witness!
						</p>
					</div>
				</AliceCarousel>
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
					{/* <h2>Our Gallery</h2>
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
					</div> */}
				</div>
			</div>

			<div className={styles.Container5}>
				<div className={styles.Left}>
					<h1>Admission Open</h1>
					<p>
						Mine Kids became the trendsetter for preschool education. Mine Kids remains the only preschool with a
						research and development department. All the teachers undergo rigorous training and are continuously
						educated about new revelations in child psychology.
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
				<p onClick={() => navigate("/Functions")}>See all Videos</p>
				<img src={H4} alt="" />
				{/* <video src={H4}></video> */}
			</div>

			<div className={styles.Container8}>
				<h1>Funny videos</h1>
				<div className={styles.Cont}>
					<span></span>
					<Link to="/FunnyVideos">See all Videos</Link>
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
				<ContactUsMap />
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
						<h2>More</h2>
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
