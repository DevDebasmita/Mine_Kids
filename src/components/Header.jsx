import React, { useEffect, useState } from "react";
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

	useEffect(() => {
		document.getElementById("app").scrollTo(0, 0);
	}, [pathname]);

	return (
		<div
			className="HeaderWrapper"
			style={{ background: header ? (pathname === "/Admission/AdmissionForm" ? "rgba(178,235,244,1)" : "#fff") : "" }}>
			<div className="Header">
				<div className="Logo" onClick={() => navigate("/")}>
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
							className={
								pathname === "/Admission/AdmissionFAQ" || pathname === "/Admission/AdmissionForm" ? "active" : ""
							}
							onClick={(e) => e.preventDefault()}
							onMouseEnter={() => setAdmission(true)}
							onMouseLeave={() => setAdmission(false)}>
							Admission
							{Admission ? <FaChevronUp className="Icon" /> : <FaChevronDown className="Icon" />}
							{Admission && (
								<div className="PopupCont Admission" onClick={(e) => e.stopPropagation()}>
									<span
										onClick={() => {
											navigate("/Admission/AdmissionFAQ");
											setAdmission(false);
										}}>
										Admission FAQ
									</span>
									<span
										onClick={() => {
											navigate("/Admission/AdmissionForm");
											setAdmission(false);
										}}>
										Admission Form
									</span>
								</div>
							)}
						</a>
						<a
							className={
								pathname === "/Curricular/LevelOfLearning" ||
								pathname === "/Curricular/EarlyChildrenEducation" ||
								pathname === "/Curricular/OnlineClasses"
									? "active"
									: ""
							}
							onClick={(e) => e.preventDefault()}
							onMouseEnter={() => setCurriculum(true)}
							onMouseLeave={() => setCurriculum(false)}>
							Curriculum
							{Curriculum ? <FaChevronUp className="Icon" /> : <FaChevronDown className="Icon" />}
							{Curriculum && (
								<div className="PopupCont Curriculum" onClick={(e) => e.stopPropagation()}>
									<span
										onClick={() => {
											navigate("/Curricular/LevelOfLearning");
											setCurriculum(false);
										}}>
										Level of learning
									</span>
									<span
										onClick={() => {
											navigate("/Curricular/EarlyChildrenEducation");
											setCurriculum(false);
										}}>
										Early childhood Education
									</span>
									<span
										onClick={() => {
											navigate("/Curricular/OnlineClasses");
											setCurriculum(false);
										}}>
										Online Classes
									</span>
								</div>
							)}
						</a>
						<NavLink to="/Facilities">Facilities</NavLink>
						<NavLink to="/Gallery">Gallery</NavLink>
						<NavLink to="/Franchise">Franchise</NavLink>
						<NavLink to="/ContactUs">Contact Us</NavLink>
					</div>

					<a href="tel:+91 63718 64512" className="contactContainer">
						<img src={call} alt="Call" />
						<div>
							<span>Call Us Now</span>
							<p>+91&nbsp;6371864512</p>
						</div>
					</a>
				</nav>
			</div>
		</div>
	);
};

export default Header;
