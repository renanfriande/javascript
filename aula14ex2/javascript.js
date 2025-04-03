function clicar () {
    var num = Number(document.getElementById('inum').value)
    var res = document.getElementById("result")

    res.innerHTML = ''

    for (var i = 1; i<=10; i++) {
        var resnum = num*i
        res.innerHTML += `${num} x ${i} = ${resnum} <br>`
    }
}