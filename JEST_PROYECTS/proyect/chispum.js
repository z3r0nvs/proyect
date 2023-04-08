function chispum(num3, num5) {

     const result = [];
     for (let i = 1; i <= 15; i++) {
          if (i % num3 === 0 && i % num5 === 0) {
               result.push("Chispum");
          } else if (i % num3 === 0) {
               result.push("Chis");
          } else if (i % num5 === 0) {
               result.push("Pum");
          } else {
               result.push(i);
          }
     }
     return result;
}
module.exports = chispum;
