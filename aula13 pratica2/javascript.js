function verificar() {
    var txtnasc = document.getElementById('inasc')
    var nasc = Number(txtnasc.value)
    var sexM = document.getElementById('sexM')
    var sexF = document.getElementById('sexF')
    var main = document.getElementById('main')
    var container = document.getElementsByClassName('container')[0]
    var msg = document.getElementsByTagName('span')[1]
    var imagem = document.getElementsByClassName('imagem')[0]
    var ano = new Date()
    var anoatual = ano.getFullYear()
    var idade = anoatual-nasc
    window.onload = function() {
        document.getElementById('sexM').checked = false;
        document.getElementById('sexF').checked = false;
    }


    if (nasc>anoatual || nasc<1900) {
        window.alert('ANO INVALIDO!')
    } else {  
        if (!sexM.checked && !sexF.checked) {
            window.alert("Por favor, selecione um sexo.");
        } else {        
            container.style.display = 'flex'
            if (sexM.checked) {
                msg.innerHTML = `Detectamos homem com ${idade} anos.`
            } else {
                msg.innerHTML = `Detectamos mulher com ${idade} anos`
            }

            //sexo masculino

            if (idade<12 && sexM.checked) {
                imagem.style.backgroundImage = "url('media/criancahomem.jpg')"
            } else if (idade>=12 && idade<20 && sexM.checked) {
                imagem.style.backgroundImage = "url('media/homemadolescente.jpg')"
            } else if (idade>=20 && idade<60 && sexM.checked) {
                imagem.style.backgroundImage = "url('media/homemadulto.jpg')"
            } else if (idade>=60 && sexM.checked) {
                imagem.style.backgroundImage = "url('media/homemidoso.jpg')"
            }

            //sexo feminino

            if (idade<12 && sexF.checked) {
                imagem.style.backgroundImage = "url('media/criancamulher.jpg')"
            } else if (idade>=12 && idade<20 && sexF.checked) {
                imagem.style.backgroundImage = "url('media/garotaadolescente.jpg')"
            } else if (idade>=20 && idade<60 && sexF.checked) {
                imagem.style.backgroundImage = "url('media/mulheradulta.jpg')"
            } else if (idade>=60 && sexF.checked) {
                imagem.style.backgroundImage = "url('media/mulheridosa.jpg')"
            }
        }
    }
}



