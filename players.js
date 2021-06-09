console.log('Players Connected')
var localData0 = JSON.parse(localStorage.getItem('data'))
console.log(localData0)
var sessionData = sessionStorage.getItem('check')

console.log(localData0, sessionData)

var profileCard = document.getElementById('profile-card')


for(let i =0; i<localData0.length; i++){
    for(let j=i; j<localData0[i].players.length; j++ ){

        if(localData0[i].players[j].playerName == sessionData){
            createPlayerCard(i,j)
        }
    }
}


function createPlayerCard(i,j){
     pDiv = document.createElement('div')
     pDiv.class = 'logo-title'
     pImg = document.createElement('img')
     pImg.src= localData0[i].players[j].image
     pDiv.appendChild(pImg)

     pDetails = document.createElement('div')
     pDetails.class = 'players-details'
     pName = document.createElement('h3')
     pName.innerText = localData0[i].players[j].playerName
     pRole = document.createElement('p')
     pRole.innerHtml = `Role <span> ${localData0[i].players[j].description} </span>`
     pTeam = document.createElement('p')
     pTeam.innerHtml = `Team  <span> ${localData0[i].players[j].description} </span> `
     pPrice = document.createElement('p')
     pPrice.innerHtml = `Price <span> ${localData0[i].players[j].description} </span>`
     pStatus = document.createElement('p')
     pStatus.innerHtml = `Playing Status <span> ${localData0[i].players[j].description} </span>`

     pDetails.appendChild(pName)
     pDetails.appendChild(pRole)
     pDetails.appendChild(pTeam)
     pDetails.appendChild(pTeam)
     pDetails.appendChild(pPrice)
     pDetails.appendChild(pStatus)
}

// createPlayerCard()