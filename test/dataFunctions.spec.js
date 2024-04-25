import { filterBy } from './../src/dataFunctions.js';
import { data } from './data.js';

//test
describe("Check that filter function works", () => {
  it("returns All of google in facts", () => {
    const resultado =filterBy(data, "empresaName", "Google")
    console.log("resultado", resultado.length);
    expect(resultado.length).toBe(2);
  })
});
//category name
//computestats
//