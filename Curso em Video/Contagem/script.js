function calcular() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] Faltam dados!')
        res.innerHTML = "Impossivel contar "
    } else {
        //esse res abaixo serve p limpar tbm o q ja foi escrito
        res.innerHTML = "Contando: <br>"
        //tenho que converter para numeros 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! considerando passo 1')
            p = 1
        }
        if (i > f) {//contagem crescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
            res.innerHTML += ` \u{1f3c1} `
        } else {//contagem decrescente 
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
            res.innerHTML += ` \u{1f3c1} `
        }
    }
}



