import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/index.scss";
import Header from "./components/Header";
import Activities from "./pages/Activities";
import AdmissionFAQ from "./pages/AdmissionFAQ";
import EarlyChildrenEducation from "./pages/EarlyChildrenEducation";
import Facilities from "./pages/Facilities";
import Franchise from "./pages/Franchise";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import LevelOfLearning from "./pages/LevelOfLearning";
import Message from "./pages/Message";
import OnlineClasses from "./pages/OnlineClasses";
import VisionAndMission from "./pages/VisionAndMission";
import ContactUs from "./pages/ContactUs";
import Vendors from "./pages/Vendors";
import Functions from "./pages/Functions";
import FunnyVideos from "./pages/FunnyVideos";
import OurSchool from "./pages/OurSchool";
import OurPurpose from "./pages/OurPurpose";
import AdmissionForm from "./pages/AdmissionForm";

function App() {
	const [header, setHeader] = useState(false);

	return (
		<div
			className="app"
			id="app"
			onScroll={(e) => {
				if (e.target.scrollTop > 15) setHeader(true);
				else if (e.target.scrollTop === 0) setHeader(false);
			}}>
			<BrowserRouter>
				<Header header={header} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Home/OurSchool" element={<OurSchool />} />
					<Route path="/Home/OurPurpose" element={<OurPurpose />} />
					<Route path="/Activities" element={<Activities />} />
					<Route path="/AboutUs/VisionAndMission" element={<VisionAndMission />} />
					<Route path="/AboutUs/Message" element={<Message />} />
					<Route path="/Admission/AdmissionFAQ" element={<AdmissionFAQ />} />
					<Route path="/Admission/AdmissionForm" element={<AdmissionForm />} />
					<Route path="/Curricular/LevelOfLearning" element={<LevelOfLearning />} />
					<Route path="/Curricular/EarlyChildrenEducation" element={<EarlyChildrenEducation />} />
					<Route path="/Curricular/OnlineClasses" element={<OnlineClasses />} />
					<Route path="/Facilities" element={<Facilities />} />
					<Route path="/Gallery" element={<Gallery />} />
					<Route path="/Franchise" element={<Franchise />} />
					<Route path="/ContactUs" element={<ContactUs />} />
					<Route path="/Vendors" element={<Vendors />} />
					<Route path="/Functions" element={<Functions />} />
					<Route path="/FunnyVideos" element={<FunnyVideos />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
