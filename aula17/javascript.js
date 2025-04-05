let valores = []

function adicionar() {
    let txtnum = document.getElementById('inum')
    let num = Number(txtnum.value)
    let res = document.getElementById('result')
    let res2 = document.getElementById('result2')
    
    res2.innerHTML = ''
   
    for(let i = 0; i < valores.length; i++) {
            if (num == valores[i]) {
                window.alert('Numero ja foi digitado anteriormente')
                txtnum.value = ''
                txtnum.focus()
                return
            }
        }
    if (num>100 || num<1 || isNaN(num)) {
        window.alert('Numero invalido!')
        txtnum.value = ''
        txtnum.focus()
        return
    } else {
        res.innerHTML += `Valor ${num} adicionado. <br>`
        valores.push(num)
    } 
    
    txtnum.value = ''
    txtnum.focus()
}

function finalizar() {
    let res = document.getElementById('result')
    let res2 = document.getElementById('result2')
    let soma = 0
    let maior = valores[0]
    let menor = valores[0]

    if(valores.length === 0) {
        window.alert('Adicione valores antes de finalizar!')
        return
    }
    
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
        if (maior<valores[i]) {
            maior = valores[i]
        }
        if (menor>valores[i]) {
            menor = valores[i]
        }
    }

    let media = soma/valores.length

    res.innerHTML = ''
    res2.innerHTML = `Ao todos, temos ${valores.length} numeros cadastrados <br>`
    res2.innerHTML += `O maior valor informado foi: ${maior}<br>`
    res2.innerHTML += `O menor valor informado foi: ${menor}<br>`
    res2.innerHTML += `A soma dos valores e: ${soma} <br>`
    res2.innerHTML += `A media dos valores digitados e: ${media}<br>`

    valores.length = 0
}