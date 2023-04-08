const chispum = require("./chispum");

describe("chispum", () => {
     test("returns expected array", () => {
          const expected = [1, 2, "Chis", 4, "Pum", "Chis", 7, 8, "Chis", "Pum", 11, "Chis", 13, 14, "Chispum", 16, 17, "Chis", 19, "Pum",];
          const result = chispum();
          expect(result).toEqual(expected);
     });
});
