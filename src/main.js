import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData } from './dataFunctions.js'; // Importa ambas funciones desde el mismo archivo
import { filterCategory } from './dataFunctions.js';
import {  sortData } from './dataFunctions.js';
const root = document.getElementById("root");
root.appendChild(renderItems(data));

const selectElement = document.getElementById('filterSelect');
const selectElement2 = document.getElementById('filterSelect2');
const selectElement3 = document.getElementById('filterSelect3');

selectElement.addEventListener("change", myFunction);
selectElement2.addEventListener("change", mySecondFunction);
selectElement3.addEventListener("change", myThirdFunction);

function myFunction() {
  console.log(selectElement.value);
  root.innerHTML = '';
  root.appendChild(renderItems(filterData(data, selectElement.value)));
}

function mySecondFunction() {
  console.log(selectElement2.value);
  root.innerHTML = '';
  root.appendChild(renderItems(filterCategory(data, selectElement2.value)));
}
function myThirdFunction() {
  console.log(selectElement3.value);
  root.innerHTML = '';
  root.appendChild(renderItems(sortData(data, null ,selectElement3.value)));


}




