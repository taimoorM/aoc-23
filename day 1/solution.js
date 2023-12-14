const fs = require("fs");

async function getSumOfCalibrationValues() {
  fs.readFile("./input.txt", "utf8", (err, text) => {
    if (err) throw err;
    let acc = 0;
    let values = [];

    for (let c of text) {
      if (c === "\n") {
        console.log(values);
        acc += parseInt([values[0], values[values.length - 1]].join(""));
        values = [];
      } else if (!isNaN(Number(c))) {
        values.push(c);
      }
    }

    console.log(acc);
    console.log(new Date());
  });
}
console.log(new Date());
getSumOfCalibrationValues();
