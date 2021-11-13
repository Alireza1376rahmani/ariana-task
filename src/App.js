import "./App.css";
import Chart from "./components/Chart";
import Form from "./components/Form";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="container">
				<Routes>
					<Route path="form" element={<Form />} />
					<Route path="chart" element={<Chart />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
