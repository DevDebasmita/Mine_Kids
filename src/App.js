import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/index.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import VisionAndMission from "./pages/VisionAndMission";
import Message from "./pages/Message";
import Activities from "./pages/Activities";
import Facilities from "./pages/Facilities";
import AdmissionFAQ from "./pages/AdmissionFAQ";
import Franchise from "./pages/Franchise";

function App() {
	const [header, setHeader] = useState(false);

	return (
		<div
			className="app"
			onScroll={(e) => {
				if (e.target.scrollTop > 15) setHeader(true);
				else if (e.target.scrollTop === 0) setHeader(false);
			}}>
			<BrowserRouter>
				<Header header={header} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Activities" element={<Activities />} />
					<Route path="/AboutUs/VisionAndMission" element={<VisionAndMission />} />
					<Route path="/AboutUs/Message" element={<Message />} />
					<Route path="/Admission/AdmissionFAQ" element={<AdmissionFAQ />} />
					<Route path="/Facilities" element={<Facilities />} />
					<Route path="/Franchise" element={<Franchise />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;