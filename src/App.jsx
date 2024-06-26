import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import About from "./Pages/About"
import AboutEnglish from "./Pages/AboutEnglish";
import AboutSpanish from "./Pages/AboutSpanish";
import Footer from "./Components/Footer";
import Pages from "./Components/Pages"
import Formation from "./Pages/Formation";
import Experience from "./Pages/Experience";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main/>}>
						<Route index element={<Pages/>}/>
						<Route path="/aboutme" element={<About/>}>
							<Route index element={<AboutEnglish/>}/>
							<Route path="spanish" element={<AboutSpanish/>}/>
						</Route>
						<Route path="formation" element={<Formation/>}/>
						<Route path="experience" element={<Experience/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer/>
		</div>
	);
}

export default App;

