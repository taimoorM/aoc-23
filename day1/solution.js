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
console.log(new Date());
partOne();

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

async function partTwo() {
  fs.readFile("./input.txt", "utf8", (err, text) => {
    if (err) throw err;
    let acc = 0;

    let line = "";

    for (let c of text) {
      if (c === "\n") {
        const matches = line.match(regex);

        if (matches.length === 1) {
          const value = matches[0] + matches[0];
          console.log(value);
          acc += parseInt(value);

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
partTwo();
