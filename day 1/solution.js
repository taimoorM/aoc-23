const fs = require("fs");

async function getSumOfCalibrationValues() {
  let text;
  fs.readFile("./input.txt", "utf8", (err, text) => {
    if (err) throw err;
    const textArray = text.split("\n");

    const sum = textArray.reduce((acc, curr) => {
      for (let c of curr) {
        //check if it's a number
        if (!isNaN(c)) {
          acc += parseInt(c);
        }
      }
      return acc;
    }, 0);

    console.log(sum);

    console.log(new Date());
  });
}
console.log(new Date());
getSumOfCalibrationValues();
