import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData, filterCategory, sortData, computeStats, filterBy } from './dataFunctions.js'
//identificador  #
const root = document.querySelector("#root");
root.appendChild(renderItems(data));

const selectElement = document.querySelector('[data-testid="select-filter"]');
const selectElement2 = document.querySelector('[data-testid="select-sort2"]');
const selectElement3 = document.querySelector('[data-testid="select-sort"]');
const computeButton = document.querySelector('[data-testid="calculateButton"]');
const statsContainer = document.querySelector('[data-testid="statsContainer"]');
const resetButton = document.querySelector('[data-testid="button-clear"]');

// Tu lógica de manipulación de eventos y otros procesos aquí...

// variables de operacion(contiene los resultados)
let primerFiltro = "";
let segundoFiltro = "";
let orderCriteria = "";
let clonedData = data;

selectElement.addEventListener("change", function (event) {
  //console.log(event.target.value);
  root.innerHTML = ''; 
  primerFiltro = event.target.value;
  //console.log("primer filtro", primerFiltro);
  clonedData = refreshData(clonedData);
  root.appendChild(renderItems(clonedData));
});

selectElement2.addEventListener("change", function (event) {
  //console.log(event.target.value);
  root.innerHTML = '';
  segundoFiltro = event.target.value;
  //console.log("catergoria filtro", segundoFiltro);
  clonedData =  refreshData(clonedData);
  root.appendChild(renderItems(clonedData));
});

selectElement3.addEventListener("change", function (event) {
  //console.log(event.target.value);
  root.innerHTML = '';
  orderCriteria = event.target.value;
  //console.log("sort", orderCriteria);
  clonedData = refreshData(clonedData);
  root.appendChild(renderItems(clonedData));
});

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

// actualiza data (no renderiza)
function refreshData(data) {
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
    console.log(11, data);
    data = sortData(data, null, orderCriteria);
    console.log(22, data);

  }
  return data;
  //if (computeStats.length > 0) {
  //  root.appendChild(renderItems(data));
  //}
}



resetButton.addEventListener("click", function () {
  // limpia los filtros o sumario o variables de filtro
  primerFiltro = "";
  segundoFiltro = "";
  orderCriteria = "";

  // elementos html a su estado inicial
  selectElement.value = " ";
  selectElement2.value = " ";
  selectElement3.value = " ";
  statsContainer.innerHTML = " ";
  clonedData = data;
  root.innerHTML = "";
  root.appendChild(renderItems(data));
});

