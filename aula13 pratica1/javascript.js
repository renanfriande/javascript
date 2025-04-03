var agora = new Date()
var hora = agora.getHours()

var txthora = document.getElementById('hora')
txthora.innerHTML = `Agora sao ${hora} horas.`

var back = document.getElementsByClassName('imagem')[0]
var backbody = document.getElementById('body')
if (hora<12) {
    back.style.backgroundImage = "url('media/manha.jpg')"
    backbody.style.backgroundColor = '#559FA8'
} else if (hora>=12 && hora<18) {
    back.style.backgroundImage = "url('media/tarde.jpg')"
    backbody.style.backgroundColor = '#CC681E'
} else if (hora>=18) {
    back.style.backgroundImage = "url('media/noite.jpg')"
    backbody.style.backgroundColor = '#244568'
}