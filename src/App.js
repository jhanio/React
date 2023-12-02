import logo from './logo.svg';
import './App.css';

function mostrarTitulo(titulo) {
  return (
    <h1>
      {titulo}
    </h1>
  );
}
function App() {
  const title = 'LA ODISEA'
  return (
    <div>
      <h1>Hola React!!!!</h1>
      {mostrarTitulo('TEXTO INGRESADO POR FUNCION')}

      <hr></hr>
      <h1>El siguiente titulo de libro fue ingresado por una variable : :{title}</h1>

    </div>



  );
}

export default App;