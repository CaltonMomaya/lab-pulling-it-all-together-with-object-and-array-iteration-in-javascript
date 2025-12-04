function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
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
                "Brook Lopez": {
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
            colors: ["Turquoise", "Purple"],
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
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
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

// find player
function findPlayer(playerName) {
    var game = gameObject();
    
    // Check home team
    if (game.home.players[playerName]) {
        return { playerData: game.home.players[playerName], team: "home" };
    }
    
    // Check away team
    if (game.away.players[playerName]) {
        return { playerData: game.away.players[playerName], team: "away" };
    }
    
    return null;
}

// retun points
function numPointsScored(playerName) {
    var playerInfo = findPlayer(playerName);
    return playerInfo ? playerInfo.playerData.points : 0;
}

// returns shoe size
function shoeSize(playerName) {
    var playerInfo = findPlayer(playerName);
    return playerInfo ? playerInfo.playerData.shoe : 0;
}

//team colors
function teamColors(teamName) {
    var game = gameObject();
    
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }
    
    return [];
}

// arry of teamnames
function teamNames() {
    var game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// arry of no of players
function playerNumbers(teamName) {
    var game = gameObject();
    var players = {};
    
    if (game.home.teamName === teamName) {
        players = game.home.players;
    } else if (game.away.teamName === teamName) {
        players = game.away.players;
    } else {
        return [];
    }
    
    // numbers in order of players
    var numbers = [];
    for (var playerName in players) {
        if (players.hasOwnProperty(playerName)) {
            numbers.push(players[playerName].number);
        }
    }
    return numbers;
}

// player stast
function playerStats(playerName) {
    var playerInfo = findPlayer(playerName);
    return playerInfo ? playerInfo.playerData : {};
}

// player rebounds
function bigShoeRebounds() {
    var game = gameObject();
    var largestShoeSize = 0;
    var playerWithLargestShoe = null;
    
    // Check home players
    for (var playerName in game.home.players) {
        if (game.home.players.hasOwnProperty(playerName)) {
            var player = game.home.players[playerName];
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoe = player;
            }
        }
    }
    
    // Check away players
    for (var playerName in game.away.players) {
        if (game.away.players.hasOwnProperty(playerName)) {
            var player = game.away.players[playerName];
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoe = player;
            }
        }
    }
    
    return playerWithLargestShoe ? playerWithLargestShoe.rebounds : 0;
}

// Bonus functns
function mostPointsScored() {
    var game = gameObject();
    var maxPoints = 0;
    var topScorer = "";
    
    // Check home players
    for (var playerName in game.home.players) {
        if (game.home.players.hasOwnProperty(playerName)) {
            var player = game.home.players[playerName];
            if (player.points > maxPoints) {
                maxPoints = player.points;
                topScorer = playerName;
            }
        }
    }
    
    // Check away players
    for (var playerName in game.away.players) {
        if (game.away.players.hasOwnProperty(playerName)) {
            var player = game.away.players[playerName];
            if (player.points > maxPoints) {
                maxPoints = player.points;
                topScorer = playerName;
            }
        }
    }
    
    return topScorer;
}

function winningTeam() {
    var game = gameObject();
    var homeTotal = 0;
    var awayTotal = 0;
    
    // Calculate home team total points
    for (var playerName in game.home.players) {
        if (game.home.players.hasOwnProperty(playerName)) {
            homeTotal += game.home.players[playerName].points;
        }
    }
    
    // Calculate away team total points
    for (var playerName in game.away.players) {
        if (game.away.players.hasOwnProperty(playerName)) {
            awayTotal += game.away.players[playerName].points;
        }
    }
    
    return homeTotal > awayTotal ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    var game = gameObject();
    var longestName = "";
    
    // Check home players
    for (var playerName in game.home.players) {
        if (game.home.players.hasOwnProperty(playerName)) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }
    
    // Check away players
    for (var playerName in game.away.players) {
        if (game.away.players.hasOwnProperty(playerName)) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }
    
    return longestName;
}

function doesLongNameStealATon() {
    var game = gameObject();
    var maxSteals = 0;
    var playerWithMostSteals = "";
    
    // Check home players
    for (var playerName in game.home.players) {
        if (game.home.players.hasOwnProperty(playerName)) {
            var player = game.home.players[playerName];
            if (player.steals > maxSteals) {
                maxSteals = player.steals;
                playerWithMostSteals = playerName;
            }
        }
    }
    
    // Check away players
    for (var playerName in game.away.players) {
        if (game.away.players.hasOwnProperty(playerName)) {
            var player = game.away.players[playerName];
            if (player.steals > maxSteals) {
                maxSteals = player.steals;
                playerWithMostSteals = playerName;
            }
        }
    }
    
    // Check whether player with longest name has most steals
    var longestName = playerWithLongestName();
    var longestNamePlayer;
    
    if (game.home.players[longestName]) {
        longestNamePlayer = game.home.players[longestName];
    } else {
        longestNamePlayer = game.away.players[longestName];
    }
    
    return longestNamePlayer.steals === maxSteals;
}