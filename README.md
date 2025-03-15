# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Para iniciar el proyecto:
(en la ruta del proyecto ejecutar los siguientes comandos):
Instalar dependencias con npm intall
cuanodo se cre el packaje.json comprobar que se instalaron las dependencias y proyecto listo para ejecurar con
npm run dev
Diario de Desarrollo - Calculadora de Méritos para Inquilinos
Día 1: Exploración y Inicio del Proyecto (2.5 horas)
Hora de inicio: 10:00
Hora de fin: 12:30
Tareas realizadas:
Entendiendo el proyecto (30 minutos): Leí las instrucciones de la actividad y el documento del BOPA para entender cómo funciona la baremación. Al principio no estaba seguro de cómo elegir los 12 subapartados, así que decidí basarme en mi idea de una calculadora para inquilinos porque ya tenía algo parecido. Investigué un poco en Google sobre cómo se evalúan inquilinos (busqué "criterios para alquileres seguros") y anoté ideas como historial de pagos o ingresos.
Configuración inicial (1 hora): Abrí mi proyecto Vite con React y creé un nuevo componente llamado CalculadoraMeritos.jsx. Tuve que buscar en la documentación de React cómo usar useState porque no lo tenía muy claro. Copié una base que me dieron y empecé a adaptarla. Me costó un poco entender cómo conectar los inputs con el estado, pero después de probarlo varias veces funcionó.
Primeros cálculos (1 hora): Añadí los primeros 4 criterios (historial de pagos, ingresos, referencias y estabilidad laboral) y traté de hacer que el puntaje se actualizara al hacer clic en un botón. No funcionó al principio porque olvidé pasar la función al onClick, pero lo corregí después de buscar un tutorial en YouTube sobre eventos en React. Guardé el progreso y terminé ahí porque estaba un poco perdido con los límites de los puntos.
Decisiones tomadas: Elegí enfocarme en alquileres porque me parecía más práctico que el BOPA, que era muy largo. Decidí usar useState para guardar los datos y calcular el puntaje manualmente.
Problemas encontrados: No entendía bien cómo actualizar el puntaje en tiempo real, así que dejé eso para el día siguiente.
Tiempo total Día 1: 2.5 horas
Día 2: Finalización y Pruebas (2.5 horas)
Hora de inicio: 15:00
Hora de fin: 17:30
Tareas realizadas:
Añadir más criterios (1 hora): Volví a trabajar y añadí los otros 8 subapartados (avalista, no fumador, sin mascotas, etc.) basándome en lo que investigué el día anterior. Tuve que ajustar el código para que cada uno tuviera su propio cálculo (por ejemplo, 2 puntos por no fumador). Aquí me ayudé con un compañero que me explicó cómo usar Math.min para limitar los valores.
Actualización en tiempo real (1 hora): Intenté hacer que el puntaje se actualizara mientras escribía, y descubrí useEffect en la documentación de React. Me costó un poco entenderlo porque no sabía cómo dependía de los cambios en datosFormulario. Probé varias veces hasta que funcionó, y fue emocionante ver cómo el puntaje cambiaba solo.
Pruebas básicas y correcciones (30 minutos): Probé con valores altos (como 50,000 € de ingresos) y vi que daba más puntos de los esperados. Añadí validaciones en manejarCambio para limitar cosas como referencias a 3 o años a 5. También corregí un error donde el puntaje máximo no coincidía (pensé que era 44, pero es 47).
Decisiones tomadas: Decidí no usar un backend aún porque el profesor no lo pidió, y me enfoqué en que la interfaz fuera simple. Elegí poner los límites en el código para que no se puedan poner valores absurdos como 156 años.
Problemas encontrados: Al principio, useEffect no se actualizaba bien, pero lo solucioné poniendo [datosFormulario] como dependencia. También noté que la interfaz está fea sin estilos, pero lo dejaré para después.
Tiempo total Día 2: 2.5 horas
Tiempo total general: 5 horas
