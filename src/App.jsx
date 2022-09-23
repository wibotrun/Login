import './App.css';
import Formulario from './Formulario';
import Imagen from './Imagen';
import Header from './Header';
import Boton from './Boton';

function App() {
  return (
    <div className="App">
     <div className='ContenedorGrande1'>
     <Header />
     <Formulario />
    <Boton Texto="Prefiero iniciar sesion" className="botonBlanco" onClick={apretado} />
    <Boton Texto="Siguiente " className="botonAzul" onClick={apretado} />
     </div>
     <div className='ContenedorGrande2'>
     <Imagen />
     <span className='rojo'>Cuenta protegida. Seguridad, siempre.</span>
     </div>
    </div>
  
 );
 function apretado(){
  alert('Botona pretado')}
  }



export default App;
