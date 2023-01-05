const winners = {
  R1: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"],
  R2: [],
  R3: [],
  R4: [],
};

// generate winners for specific round
function generateWinnersForRounds(winners, round, roundNext) {
  const players = winners[round];
  console.log(`Players to be played for round ${roundNext}`, players);

  for (let i = 0; i < players.length; i += 2) {
    let winnerOfRound = generateWinners(players[i], players[i + 1]);
    winners[roundNext].push(winnerOfRound);
  }

  console.log(`Winners after round ${roundNext}`, winners);
}

// generate winner by randomly selecting points
function generateWinners(player1, player2) {
  console.log("==============================");
  const point1 = Math.floor(Math.random() * 10);
  const point2 = Math.floor(Math.random() * 10);

  const winner = point1 > point2 ? player1 : player2;
  console.log(`${player1}:  ${point1}, ${player2}:  ${point2},  --> ${winner}`);
  return winner;
}

// console.log(generateWinners(1, 2));
generateWinnersForRounds(winners, "R1", "R2");
generateWinnersForRounds(winners, "R2", "R3");
generateWinnersForRounds(winners, "R3", "R4");
