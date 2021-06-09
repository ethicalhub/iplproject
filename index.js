console.log('Server Connected')

var localData = JSON.parse(localStorage.getItem('data'))
var cardSection = document.getElementById('card-section')

function createTeamCard(){
    for(let i =0; i<localData.length; i++){
        var hLink = document.createElement('a') 
        var hDiv = document.createElement('div')
        var hH5 = document.createElement('h5') 
        hLink.href='./team.html'
        hDiv.classList = 'card'
        hDiv.style=`background: linear-gradient(135deg, rgba(0,0,0,0.2), rgba(255, 0, 204, 0.3)),url(${localData[i].teamIcon}); background-position: center; background-size: cover;`
        hDiv.onclick= function(){
            sessionStorage.setItem('check' , JSON.stringify({team: localData[i].fullName , player: ''}))
        }
        hH5.innerText=localData[i].fullName
        hLink.appendChild(hDiv)
        hDiv.appendChild(hH5)
        cardSection.appendChild(hLink)
    }
}

createTeamCard()