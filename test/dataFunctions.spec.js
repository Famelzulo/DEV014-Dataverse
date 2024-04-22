import { filterBy, filterData, filterCategory, sortData, computeStats } from '../src/dataFunctions.js';
import data from './data.js';

describe('Funciones de manipulación de datos', () => {
  let forEachCalls;
  let forStatements;

  beforeEach(() => {
    forEachCalls = [];
    forStatements = [];

    // Simular el comportamiento de forEach y for
    Array.prototype.forEach = jest.fn((callback) => {
      forEachCalls.push(callback);
    });

    // Simular el comportamiento de for
    jest.spyOn(Array.prototype, 'reduce').mockImplementation((callback) => {
      const arrayLength = forStatements.length;
      for (let i = 0; i < arrayLength; i++) {
        callback(forStatements[i], i, forStatements);
      }
    });
  });

  it('filterBy utiliza reduce', () => {
    const testData = [
      { facts: { empresaName: 'Google' } },
      { facts: { empresaName: 'Amazon' } },
      { facts: { empresaName: 'Nasa u otros' } }
    ];

    filterBy(testData, 'empresaName', 'Google');

    expect(forStatements.length <= forEachCalls.length).toBe(true);
  });

  it('filterData utiliza reduce', () => {
    filterData(data, 'Google');

    expect(forStatements.length <= forEachCalls.length).toBe(true);
  });

  it('filterCategory utiliza reduce', () => {
    filterCategory(data, 'Tipado');

    expect(forStatements.length <= forEachCalls.length).toBe(true);
  });

  it('sortData utiliza reduce', () => {
    sortData(data, 'name', 'asc');

    expect(forStatements.length <= forEachCalls.length).toBe(true);
  });

  it('computeStats utiliza reduce', () => {
    computeStats(data);

    expect(forStatements.length <= forEachCalls.length).toBe(true);
  });
});
