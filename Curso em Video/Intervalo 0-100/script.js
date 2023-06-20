let num = []
let valor = document.getElementById("txtn")
let res = document.getElementById("res")

function newFunction() {
    return Number(valor.value)
}

function adicionar() {
    let v = newFunction()
    if (valor.value.length == 0) {
        window.alert("Digite um número")

    }
    else if (num.indexOf(v) != -1 || v< 1 || v > 100) {
        window.alert("Valor inválido ou ja adicionado na lista")

    } else {
        num.push(v)
        let item = document.createElement('option')
        item.text = `O elemento ${valor.value} foi adicionado`
        res.appendChild(item)
        txt.innerHTML = ''

    }
    valor.value = ''
    valor.focus()

}
function finalizar() {
    if (num.length == 0) {
        window.alert('Adicione um numero')
    } else {
        let txt = document.getElementById("txt")
        let sum = 0
        let menor = num[0]
        let maior = num [0]
        for (let pos in num){
            sum += num[pos]
            if (num[pos] > maior){
                maior = num[pos]
            }
            if (num[pos] < menor) {
                menor = num[pos]
            }
        }
    
        txt.innerHTML = `Ao todo, temos ${num.length} elementos <br>`
        txt.innerHTML += `O maior elemento é ${maior}<br>`
        txt.innerHTML += `O menor elemento é ${menor}<br>`
        txt.innerHTML += `A soma é ${sum}<br>`
        txt.innerHTML += `A média dos elementos é ${sum / num.length}`
    }

}