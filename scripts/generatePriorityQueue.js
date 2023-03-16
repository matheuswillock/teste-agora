const teamShirts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function generateQueue() {
  for (let i = teamShirts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [teamShirts[i], teamShirts[j]] = [teamShirts[j], teamShirts[i]];
  }
  return teamShirts.join(" ");
}

module.exports = generateQueue;