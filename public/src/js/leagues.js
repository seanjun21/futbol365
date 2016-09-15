var leagues = {
  "424": "European Championships France 2016",
  "426": "Premier League 2016/17",
  "427": "Championship 2016/17",
  "428": "League One 2016/17",
  "430": "1. Bundesliga 2016/17",
  "431": "2. Bundesliga 2016/17",
  "432": "DFB-Pokal 2016/17",
  "433": "Eredivisie 2016/17",
  "434": "Ligue 1 2016/17",
  "435": "Ligue 2 2016/17",
  "436": "Primera Division 2016/17",
  "437": "Liga Adelante 2016/17",
  "438": "Serie A 2016/17",
  "439": "Primeira Liga 2016/17",
  "440": "Champions League 2016/17"
};


// Parse this: Premier League 2017/17 teams by order in standing

var teams = {
  "_links": {
    "self": {
      "href": "http://api.football-data.org/v1/competitions/426/leagueTable/?matchday=5"
    },
    "competition": {
      "href": "http://api.football-data.org/v1/competitions/426"
    }
  },
  "leagueCaption": "Premier League 2016/17",
  "matchday": 5,
  "standing": [
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/65"
        }
      },
      "position": 1,
      "teamName": "Manchester City FC",
      "crestURI": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
      "playedGames": 4,
      "points": 12,
      "goals": 11,
      "goalsAgainst": 4,
      "goalDifference": 7,
      "wins": 4,
      "draws": 0,
      "losses": 0,
      "home": {
        "goals": 5,
        "goalsAgainst": 2,
        "wins": 2,
        "draws": 0,
        "losses": 0
      },
      "away": {
        "goals": 6,
        "goalsAgainst": 2,
        "wins": 2,
        "draws": 0,
        "losses": 0
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/61"
        }
      },
      "position": 2,
      "teamName": "Chelsea FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg",
      "playedGames": 4,
      "points": 10,
      "goals": 9,
      "goalsAgainst": 4,
      "goalDifference": 5,
      "wins": 3,
      "draws": 1,
      "losses": 0,
      "home": {
        "goals": 5,
        "goalsAgainst": 1,
        "wins": 2,
        "draws": 0,
        "losses": 0
      },
      "away": {
        "goals": 4,
        "goalsAgainst": 3,
        "wins": 1,
        "draws": 1,
        "losses": 0
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/62"
        }
      },
      "position": 3,
      "teamName": "Everton FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg",
      "playedGames": 4,
      "points": 10,
      "goals": 7,
      "goalsAgainst": 2,
      "goalDifference": 5,
      "wins": 3,
      "draws": 1,
      "losses": 0,
      "home": {
        "goals": 2,
        "goalsAgainst": 1,
        "wins": 1,
        "draws": 1,
        "losses": 0
      },
      "away": {
        "goals": 5,
        "goalsAgainst": 1,
        "wins": 2,
        "draws": 0,
        "losses": 0
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/66"
        }
      },
      "position": 4,
      "teamName": "Manchester United FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg",
      "playedGames": 4,
      "points": 9,
      "goals": 7,
      "goalsAgainst": 3,
      "goalDifference": 4,
      "wins": 3,
      "draws": 0,
      "losses": 1,
      "home": {
        "goals": 3,
        "goalsAgainst": 2,
        "wins": 1,
        "draws": 0,
        "losses": 1
      },
      "away": {
        "goals": 4,
        "goalsAgainst": 1,
        "wins": 2,
        "draws": 0,
        "losses": 0
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/73"
        }
      },
      "position": 5,
      "teamName": "Tottenham Hotspur FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg",
      "playedGames": 4,
      "points": 8,
      "goals": 7,
      "goalsAgainst": 2,
      "goalDifference": 5,
      "wins": 2,
      "draws": 2,
      "losses": 0,
      "home": {
        "goals": 2,
        "goalsAgainst": 1,
        "wins": 1,
        "draws": 1,
        "losses": 0
      },
      "away": {
        "goals": 5,
        "goalsAgainst": 1,
        "wins": 1,
        "draws": 1,
        "losses": 0
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/64"
        }
      },
      "position": 6,
      "teamName": "Liverpool FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg",
      "playedGames": 4,
      "points": 7,
      "goals": 9,
      "goalsAgainst": 7,
      "goalDifference": 2,
      "wins": 2,
      "draws": 1,
      "losses": 1,
      "home": {
        "goals": 4,
        "goalsAgainst": 1,
        "wins": 1,
        "draws": 0,
        "losses": 0
      },
      "away": {
        "goals": 5,
        "goalsAgainst": 6,
        "wins": 1,
        "draws": 1,
        "losses": 1
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/57"
        }
      },
      "position": 7,
      "teamName": "Arsenal FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      "playedGames": 4,
      "points": 7,
      "goals": 8,
      "goalsAgainst": 6,
      "goalDifference": 2,
      "wins": 2,
      "draws": 1,
      "losses": 1,
      "home": {
        "goals": 5,
        "goalsAgainst": 5,
        "wins": 1,
        "draws": 0,
        "losses": 1
      },
      "away": {
        "goals": 3,
        "goalsAgainst": 1,
        "wins": 1,
        "draws": 1,
        "losses": 0
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/322"
        }
      },
      "position": 8,
      "teamName": "Hull City FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/a/a9/Hull_City_AFC.svg",
      "playedGames": 4,
      "points": 7,
      "goals": 5,
      "goalsAgainst": 3,
      "goalDifference": 2,
      "wins": 2,
      "draws": 1,
      "losses": 1,
      "home": {
        "goals": 2,
        "goalsAgainst": 2,
        "wins": 1,
        "draws": 0,
        "losses": 1
      },
      "away": {
        "goals": 3,
        "goalsAgainst": 1,
        "wins": 1,
        "draws": 1,
        "losses": 0
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/343"
        }
      },
      "position": 9,
      "teamName": "Middlesbrough FC",
      "crestURI": "https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg",
      "playedGames": 4,
      "points": 5,
      "goals": 4,
      "goalsAgainst": 4,
      "goalDifference": 0,
      "wins": 1,
      "draws": 2,
      "losses": 1,
      "home": {
        "goals": 2,
        "goalsAgainst": 3,
        "wins": 0,
        "draws": 1,
        "losses": 1
      },
      "away": {
        "goals": 2,
        "goalsAgainst": 1,
        "wins": 1,
        "draws": 1,
        "losses": 0
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/346"
        }
      },
      "position": 10,
      "teamName": "Watford FC",
      "crestURI": "https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg",
      "playedGames": 4,
      "points": 4,
      "goals": 7,
      "goalsAgainst": 8,
      "goalDifference": -1,
      "wins": 1,
      "draws": 1,
      "losses": 2,
      "home": {
        "goals": 2,
        "goalsAgainst": 5,
        "wins": 0,
        "draws": 0,
        "losses": 2
      },
      "away": {
        "goals": 5,
        "goalsAgainst": 3,
        "wins": 1,
        "draws": 1,
        "losses": 0
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/354"
        }
      },
      "position": 11,
      "teamName": "Crystal Palace FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png",
      "playedGames": 4,
      "points": 4,
      "goals": 3,
      "goalsAgainst": 4,
      "goalDifference": -1,
      "wins": 1,
      "draws": 1,
      "losses": 2,
      "home": {
        "goals": 1,
        "goalsAgainst": 2,
        "wins": 0,
        "draws": 1,
        "losses": 1
      },
      "away": {
        "goals": 2,
        "goalsAgainst": 2,
        "wins": 1,
        "draws": 0,
        "losses": 1
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/74"
        }
      },
      "position": 12,
      "teamName": "West Bromwich Albion FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/8/8b/West_Bromwich_Albion.svg",
      "playedGames": 4,
      "points": 4,
      "goals": 2,
      "goalsAgainst": 3,
      "goalDifference": -1,
      "wins": 1,
      "draws": 1,
      "losses": 2,
      "home": {
        "goals": 1,
        "goalsAgainst": 2,
        "wins": 0,
        "draws": 1,
        "losses": 1
      },
      "away": {
        "goals": 1,
        "goalsAgainst": 1,
        "wins": 1,
        "draws": 0,
        "losses": 1
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/72"
        }
      },
      "position": 13,
      "teamName": "Swansea City FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/a/ab/Swansea_City_Logo.svg",
      "playedGames": 4,
      "points": 4,
      "goals": 4,
      "goalsAgainst": 6,
      "goalDifference": -2,
      "wins": 1,
      "draws": 1,
      "losses": 2,
      "home": {
        "goals": 2,
        "goalsAgainst": 4,
        "wins": 0,
        "draws": 1,
        "losses": 1
      },
      "away": {
        "goals": 2,
        "goalsAgainst": 2,
        "wins": 1,
        "draws": 0,
        "losses": 1
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/1044"
        }
      },
      "position": 14,
      "teamName": "AFC Bournemouth",
      "crestURI": "https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg",
      "playedGames": 4,
      "points": 4,
      "goals": 3,
      "goalsAgainst": 5,
      "goalDifference": -2,
      "wins": 1,
      "draws": 1,
      "losses": 2,
      "home": {
        "goals": 2,
        "goalsAgainst": 3,
        "wins": 1,
        "draws": 0,
        "losses": 1
      },
      "away": {
        "goals": 1,
        "goalsAgainst": 2,
        "wins": 0,
        "draws": 1,
        "losses": 1
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/328"
        }
      },
      "position": 14,
      "teamName": "Burnley FC",
      "crestURI": "https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png",
      "playedGames": 4,
      "points": 4,
      "goals": 3,
      "goalsAgainst": 5,
      "goalDifference": -2,
      "wins": 1,
      "draws": 1,
      "losses": 2,
      "home": {
        "goals": 3,
        "goalsAgainst": 2,
        "wins": 1,
        "draws": 1,
        "losses": 1
      },
      "away": {
        "goals": 0,
        "goalsAgainst": 3,
        "wins": 0,
        "draws": 0,
        "losses": 1
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/338"
        }
      },
      "position": 16,
      "teamName": "Leicester City FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png",
      "playedGames": 4,
      "points": 4,
      "goals": 4,
      "goalsAgainst": 7,
      "goalDifference": -3,
      "wins": 1,
      "draws": 1,
      "losses": 2,
      "home": {
        "goals": 2,
        "goalsAgainst": 1,
        "wins": 1,
        "draws": 1,
        "losses": 0
      },
      "away": {
        "goals": 2,
        "goalsAgainst": 6,
        "wins": 0,
        "draws": 0,
        "losses": 2
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/563"
        }
      },
      "position": 17,
      "teamName": "West Ham United FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg",
      "playedGames": 4,
      "points": 3,
      "goals": 5,
      "goalsAgainst": 9,
      "goalDifference": -4,
      "wins": 1,
      "draws": 0,
      "losses": 3,
      "home": {
        "goals": 3,
        "goalsAgainst": 4,
        "wins": 1,
        "draws": 0,
        "losses": 1
      },
      "away": {
        "goals": 2,
        "goalsAgainst": 5,
        "wins": 0,
        "draws": 0,
        "losses": 2
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/340"
        }
      },
      "position": 18,
      "teamName": "Southampton FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg",
      "playedGames": 4,
      "points": 2,
      "goals": 3,
      "goalsAgainst": 6,
      "goalDifference": -3,
      "wins": 0,
      "draws": 2,
      "losses": 2,
      "home": {
        "goals": 2,
        "goalsAgainst": 2,
        "wins": 0,
        "draws": 2,
        "losses": 0
      },
      "away": {
        "goals": 1,
        "goalsAgainst": 4,
        "wins": 0,
        "draws": 0,
        "losses": 2
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/71"
        }
      },
      "position": 19,
      "teamName": "Sunderland AFC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/6/60/AFC_Sunderland.svg",
      "playedGames": 4,
      "points": 1,
      "goals": 3,
      "goalsAgainst": 8,
      "goalDifference": -5,
      "wins": 0,
      "draws": 1,
      "losses": 3,
      "home": {
        "goals": 1,
        "goalsAgainst": 5,
        "wins": 0,
        "draws": 0,
        "losses": 2
      },
      "away": {
        "goals": 2,
        "goalsAgainst": 3,
        "wins": 0,
        "draws": 1,
        "losses": 1
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/70"
        }
      },
      "position": 20,
      "teamName": "Stoke City FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/a/a3/Stoke_City.svg",
      "playedGames": 4,
      "points": 1,
      "goals": 2,
      "goalsAgainst": 10,
      "goalDifference": -8,
      "wins": 0,
      "draws": 1,
      "losses": 3,
      "home": {
        "goals": 1,
        "goalsAgainst": 8,
        "wins": 0,
        "draws": 0,
        "losses": 2
      },
      "away": {
        "goals": 1,
        "goalsAgainst": 2,
        "wins": 0,
        "draws": 1,
        "losses": 1
      }
    }
  ]
}

// prints all teams:
// for (i=0; i< teams["standing"].length; i++) {
// 	console.log(teams["standing"][i]["teamName"])
// }
//
// Manchester City FC
// Chelsea FC
// Everton FC
// Manchester United FC
// Tottenham Hotspur FC
// Liverpool FC
// Arsenal FC
// Hull City FC
// Middlesbrough FC
// Watford FC
// Crystal Palace FC
// West Bromwich Albion FC
// Swansea City FC
// AFC Bournemouth
// Burnley FC
// Leicester City FC
// West Ham United FC
// Southampton FC
// Sunderland AFC
// Stoke City FC
