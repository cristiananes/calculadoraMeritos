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
    <div>
      <h2>Calculadora de Méritos para Inquilinos</h2>
      <label>
        Historial de pagos impecable:{" "}
        <select name="historialPagos" onChange={manejarCambio}>
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </label>
      <br />
      <label>
        Ingresos mensuales (€):{" "}
        <input
          type="number"
          name="ingresosMensuales"
          value={datosFormulario.ingresosMensuales}
          onChange={manejarCambio}
        />
      </label>
      <br />
      <label>
        Referencias positivas:{" "}
        <input
          type="number"
          name="referencias"
          value={datosFormulario.referencias}
          onChange={manejarCambio}
        />
      </label>
      <br />
      <label>
        Años en el empleo:{" "}
        <input
          type="number"
          name="estabilidadLaboral"
          value={datosFormulario.estabilidadLaboral}
          onChange={manejarCambio}
        />
      </label>
      <br />
      <label>
        ¿Tiene avalista?:{" "}
        <select name="avalista" onChange={manejarCambio}>
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </label>
      <br />
      <label>
        ¿No fumador?:{" "}
        <select name="noFumador" onChange={manejarCambio}>
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </label>
      <br />
      <label>
        ¿Sin mascotas?:{" "}
        <select name="sinMascotas" onChange={manejarCambio}>
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </label>
      <br />
      <label>
        Años de contrato previo:{" "}
        <input
          type="number"
          name="contratoPrevio"
          value={datosFormulario.contratoPrevio}
          onChange={manejarCambio}
        />
      </label>
      <br />
      <label>
        Meses de depósito extra:{" "}
        <input
          type="number"
          name="deposito"
          value={datosFormulario.deposito}
          onChange={manejarCambio}
        />
      </label>
      <br />
      <label>
        ¿Certificado de no deudas?:{" "}
        <select name="noDeudas" onChange={manejarCambio}>
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </label>
      <br />
      <label>
        Edad:{" "}
        <input
          type="number"
          name="edad"
          value={datosFormulario.edad}
          onChange={manejarCambio}
        />
      </label>
      <br />
      <label>
        ¿Seguro de alquiler?:{" "}
        <select name="seguroAlquiler" onChange={manejarCambio}>
          <option value={0}>No</option>
          <option value={1}>Sí</option>
        </select>
      </label>
      <br />
      <p>
        Puntaje de méritos: <strong>{puntajeMeritos}</strong>
      </p>
    </div>
  );
};

export default CalculadoraMeritos;
