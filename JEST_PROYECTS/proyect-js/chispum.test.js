const chispum = require("./chispum");

describe("chispum", () =>{
     test("3 si es 3", () =>{
          const expected = [1, 2, "Chis", 4, "Pum", "Chis", 7, 8, "Chis", "Pum", 11, "Chis", 13, 14, "Chispum"];
          const result = chispum(3,5);

          expect(result).toEqual(expected);
     });

     
     test("5 si es 5", () =>{
          const expected = [1, 2, 'Chis', 4, 'Pum', 'Chis', 7, 8, 'Chis', 'Pum', 11, 'Chis', 13, 14, 'Chispum'];
          const result = chispum(3,5);

          expect(result).toEqual(expected);
     });
});
