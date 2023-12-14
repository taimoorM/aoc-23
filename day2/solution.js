const fs = require("fs");

const numbers = new Map([
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
]);

const regex = /[1-9]|(one|two|three|four|five|six|seven|eight|nine)/g;

async function getSumOfCalibrationValues() {
  fs.readFile("../day 1/input.txt", "utf8", (err, text) => {
    if (err) throw err;
    let acc = 0;

    let line = "";

    for (let c of text) {
      if (c === "\n") {
        const matches = line.match(regex);

        if (matches.length === 1) {
          console.log(matches[0]);
          acc += parseInt(matches[0]);

          line = "";
        } else {
          const values = [
            isNaN(matches[0]) ? numbers.get(matches[0]) : matches[0],
            isNaN(matches[matches.length - 1])
              ? numbers.get(matches[matches.length - 1])
              : matches[matches.length - 1],
          ];

          acc += parseInt(values.join(""));
          line = "";
        }
      } else {
        line += c;
      }
    }

    console.log(acc);
    console.log(new Date());
  });
}
console.log(new Date());
getSumOfCalibrationValues();
