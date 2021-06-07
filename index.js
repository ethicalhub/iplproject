console.log('Server Connected')

var a =''
document.getElementById('chennai').onclick = function(){
   a='chennai'
   sessionStorage.setItem("check", JSON.stringify({tema: a}));
}

document.getElementById('delhi').onclick = function(){
    a='delhi'
    sessionStorage.setItem("check", JSON.stringify({tema: a}));
}

document.getElementById('kolkata').onclick = function(){
    a='kolkata'
    sessionStorage.setItem("check",JSON.stringify({tema: a}));
}

document.getElementById('punjab').onclick = function(){
    a='punjab'
    sessionStorage.setItem("check", JSON.stringify({tema: a}));
}

document.getElementById('mumbai').onclick = function(){
    a='mumbai'
    sessionStorage.setItem("check", JSON.stringify({tema: a}));
}

document.getElementById('bangalore').onclick = function(){
    a='bangalore'
    sessionStorage.setItem("check", JSON.stringify({tema: a}));
}

document.getElementById('rajhasthan').onclick = function(){
    a='rajhasthan'
    sessionStorage.setItem("check", JSON.stringify({tema: a}));
}

document.getElementById('hyderabad').onclick = function(){
    a='hyderabad'
    sessionStorage.setItem("check", JSON.stringify({tema: a}));
}

