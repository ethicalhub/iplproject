var localData0 = JSON.parse(localStorage.getItem('data'))
var sessionData = JSON.parse(sessionStorage.getItem('check'))
var profileCard = document.getElementById('profile-card')


for(let i =0; i<localData0.length; i++){
    for(let j=0; j<localData0[i].players.length; j++ ){
        if(localData0[i].players[j].playerName.toLowerCase() == sessionData.player.toLowerCase()){
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
     pDetails.className = 'players-details'

     pName = document.createElement('h3')
     pName.innerText = localData0[i].players[j].playerName

     pRole = document.createElement('p')
     pRole.innerHTML =  `Role <span> ${localData0[i].players[j].description}</span>`

     pTeam = document.createElement('p')
     pTeam.innerHTML = `Team  <span> ${localData0[i].players[j].from} </span>
      `
     pPrice = document.createElement('p')
     pPrice.innerHTML = `Price <span> ${localData0[i].players[j].price} </span>`

     pStatus = document.createElement('p')
     pStatus.innerHTML = `Playing Status <span> ${localData0[i].players[j].description} </span>`

     pDetails.appendChild(pName)
     pDetails.appendChild(pRole)
     pDetails.appendChild(pTeam)
     pDetails.appendChild(pTeam)
     pDetails.appendChild(pPrice)
     pDetails.appendChild(pStatus)

     profileCard.appendChild(pDiv)
     profileCard.appendChild(pDetails)
}
