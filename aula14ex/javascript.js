
function clicar() {

    var inicio = Number(document.getElementById('iinicio').value)
    var fim = Number(document.getElementById('ifim').value)
    var passo = Number(document.getElementById('ipasso').value)
    var txt = document.getElementsByTagName('p')[0]
    var res = document.getElementById('contagem')

    if (passo>Math.abs(fim) && passo>Math.abs(inicio)) {
        window.alert("Passo invalido! Considerando Passo: 1")
        var passo = 1
    }

    if (passo<=0) {
        window.alert("Passo invalido!")
        return
    }

    if (passo > Math.abs(inicio - fim) || inicio == fim) {
        window.alert("Impossivel contar")
        return
    }

    res.innerHTML = ''
    txt.innerHTML = 'Processando contagem'
      
    if (inicio < fim) {
    txt.innerHTML = 'Contando: <br>'
    for (var i = inicio; i + passo< fim; i+= passo) {
        res.innerHTML += `${i} &#x1F449`
    }

    res.innerHTML += `${i} &#x1F3C1`
    res.style.display = 'block'
    } else if (fim < inicio){
        txt.innerHTML = 'Contando: <br>'
        for (var i = inicio; fim < i - passo; i-= passo) {
            res.innerHTML += `${i} &#x1F449`
        }
    
        res.innerHTML += `${i} &#x1F3C1`
        res.style.display = 'block'
    }
}