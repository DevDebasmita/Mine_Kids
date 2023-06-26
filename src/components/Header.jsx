import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import "../assets/scss/Header.scss";
import call from "../assets/svg/call.svg";

const Header = ({ header }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [About, setAbout] = useState(false);
	const [Admission, setAdmission] = useState(false);
	const [Curriculum, setCurriculum] = useState(false);

	return (
		<div className="HeaderWrapper" style={{ background: header ? "#fff" : "" }}>
			<div className="Header">
				<div className="Logo">
					<img src={Logo} alt="Logo" />
				</div>

				<nav>
					<div className="LinksContainer">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/Activities">Activities</NavLink>
						<a
							className={
								pathname === "/AboutUs/VisionAndMission" || pathname === "/AboutUs/Message" ? "active" : ""
							}
							onClick={(e) => e.preventDefault()}
							onMouseEnter={() => setAbout(true)}
							onMouseLeave={() => setAbout(false)}>
							About Us
							{About ? <FaChevronUp className="Icon" /> : <FaChevronDown className="Icon" />}
							{About && (
								<div className="PopupCont" onClick={(e) => e.stopPropagation()}>
									<span
										onClick={() => {
											navigate("/AboutUs/VisionAndMission");
											setAbout(false);
										}}>
										Vision and Mission
									</span>
									<span
										onClick={() => {
											navigate("/AboutUs/Message");
											setAbout(false);
										}}>
										Messages
									</span>
								</div>
							)}
						</a>
						<a
							className={pathname === "/Admission/AdmissionFAQ" || pathname === "//" ? "active" : ""}
							onClick={(e) => e.preventDefault()}
							onMouseEnter={() => setAdmission(true)}
							onMouseLeave={() => setAdmission(false)}>
							Admission
							{Admission ? <FaChevronUp className="Icon" /> : <FaChevronDown className="Icon" />}
							{Admission && (
								<div className="PopupCont Admission" onClick={(e) => e.stopPropagation()}>
									<span onClick={() => navigate("/Admission/AdmissionFAQ")}>Admission FAQ</span>
									<span onClick={() => console.log("Admission From")}>Admission Form</span>
								</div>
							)}
						</a>
						<a
							onClick={(e) => e.preventDefault()}
							onMouseEnter={() => setCurriculum(true)}
							onMouseLeave={() => setCurriculum(false)}>
							Curriculum
							{Curriculum ? <FaChevronUp className="Icon" /> : <FaChevronDown className="Icon" />}
							{Curriculum && (
								<div className="PopupCont Curriculum" onClick={(e) => e.stopPropagation()}>
									<span onClick={() => console.log("Level of learning")}> Level of learning</span>
									<span onClick={() => console.log("Early childhood Education")}>
										Early childhood Education
									</span>
									<span onClick={() => console.log("    Online Classes")}>Online Classes</span>
								</div>
							)}
						</a>
						<NavLink to="/Facilities">Facilities</NavLink>
						<NavLink to="/Gallery">Gallery</NavLink>
						<NavLink to="/Franchise">Franchise</NavLink>
						<NavLink to="/ContactUs">Contact Us</NavLink>
					</div>

					<div className="contactContainer">
						<img src={call} alt="Call" />
						<div>
							<span>Call Us Now</span>
							<p>+91&nbsp;981XXXXX55</p>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
