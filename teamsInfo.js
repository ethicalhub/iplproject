const teamInfo = [{
    id : 1,
    fullName: 'Chennai Super Kings',
    key: 'CSK',
    championshipsWon: 3,
    teamIcon: './images/csk.png',
    message: 'MS Dhoni will play Next IPL',
    bestBat:'MS Dhoni',
    bestBowl:'Lungi Ngidi',
    players: [{
      id: 100,
      playerName: "MS Dhoni",
      from: "CSK",
      price: "1.50 Cr",
      isPlaying: true,
      description: "Batsman",
      image:"https://static.iplt20.com/players/284/1.png"
    },
    {
      id: 100,
      playerName: "Dwayne Bravo",
      from: "CSK",
      price: "0.50 Cr",
      isPlaying: true,
      description: "	All-rounder",
      image:"https://static.iplt20.com/players/284/25.png"
    }
   ]
 },
 {
    id : 2,
    fullName: 'Delhi Capitals',
    key: 'DC',
    championshipsWon: 0,
    teamIcon: './images/dc.jpg',
    bestBat:'Rishabh Pant',
    bestBowl:'Kagiso Rabda',
    message:'Rishabh Pant is on Fire...',
    players: [{
     id: 200,
     playerName: "Rishabh Pant",
     from: "DC",
     price: "3.80 Cr",
     isPlaying: true,
     description: "Batsman",
     image:"https://static.iplt20.com/players/284/2972.png"
   }

  ]
 },
 {
    id : 3,
    fullName: 'Kolkata Knight Riders',
    key: 'KKR',
    championshipsWon: 2,
    teamIcon: './images/kkr.jpg',
    bestBat:'Eoin Morgan',
    bestBowl:'Pat Cummins',
    message:'Korbo, Lorbo, Jeetbo',
    players: [{
      id: 300,
     playerName: "Eoin Morgan",
     from: "KKR",
     price: "7.50 Cr",
     isPlaying: true,
     description: "Batsman",
     image:"https://static.iplt20.com/players/284/197.png"
   }
  ]
 },
 {
    id : 4,
    fullName: 'Kings XI Punjab',
    key: 'KXIP',
    championshipsWon: 0,
    bestBat:'KL Rahul',
    bestBowl:'Mohammad Shami',
    teamIcon: './images/kxip.jpg',
    message:'Where is Yuvraj Singh?',
    players: [{
      id: 40,
     playerName: "KL Rahul",
     from: "KXIP",
     price: "1.3 Cr",
     isPlaying: true,
     description: "Batsman",
     image:"https://static.iplt20.com/players/284/1125.png"
    }
  ]
 },
 {
    id : 5,
    fullName: 'Mumbai Indians',
    key: 'MI',
    championshipsWon: 5,
    teamIcon: './images/mi.jpg',
    bestBat:'Rohit Sharma',
    bestBowl:'Jasprit Bumrah',
    message:'What if Adani buys a team in IPL?',
    players: [{
      id: 50,
     playerName: "Rohit Sharma",
     from: "MI",
     price: "3.50 Cr",
     isPlaying: true,
     description: "Batsman",
     image:"https://static.iplt20.com/players/284/107.png"
   }
  ]
 },
 {
    id : 6,
    fullName: 'Royal Challengers Bangalore',
    key: 'RCB',
    championshipsWon: 0,
    teamIcon: './images/rcb.jpg',
    bestBat:'Virat Kohli',
    bestBowl:'Mohammed Siraj',
    message:'Virat Captain Kohli',
    players: [{
      id: 60,
     playerName: "Virat Kohli",
     from: "RCB",
     price: "5.50 Cr",
     isPlaying: true,
     description: "Batsman",
     image:"https://static.iplt20.com/players/284/164.png"
   }
  ]
 },
 {
    id : 7,
    fullName: 'Rajasthan Royals',
    key: 'RR',
    championshipsWon: 1,
    bestBat:'Ben Stokes',
    bestBowl:'Jofra Archer',
    teamIcon: './images/rr.jpg',
    message:'We have won the first IPL',
    players: [{
      id: 70,
     playerName: "Sanju Samson",
     from: "RR",
     price: "1.38 Cr",
     isPlaying: true,
     description: "Wicketkeeper Batsman",
     image:"https://static.iplt20.com/players/284/258.png"
   }
  ]
 },
 {
    id : 8,
    fullName: 'Sunrisers Hyderabad',
    key: 'SRH',
    championshipsWon: 1,
    bestBat:'David Warner',
    bestBowl:'Rashid Khan',
    teamIcon: './images/srh.jpg',
    message:'Kane Williamson and David Warner will comeback',
    players: [{
     id: 80,
     playerName: "Kane Williamson",
     from: "SRH",
     price: "13.8 Cr",
     isPlaying: true,
     description: "Batsman",
     image:"https://static.iplt20.com/players/284/440.png"
   }
  ]
 }
 ]

 console.log(teamInfo)

 var importCheck = JSON.parse(localStorage.getItem('data'))

 if(!importCheck){
  localStorage.setItem('data', JSON.stringify(teamInfo))
 } else {
   console.log('nn')
 }
