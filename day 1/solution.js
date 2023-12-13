const fs = require("fs");

async function getSumOfCalibrationValues() {
  fs.readFile("./input.txt", "utf8", (err, text) => {
    if (err) throw err;
    const textArray = text.split("\n");

    const sum = textArray.reduce((acc, curr) => {
      let values = [];
      for (let c of curr) {
        if (!isNaN(c)) {
          values.push(c);
        }
      }

      const value = values.join("");
      if (value === "") return acc;
      acc += parseInt(value);
      return acc;
    }, 0);

    console.log(sum);

    console.log(new Date());
  });
}
console.log(new Date());
getSumOfCalibrationValues();
