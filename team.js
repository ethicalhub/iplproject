console.log('Team Page Loaded')

var fun = localStorage.getItem('data')
var newData = JSON.parse(fun)
console.log(newData)
var goal = JSON.parse(sessionStorage.getItem('check'))
var mainCard = document.getElementById('main-card')
var imageFDiv = document.getElementById('card-front')
var imageBDiv = document.getElementById('card-back')

switch(goal.tema){
    case "chennai":
     ren1(0)
    break;

    case "delhi":
     ren1(1)
     
    break;

    case "kolkata":
     ren1(2)
    break;

    case "punjab":
     ren1(3)
    break;

    case "mumbai":
     ren1(4)
    break;

    case "bangalore":
     ren1(5)
    break;

    case "rajhasthan":
     ren1(6)
    break;

    case "hyderabad":
     ren1(7)
    break;

    default:
        console.log('hi')
    break;

}

{/* <img id='team-image' />
            <h3 id='team-title'> </h3> */}

function ren1(i){
    // console.log(newData[i].teamIcon)

    // var tImg = document.createElement('img')
    // tImg.src = newData[i].teamIcon
    // tImg.alt = newData[i].fullName


    // var tTitle = document.createElement('h1')
    // tTitle=
    document.getElementById('team-image').src = newData[i].teamIcon
    document.getElementById('team-image').alt = newData[i].fullName
    document.getElementById('team-title').innerText = newData[i].fullName
    document.getElementById('player-count').innerText = newData[i].players.length
    document.getElementById('best-batsman').innerText = newData[i].bestBat
    document.getElementById('best-bowler').innerText = newData[i].bestBowl
    document.getElementById('champion-count').innerText = newData[i].championshipsWon
    document.getElementById('alertBtn').onclick = function(){alert(newData[i].message)}
    renderPlayer(i)
}


function renderPlayer(d){
    var playersCardSection = document.getElementById('players-card-section1')
   
    for(let x =0; x<newData[d].players.length; x++){
        var link2 = document.createElement('a')
        link2.href='./players.html'
        
        link2.onclick = function(){
         
            var ono= JSON.parse(sessionStorage.getItem('check'))
            console.log(ono)
            // window.location = "./players.html"
        }
        var mainSection = document.createElement('div')
        mainSection.className = 'card' 
        
        var mainCard = document.createElement('div')
        mainCard.className ='card-inner'

        

        var imageFDiv = document.createElement('div')
        imageFDiv.className = 'card-front'

        var pImg = document.createElement('img')
        pImg.src = newData[d].players[x].image
        pImg.alt = newData[d].players[x].playerName
        imageFDiv.appendChild(pImg)


        var imageBDiv = document.createElement('div')
        imageBDiv.className = 'card-back'

        var pName = document.createElement('h4')
        pName.innerText = newData[d].players[x].playerName

        var pDesc = document.createElement('p')
        pDesc.innerText = newData[d].players[x].description

        var pTeam = document.createElement('p')
        pTeam.innerText = newData[d].players[x].from

        var pPrice = document.createElement('p')
        pPrice.innerText = newData[d].players[x].price

        var pStatus = document.createElement('p')
        pStatus.innerText = newData[d].players[x].isPlaying

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

