// ===== Tarea: Aplicación principal ES6+ =====

import { curso, estudiantes } from "./datos.js";
import reporte from "./calculos.js";

// Crear una copia de Ana con un nombre diferente
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Agregar la nueva estudiante al arreglo
const todos = [...estudiantes, nuevo];

// Generar los reportes
const resultados = [`Curso: ${curso}`, ...todos.map(reporte)];

// Mostrar resultados en la consola
resultados.forEach((resultado) => console.log(resultado));

// Mostrar resultados en la página
const lista = document.querySelector("#reportes");

resultados.forEach((resultado) => {
  const elemento = document.createElement("li");
  elemento.textContent = resultado;
  lista.appendChild(elemento);
});
