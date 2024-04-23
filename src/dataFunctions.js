//AQUI SE GENERA LAS FUNCIONES

export function filterBy(data, key, value) {
  return data.filter(item => item['facts'][key] === value);
}

export function filterData(data, value) {
  
  console.log(data, value);
  if (value === 'Google' || value === 'Amazon' || value === 'Nasa u otros') {
    return filterBy(data, 'empresaName', value);
  } else if (value === "") {
    return data;
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
  // data.sort(function(a, b) {
  //return (a.name) -(b.name);
  //};
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
  const totaldata = data.reduce(acc => acc +1,0)

  // Retornar los resultados
  return {
    backendPercentage: backendPercentage.toFixed(2),
    frontendPercentage: frontendPercentage.toFixed(2)
    
  };
}

export function reset() {
  const selectElement = document.getElementById('filterSelect');
  const selectElement2 = document.getElementById('filterSelect2');
  const selectElement3 = document.getElementById('filterSelect3');
  const statsElement = document.getElementById("stats");

  // Restablecer los valores de los elementos de selección
  selectElement.value = '';
  selectElement2.value = '';
  selectElement3.value = '';

  // Limpiar el contenido del área de estadísticas
  statsElement.innerHTML = '';
}


  






