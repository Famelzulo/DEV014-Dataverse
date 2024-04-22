import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData, filterCategory, sortData, computeStats, reset } from './dataFunctions.js'

const root = document.querySelector("#root");
root.appendChild(renderItems(data));

const selectElement = document.querySelector('#filterSelect');
const selectElement2 = document.querySelector('#filterSelect2');
const selectElement3 = document.querySelector('#filterSelect3');
const computeButton = document.querySelector('#calculateButton');
const resetButton = document.querySelector('#Button-clear');



selectElement.addEventListener("change", function(event) {
  console.log(event.target.value);
  root.innerHTML = '';
  root.appendChild(renderItems(filterData(data, event.target.value)));
});

selectElement2.addEventListener("change", function(event) {
  console.log(event.target.value);
  root.innerHTML = '';
  root.appendChild(renderItems(filterCategory(data, event.target.value)));
});

selectElement3.addEventListener("change", function(event) {
  console.log(event.target.value);
  root.innerHTML = '';
  root.appendChild(renderItems(sortData(data, null, event.target.value)));
});

computeButton.addEventListener("click", function() {
  console.log(computeButton.value);
  const statsResult = computeStats(data); // Pasar 'data' como argumento
  console.log(statsResult);
  const stats = document.getElementById("stats");
  stats.innerHTML = `Uso de backend: ${statsResult.backendPercentage}    Uso de frontend: ${statsResult.frontendPercentage}`;
});

resetButton.addEventListener("click", function() {
  reset();
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




