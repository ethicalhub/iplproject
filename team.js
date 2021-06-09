console.log('Team Page Loaded')

var newData = JSON.parse(localStorage.getItem('data'))

console.log(newData)
var goal = sessionStorage.getItem('check')
console.log(goal)

var mainCard = document.getElementById('main-card')
var imageFDiv = document.getElementById('card-front')
var imageBDiv = document.getElementById('card-back')

function TeamDetails(){
    for(let i=0; i<newData.length; i++){
        if(newData[i].fullName === goal){
            ren1(i)
        }
    }
}
TeamDetails()



function ren1(i){
    document.getElementById('team-image').src = newData[i].teamIcon
    document.getElementById('team-image').alt = newData[i].fullName
    document.getElementById('team-title').innerText = newData[i].fullName
    document.getElementById('player-count').innerText = newData[i].players.length
    document.getElementById('best-batsman').innerText = newData[i].bestBat
    document.getElementById('best-bowler').innerText = newData[i].bestBowl
    document.getElementById('champion-count').innerText = newData[i].championshipsWon
    document.getElementById('alertBtn').onclick = function(){alert(newData[i].message)}


    var playersCardSection = document.getElementById('players-card-section1')

    for(let x =0; x<newData[i].players.length; x++){
        var link2 = document.createElement('a')
        link2.href='./players.html'
       
        var mainSection = document.createElement('div')
        mainSection.className = 'card' 
        mainSection.onclick = function(){
            sessionStorage.setItem('check' , newData[i].players[x].playerName)
        }
        
        var mainCard = document.createElement('div')
        mainCard.className ='card-inner'

        var imageFDiv = document.createElement('div')
        imageFDiv.className = 'card-front'

        var pImg = document.createElement('img')
        pImg.src = newData[i].players[x].image
        pImg.alt = newData[i].players[x].playerName
        imageFDiv.appendChild(pImg)

        var imageBDiv = document.createElement('div')
        imageBDiv.className = 'card-back'

        var pName = document.createElement('h4')
        pName.innerText = newData[i].players[x].playerName

        var pDesc = document.createElement('p')
        pDesc.innerText = newData[i].players[x].description

        var pTeam = document.createElement('p')
        pTeam.innerText = newData[i].players[x].from

        var pPrice = document.createElement('p')
        pPrice.innerText = newData[i].players[x].price

        var pStatus = document.createElement('p')
        pStatus.innerText = newData[i].players[x].isPlaying

        imageBDiv.appendChild(pName)
        imageBDiv.appendChild(pDesc)
        imageBDiv.appendChild( pTeam)
        imageBDiv.appendChild(pPrice)
        imageBDiv.appendChild(pStatus)

        mainCard.appendChild(imageFDiv)
        mainCard.appendChild(imageBDiv)
        link2.appendChild(mainCard)
        mainSection.appendChild(link2)
        playersCardSection.appendChild(mainSection)
    }  
}


