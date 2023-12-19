const fs = require("fs");

async function partOne() {
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
// console.log(new Date());
// partOne();

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

async function partTwo() {
  fs.readFile("./input.txt", "utf8", (err, text) => {
    if (err) throw err;
    let acc = 0;

    const lines = text.split(/\r?\n/);
    console.log(lines);

    for (let line of lines) {
      let firstValue;
      let secondValue;

      console.log(line);

      // search for first value going from left to right and go to next loop if value found
      for (let i = 0; i < line.length; i++) {
        let found = false;
        if (!isNaN(line[i])) {
          firstValue = line[i];

          break;
        } else {
          for (let key of numbers.keys()) {
            //if first letter of key is equal to current letter in line
            // then check if the remaining letters of the key are equal to the next letters in the line upto the length of the key

            if (key[0] === line[i] && key === line.slice(i, i + key.length)) {
              firstValue = numbers.get(key);
              found = true;
              break;
            }
          }

          if (found) {
            break;
          }
        }
      }

      // search for second value going from right to left and go to next line if value found
      for (let i = line.length - 1; i >= 0; i--) {
        let found = false;
        if (!isNaN(line[i])) {
          secondValue = line[i];

          break;
        } else {
          for (let key of numbers.keys()) {
            if (key[0] === line[i] && key === line.slice(i, i + key.length)) {
              secondValue = numbers.get(key);
              found = true;
              break;
            }
          }
          if (found) {
            break;
          }
        }
      }
      const value = [firstValue, secondValue].join("");
      console.log(value);
      acc += parseInt(value);
    }

    console.log(acc);
  });
}
console.log(new Date());
partTwo();
