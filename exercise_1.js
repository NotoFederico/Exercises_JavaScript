/*
*Mark and John are trying to compare their BMI (Body Mass Index), which is
*calculated using the formula:
*BMI = mass / height ** 2 = mass / (height * height) (mass in kg
*and height in meter).
*/

let johnMass = 92;
let johnHeight = 1.95;
let markMass = 78;
let markHeight = 1.69;

let johnBMI = johnMass / (johnHeight ** 2);
let markBMI = markMass / (markHeight ** 2);
let markHigherBMI;

let output;

console.log("TEST DATA 1")
if (johnBMI < markBMI)
    output = `El BMI de Mark es mayor (${markBMI}) que el de John (${johnBMI})`;
else
    output = `El BMI de Mark es menor (${markBMI}) que el de John (${johnBMI})`;

console.log(output);

johnMass = 85;
johnHeight = 1.76;
markMass = 95;
markHeight = 1.88;

johnBMI = johnMass / (johnHeight ** 2);
markBMI = markMass / (markHeight ** 2);

console.log("TEST DATA 2")
if (johnBMI < markBMI)
    output = `El BMI de Mark es mayor (${markBMI}) que el de John (${johnBMI})`;
else
    output = `El BMI de Mark es menor (${markBMI}) que el de John (${johnBMI})`;

console.log(output);