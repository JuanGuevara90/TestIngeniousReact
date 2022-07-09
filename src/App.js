import { useState } from "react";
import "./App.css";

function App() {
	const [contador, setContador] = useState(0);

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
			<button onClick={() => alert("Hola a todos en el curso")}>Sumar</button>
			<button onClick={() => alert("Hola a todos en el curso")}>Restar</button>
		</div>
	);
}

export default App;
