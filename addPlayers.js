console.log('Add Form')

document.getElementById('submit').onclick = function (){
        var playerNameNew = document.getElementById('playerNameNew').value.toLowerCase() 
        var imageNew = document.getElementById('imageNew').value.toLowerCase()
        var descriptionNew = document.getElementById('descriptionNew').value.toLowerCase()
        var fromNew = document.getElementById('fromNew').value
        var priceNew = document.getElementById('priceNew').value.toLowerCase() 
        var isPlayingNew = document.getElementById('isPlayingNew').value.toLowerCase() 


    var update= data =  {
        id: 110,
        playerName: playerNameNew,
        from: fromNew,
        price: priceNew,
        isPlaying: isPlayingNew,
        description: descriptionNew,
        image:imageNew
      }
   var mu = JSON.parse(localStorage.getItem('data'))
   console.log(mu)

   for(let i = 0; i<mu.length; i++){
       if(mu[i].key === fromNew){
           mu[i].players.push(data)
       }
   }

   localStorage.setItem('data', JSON.stringify(mu))

}







