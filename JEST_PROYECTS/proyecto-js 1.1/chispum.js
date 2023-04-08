function chispum() {
     const result = [];
     for (let i = 1; i <= 20; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
               result.push("Chispum");
          } else if (i % 3 === 0) {
               result.push("Chis");
          } else if (i % 5 === 0) {
               result.push("Pum");
          } else {
               result.push(i);
          }
     }
     return result;
}
module.exports = chispum;
