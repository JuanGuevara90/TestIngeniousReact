import "./App.css";

function App() {
	return (
		<div className="App">
			<h1 className="TeresaStyle">Curso de Programacion Web</h1>
			<h2>Temario: </h2>
			<ol>
				<li>Html</li>
				<li>Javascript</li>
				<li>CSS</li>
			</ol>
			<button onClick={() => alert("Hola a todos en el curso")}>
				Enviar Mensaje
			</button>
		</div>
	);
}

export default App;
