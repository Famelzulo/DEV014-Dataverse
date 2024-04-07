// import { filterData, sortData, computeStats } from './dataFunctions.js';// botones
import { renderItems } from './view.js';

import data from './data/dataset.js';

const root = document.getElementById("root")
//console.log(root.innerHTML);
root.innerHTML = renderItems(data);



// console.log(example, renderItems(data), data);