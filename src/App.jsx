import CalculadoraMeritos from "./components/CalculadoraMeritos";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gestión de Alquileres</h1>
      {/* Añadir pareja en el formulario (pendiente de implementación) */}
      <CalculadoraMeritos />
    </div>
  );
}

export default App;
