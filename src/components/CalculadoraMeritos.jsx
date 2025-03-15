import React, { useState, useEffect } from "react";

const CalculadoraMeritos = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    historialPagos: 0,
    ingresosMensuales: 0,
    referencias: 0,
    estabilidadLaboral: 0,
    avalista: 0,
    noFumador: 0,
    sinMascotas: 0,
    contratoPrevio: 0,
    deposito: 0,
    noDeudas: 0,
    edad: 0,
    seguroAlquiler: 0,
  });
  const [puntajeMeritos, setPuntajeMeritos] = useState(0);

  // Calcular méritos en tiempo real
  useEffect(() => {
    const {
      historialPagos,
      ingresosMensuales,
      referencias,
      estabilidadLaboral,
      avalista,
      noFumador,
      sinMascotas,
      contratoPrevio,
      deposito,
      noDeudas,
      edad,
      seguroAlquiler,
    } = datosFormulario;

    const puntajePagos = historialPagos === 1 ? 5 : 0;
    const puntajeIngresos = Math.min(Math.floor(ingresosMensuales / 500), 10);
    const puntajeReferencias = Math.min(referencias * 2, 6);
    const puntajeEstabilidad =
      estabilidadLaboral >= 2 ? 3 : estabilidadLaboral > 0 ? 1 : 0;
    const puntajeAvalista = avalista === 1 ? 3 : 0;
    const puntajeNoFumador = noFumador === 1 ? 2 : 0;
    const puntajeSinMascotas = sinMascotas === 1 ? 2 : 0;
    const puntajeContrato = Math.min(contratoPrevio, 5);
    const puntajeDeposito = Math.min(deposito, 3);
    const puntajeNoDeudas = noDeudas === 1 ? 4 : 0;
    const puntajeEdad = edad >= 25 && edad <= 40 ? 1 : 0;
    const puntajeSeguro = seguroAlquiler === 1 ? 3 : 0;

    const total =
      puntajePagos +
      puntajeIngresos +
      puntajeReferencias +
      puntajeEstabilidad +
      puntajeAvalista +
      puntajeNoFumador +
      puntajeSinMascotas +
      puntajeContrato +
      puntajeDeposito +
      puntajeNoDeudas +
      puntajeEdad +
      puntajeSeguro;

    setPuntajeMeritos(total);
  }, [datosFormulario]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({ ...datosFormulario, [name]: Number(value) });
  };

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="card-title text-center mb-4">
        Calculadora de Méritos para Inquilinos
      </h2>
      <div className="form-group">
        <label>Historial de pagos impecable:</label>
        <select
          name="historialPagos"
          onChange={manejarCambio}
          className="form-control"
        >
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </div>
      <div className="form-group mt-3">
        <label>Ingresos mensuales (€):</label>
        <input
          type="number"
          name="ingresosMensuales"
          value={datosFormulario.ingresosMensuales}
          onChange={manejarCambio}
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label>Referencias positivas:</label>
        <input
          type="number"
          name="referencias"
          value={datosFormulario.referencias}
          onChange={manejarCambio}
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label>Años en el empleo:</label>
        <input
          type="number"
          name="estabilidadLaboral"
          value={datosFormulario.estabilidadLaboral}
          onChange={manejarCambio}
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label>¿Tiene avalista?:</label>
        <select
          name="avalista"
          onChange={manejarCambio}
          className="form-control"
        >
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </div>
      <div className="form-group mt-3">
        <label>¿No fumador?:</label>
        <select
          name="noFumador"
          onChange={manejarCambio}
          className="form-control"
        >
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </div>
      <div className="form-group mt-3">
        <label>¿Sin mascotas?:</label>
        <select
          name="sinMascotas"
          onChange={manejarCambio}
          className="form-control"
        >
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </div>
      <div className="form-group mt-3">
        <label>Años de contrato previo:</label>
        <input
          type="number"
          name="contratoPrevio"
          value={datosFormulario.contratoPrevio}
          onChange={manejarCambio}
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label>Meses de depósito extra:</label>
        <input
          type="number"
          name="deposito"
          value={datosFormulario.deposito}
          onChange={manejarCambio}
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label>¿Certificado de no deudas?:</label>
        <select
          name="noDeudas"
          onChange={manejarCambio}
          className="form-control"
        >
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </div>
      <div className="form-group mt-3">
        <label>Edad:</label>
        <input
          type="number"
          name="edad"
          value={datosFormulario.edad}
          onChange={manejarCambio}
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label>¿Seguro de alquiler?:</label>
        <select
          name="seguroAlquiler"
          onChange={manejarCambio}
          className="form-control"
        >
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </div>
      <div className="mt-4">
        <p className="text-success font-weight-bold">
          Puntaje de méritos: <strong>{puntajeMeritos}</strong>
        </p>
      </div>
    </div>
  );
};

export default CalculadoraMeritos;
