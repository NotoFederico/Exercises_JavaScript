"use strict";
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgD, avgK, flag) {
    if (avgD >= 2 * avgK) {
        console.log(`Dolphins win - ${avgD} vs. ${avgK}`);
    }
    else if (avgK >= 2 * avgD) {
        console.log(`Koalas win - ${avgK} vs. ${avgD}`);
    }
    else {
        if (flag == false) {
            console.log(`No winner - K:${avgK} vs. D:${avgD}`);
        }
        else if (flag == true) {
            if (avgD > avgK) {
                console.log(`Dolphins win - ${avgD} vs. ${avgK}`);
            }
            else if (avgK > avgD) {
                console.log(`Koalas win - ${avgK} vs. ${avgD}`);
            }
        }
    }
}

let dolphinScore1 = 44;
let dolphinScore2 = 23;
let dolphinScore3 = 71;
let koalasScore1 = 65;
let koalasScore2 = 54;
let koalasScore3 = 49;

let avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);
let avgDolhins = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);

console.log("Test Data 1 - with rules");
checkWinner(avgDolhins, avgKoalas, false);
console.log("Test Data 1 - without rules");
checkWinner(avgDolhins, avgKoalas, true);

dolphinScore1 = 85;
dolphinScore2 = 21;
dolphinScore3 = 41;
koalasScore1 = 23;
koalasScore2 = 34;
koalasScore3 = 27;
avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);
avgDolhins = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);

console.log("Test Data 2 - with rules");
checkWinner(avgDolhins, avgKoalas, false);
console.log("Test Data 2 - withot rules");
checkWinner(avgDolhins, avgKoalas, true);
