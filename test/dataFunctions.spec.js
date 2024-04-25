import { filterData } from './../src/dataFunctions.js';
import { data } from './data.js';

//test
describe("Check that filter function works", () => {
  it("returns All of google in facts", () => {
    expect(filterData(data, "empresaName", "Google")).toBe(2);
  })
});
