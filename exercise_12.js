/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
*/

"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const btn = document.querySelector("button");

const scoreToCamel = function () {
  const textBox = document.querySelector("textarea").value;
  if (textBox.value != "") {
    let rows = textBox.split("\n");
    for (let [i, row] of rows.entries()) {
      row = row.trim().toLowerCase();
      row = row
        .replace(
          "_" + row.charAt(row.search("_") + 1),
          row.charAt(row.search("_") + 1).toUpperCase()
        )
        .padEnd(20);
      console.log(row + "✅".repeat(i + 1));
    }
  } else {
    console.log("No hay texto a convertir");
  }
};

btn.addEventListener("click", scoreToCamel);
