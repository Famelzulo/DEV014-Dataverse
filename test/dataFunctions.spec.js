import { filterBy, filterData, filterCategory, computeStats } from './../src/dataFunctions.js';
import { data } from './data.js';

describe('Funciones de manipulación de datos', () => {
  // Test para la función filterBy
  it('filterBy filtra correctamente los datos por empresaName', () => {
    const result = filterBy(data, 'empresaName', 'Google');
    expect(result.length).toBe(2); // Debería haber dos lenguajes asociados con la empresa "Google"
  });

  // Test para la función filterData
  it('filterData filtra correctamente los datos según el valor proporcionado', () => {
    // Probando con un valor existente ('Google')
    const result1 = filterData(data, 'Google');
    expect(result1.length).toBe(2); // Debería haber dos lenguajes asociados con la empresa "Google"

    // Probando con un valor vacío
    const result2 = filterData(data, '');
    expect(result2.length).toBe(data.length); // Debería devolver todos los datos sin filtrar
  });

  // Test para la función filterCategory
  it('filterCategory filtra correctamente los datos según la categoría proporcionada', () => {
    // Probando con una categoría existente ('No tipado')
    const result1 = filterCategory(data, 'No tipado');
    expect(result1.length).toBe(3); // Debería haber tres lenguajes asociados con la categoría "No tipado"

    // Probando con un valor vacío
    const result2 = filterCategory(data, '');
    expect(result2.length).toBe(data.length); // Debería devolver todos los datos sin filtrar
  });

  // Test para la función computeStats
  it('computeStats calcula correctamente los porcentajes de lenguajes backend y frontend', () => {
    const stats = computeStats(data);
    expect(stats.backendPercentage).toBe('66.67'); // Debería ser 66.67%
    expect(stats.frontendPercentage).toBe('33.33'); // Debería ser 33.33%
  });
});
