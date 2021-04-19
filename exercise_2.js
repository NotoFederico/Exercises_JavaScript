/*
* There are two gymnastics teams, Dolphins and Koalas. They compete against each
* other 3 times. The winner with the highest average score wins a trophy
*/

const avgDolphinScore = (96 + 108 + 89) / 3;
const avgKoalasScore = (88 + 91 + 110) / 3;
const minAvgScore = 100;

if (avgDolphinScore > avgKoalasScore && avgDolphinScore >= minAvgScore) {
    console.log(`The score is ${avgDolphinScore}-${avgKoalasScore}, Dolphins are the winners!`);
}
else if (avgDolphinScore < avgKoalasScore && avgKoalasScore >= minAvgScore) {
    console.log(`The score is ${avgDolphinScore}-${avgKoalasScore}, Koalas are the winners!`);
}
else if (avgDolphinScore === avgKoalasScore && avgDolphinScore >= minAvgScore && avgKoalasScore >= minAvgScore) {
    console.log(`The score is ${avgDolphinScore}-${avgKoalasScore}, It's a draw, both teams wins the trophy!`);
}
else {
    console.log(`The scores are ${avgDolphinScore} and ${avgKoalasScore}, either of them is insufficient to determine a winner or a draw`);
}