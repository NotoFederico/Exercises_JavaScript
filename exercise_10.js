"use strict";
/*
Let's continue with our football betting app! Keep using the 'game' variable from 
before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Goals scored by:
console.log("Match goals scored by:");
for (const [pos, value] of game.scored.entries()) {
  console.log(`Goal ${pos + 1}: ${value}`);
}

//Average Odd
let averageOdd = 0;
const odds = Object.values(game.odds);
for (const iterator of odds) {
  averageOdd += iterator;
}
averageOdd /= odds.length;
console.log(`The average odd is: ${averageOdd.toFixed(2)}`);

//Printing odds

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team == "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}

//Cast a set to an array using spread operator
const scorersSet = [...new Set(game.scored)];
console.log(scorersSet);

const scorers = {};
scorers.tuvieja = "zarpale la lata";
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
