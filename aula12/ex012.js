var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora<=5) {
    console.log('Bom madrugada!')
} else if (hora>=12 && hora<18) {
    console.log('Boa tarde!')
} else if (hora>=18) {
    console.log('Boa noite!')
} else if (hora<12 && hora>5) {
    console.log('Boa dia!')
}
