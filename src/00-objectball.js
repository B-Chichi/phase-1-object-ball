function gameObject() {
  return {
    home: {
      teamName: `Brooklyn Nets`,
      colors: [`black`, `white`],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },

        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brooke Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },

        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: [`Turquoise`, `Purple`],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 4,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function numPointsScored(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName].points;
  } else if (game.away.player[playerName]) {
    return game.away.players[playerName].points;
  }
}

function shoeSize(playerName) {
  for (const team of Object.values(gameObject())) {
    if (team.players[playerName]) {
      return team.players[playerName].shoe;
    }
  }
}

function teamColors(teamName) {
  for (let team of Object.values(gameObject())) {
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

function teamNames() {
  return Object.values(gameObject).map((team) => team.teamName);
}

function playerNumbers(teamName) {
  for (const team of Object.values(gameObject)) {
    if (team.teamName === teamName) {
      return Object.values(team.players).map((player) => player.number);
    }
  }
}

function playerStats(playerName) {
  for (const team of Object.values(gameObject)) {
    if (team.players[playerName]) {
      return team.players[playerName].points;
    }
  }
}




function mostPointsScored() {
  let maxPoints = 0;
  let playerWithMostPoints = "";

  for (const team of Object.values(gameObject())) {
    for (const [player, stats] of Object.entries(team.players)) {
      if (stats.points > maxPoints) {
        maxPoints = stats.points;
        playerWithMostPoints = player;
      }
    }
  }
  return playerWithMostPoints;
}

function winningTeam() {
  let teamScores = {};

  for (const [teamName, team] of Object.entries(gameObject())) {
    teamScores[team.teamName] = Object.values(team.players).reduce(
      (total, player) => total + player.points,
      0
    );
  }
  return Object.keys(teamScores).reduce((a, b) =>
    teamScores[a] > teamScores[b] ? a : b
  );
}

function playerWithLongestName() {
  let longestName = "";

  for (const team of Object.values(gameObject())) {
    for (const playerName of Object.keys(team.players)) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }
  return longestName;
}


