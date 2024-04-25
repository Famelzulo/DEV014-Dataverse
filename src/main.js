import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData, filterCategory, sortData, computeStats, filterBy } from './dataFunctions.js'

const root = document.querySelector("#root");
root.appendChild(renderItems(data));

const selectElement = document.querySelector('[data-testid="select-filter"]');
const selectElement2 = document.querySelector('[data-testid="select-sort2"]');
const selectElement3 = document.querySelector('[data-testid="select-sort"]');
const computeButton = document.querySelector('[data-testid="calculateButton"]');
const resetButton = document.querySelector('[data-testid="button-clear"]');

// Tu lógica de manipulación de eventos y otros procesos aquí...

// variables de operacion
let primerFiltro = "";
let segundoFiltro = "";
let orderCriteria = "";
let clonedData = data;

selectElement.addEventListener("change", function (event) {
  //console.log(event.target.value);
  root.innerHTML = '';
  primerFiltro = event.target.value;
  //console.log("primer filtro", primerFiltro);
  refreshItems(clonedData);
  // root.appendChild(renderItems(filterData(data, filterBy, event.target.value)));
});

selectElement2.addEventListener("change", function (event) {
  //console.log(event.target.value);
  root.innerHTML = '';
  segundoFiltro = event.target.value;
  //console.log("catergoria filtro", segundoFiltro);
  refreshItems(clonedData);
  // root.appendChild(renderItems(filterCategory(data, event.target.value)));
});

selectElement3.addEventListener("change", function (event) {
  //console.log(event.target.value);
  root.innerHTML = '';
  orderCriteria = event.target.value;
  //console.log("sort", orderCriteria);
  refreshItems(clonedData);
  // root.appendChild(renderItems(sortData(data, null, event.target.value)));
});

function refreshItems(data) {
  if (primerFiltro.length > 0) {
    // aplica primer filtro
    data = filterData(data, filterBy, primerFiltro);
  }
  if (segundoFiltro.length > 0) {
    // aplica segundo filtro
    data = filterCategory(data, segundoFiltro);
  }
  if (orderCriteria.length > 0) {
    // aplica ordenamiento
    data = sortData(data, null, orderCriteria);
  }
  root.appendChild(renderItems(data));
}

computeButton.addEventListener("click", function () {
  //console.log("Botón 'Calcular' clicado");
  const statsResult = computeStats(data);
  //console.log("Resultados de las estadísticas:", statsResult);
  const statsContainer = document.querySelector('[data-testid="statsContainer"]');
  if (statsContainer) {
    statsContainer.innerHTML = `Uso de backend: ${statsResult.backendPercentage}%    Uso de frontend: ${statsResult.frontendPercentage}%`;
  } else {
    //console.log("Elemento con atributo 'data-testid=\"statsContainer\"' no encontrado en el HTML");
  }
});

resetButton.addEventListener("click", function () {
  primerFiltro = "";
  segundoFiltro = "";
  orderCriteria = "";
  clonedData = data;
  // selectElement.selectedIndex = 0;
  // selectElement2.selectedIndex = 0;
  // selectElement3.selectedIndex = 0;
  root.innerHTML = "";
  root.appendChild(renderItems(data));
});

//selectElement.addEventListener("change", myFunction);
//selectElement2.addEventListener("change", mySecondFunction);
//selectElement3.addEventListener("change", myThirdFunction);
//computeButton.addEventListener("click", myFourthFunction);
//resetButton.addEventListener("click", myfifthFunction);
// function myFunction() {
//   console.log(selectElement.value);
//   root.innerHTML = '';
//   root.appendChild(renderItems(filterData(data, selectElement.value)));
// }

// function mySecondFunction() {
//   console.log(selectElement2.value);
//   root.innerHTML = '';
//   root.appendChild(renderItems(filterCategory(data, selectElement2.value)));
// }

// function myThirdFunction() {
//   console.log(selectElement3.value);
//   root.innerHTML = '';
//   root.appendChild(renderItems(sortData(data, null, selectElement3.value)));
// }

// function myFourthFunction() {
//   // Invoca la función computeStats aquí
//   console.log(computeButton.value)
//   const statsResult = computeStats(data); // Pasar 'data' como argumento
//   console.log(statsResult);
//   const stats = document.getElementById("stats");
//   //stats.innerHTML = statsResult.frontendPercentage + statsResult.backendPercentage ;
//   //``
//   stats.innerHTML = `Uso de backend: ${statsResult.backendPercentage}    Uso de frontend: ${statsResult.frontendPercentage}`;
// }

// function myfifthFunction() {
//   reset();
// }