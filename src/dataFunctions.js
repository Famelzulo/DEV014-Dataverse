function filterBy(data, key, value) {
  return data.filter(item => item['facts'][key] === value);
}

export function filterData(data, value) {
  console.log(data, value);
  if (value === 'Google' || value === 'Amazon' || value === 'Personalizado') {
    return filterBy(data, 'Empresa', value);
  } else if (value === "") {
    return data;
  }
}

export function filterCategory(data, value) {
  console.log(data, value);
  if (value === 'Tipado' || value === 'No tipado' || value === 'Turing completo') {
    return filterBy(data, 'category', value);
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

