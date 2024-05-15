import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import About from "./Pages/About";
import AboutEnglish from "./Pages/AboutEnglish";
import AboutSpanish from "./Pages/AboutSpanish";
import Footer from "./Components/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main/>} />
					<Route path="/about" element={<About/>} >
						<Route index element={<AboutEnglish/>}/>
						<Route path="spanish" element={<AboutSpanish/>} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer/>
		</div>
	);
}

export default App;

