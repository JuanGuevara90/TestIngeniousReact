import { useState } from "react";
import "./App.css";

function App() {
	const [contador, setContador] = useState(0);
	const handleClickSum = () => {
		setContador((prevState) => prevState + 1);
	};
	const handleClickLess = () => {
		setContador((prevState) => prevState - 1);
	};

	return (
		<div className="App">
			<h1 className="TeresaStyle">Curso de Programacion Web</h1>
			<h2>Temario: </h2>
			<ol>
				<li>Html</li>
				<li>Javascript</li>
				<li>CSS</li>
			</ol>
			<hr></hr>
			<h2>Contador</h2>
			<p>Value: {contador}</p>
			<button onClick={handleClickSum}>Sumar</button>
			<button onClick={handleClickLess}>Restar</button>
		</div>
	);
}

export default App;
