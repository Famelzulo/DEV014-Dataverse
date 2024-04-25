//AQUI SE GENERA LAS FUNCIONES

export function filterBy(data, key, value) {
  return data.filter(item => item['facts'][key] === value);
}

export function filterData(data, filterBy, value) {
  console.log(data, filterBy, value);
  if (value === 'Google' || value === 'Amazon' || value === 'Nasa u otros') {
    return filterBy(data, 'empresaName', value);
  } else if (value === "") {
    return data;
  } else {
    return [];
  }
}



export function filterCategory(data, value) {
  console.log(data, value);
  if (value === 'Tipado' || value === 'No tipado' || value === 'Turing completo') {
    return filterBy(data, 'categoryName', value);
  } else if (value === "") {
    return data;
  }
}





function compareAsc(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;

}
function compareDesc(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;

}


export function sortData(data, sortBy, sortOrder) {

  if (sortOrder === 'asc') {
    data.sort(compareAsc);
    return data;
  } else if (sortOrder === 'desc') {
    data.sort(compareDesc);
    return data;
  } else if (sortOrder === "") {
    return data;
  }


}



export function computeStats(data) {
  // Contadores para lenguajes backend y frontend
  let backendCount = 0;
  let frontendCount = 0;

  // Recorrer cada lenguaje en los datos
  data.forEach(language => {
    // Verificar el rol del lenguaje (backend o frontend)(para lenguajes no personas)
    if (language.facts.roleName === "backend") {
      backendCount++;
    } else if (language.facts.roleName === "frontend") {
      frontendCount++;
    }
  });

  // Calcular el total de lenguajes
  const totalCount = backendCount + frontendCount;

  // Calcular los porcentajes
  const backendPercentage = (backendCount / totalCount) * 100;
  const frontendPercentage = (frontendCount / totalCount) * 100;
  const totaldata = data.reduce(acc => acc + 1, 0) //iter de 1 en 1 , 0 es el
  console.log(totaldata);

  // Retornar los resultados
  return {
    backendPercentage: backendPercentage.toFixed(2),
    frontendPercentage: frontendPercentage.toFixed(2)

  };
}

/*
export function reset() {
  const selectElement = document.querySelector('[data-testid="select-filter"]');
  const selectElement2 = document.querySelector('[data-testid="select-sort"]');
  const selectElement3 = document.querySelector('[data-testid="sort-order"]');

  const statsContainer = document.querySelector('[data-testid="statsContainer"]');

  if (selectElement && selectElement2 && statsContainer) {
    selectElement.value = '';
    selectElement2.value = '';
    selectElement3.value = '';
    statsContainer.innerHTML = '';
  }

  // Restaurar la data original si se proporciona
  if (originalData && Array.isArray(originalData)) {
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = ''; // Limpiar el contenido actual

      // Renderizar de nuevo la data original
      root.appendChild(renderItems(originalData));
    }
  }
}
*/





