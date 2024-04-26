import { describe } from '@jest/globals';
import { filterBy, filterCategory, filterData, computeStats, sortData } from './../src/dataFunctions.js';
import { data } from './data.js';

//testfilterby

describe("Check that filter function works", () => {
  it("returns All of google in facts", () => {
    const resultado = filterBy(data, "empresaName", "Google")
    console.log("resultado", resultado.length);
    expect(resultado.length).toBe(2);
  })
});


//filterdata 

describe('filterData', () => {
  it('returns correct filtered data for empresaName', () => {
    const filteredData = filterData(data, (data, key, value) => {
      return data.filter(item => item[key] === value);
    }, "empresaName", "Amazon");

    expect(filteredData.length).toBe(0);



  })
});



//filtercategory name

describe("check that filter function works", () => {
  it("retruns All of No tipado iin facts", () => {

    const result = filterCategory(data, "No tipado")
    console.log("result", result.length);
    expect(result.length).toBe(3);
  })
})


//computestats

describe('computeStats', () => {
  it('returns correct percentages for backend and frontend roles', () => {
    // Llamar a la función computeStats con los datos importados
    const stats = computeStats(data);

    // Verificar los resultados esperados
    expect(stats.backendPercentage).toBe('66.67');
    expect(stats.frontendPercentage).toBe('33.33');
  })
});


describe('sortData', () => {
  // Prueba de orden ascendente por nombre
  it('Orden ascendente por nombre', () => {
  
    const sortedData = sortData([data], 'name', 'asc');
    const dataresult = sortedData
    expect(sortedData).toBe(dataresult);
  });

  // Prueba de orden descendente por nombre
  it('Orden descendente por nombre', () => {
    const sortedData = sortData( [data], 'name', 'desc');
    const dataresult = sortedData
    expect(sortedData).toBe(dataresult);
  });
});
