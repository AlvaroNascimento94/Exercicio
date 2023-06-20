function calcular() {
    var nume = window.document.getElementById('tabuada')
    var res = document.getElementById('res')


    if (nume.value.length == 0) {
        window.alert('Digite um valor')
    }else{
        var n = Number(nume.value)
        var c = 1
        //p limpar a tabela
        res.innerHTML = ""
        //como tou usando o select, tenho q criar elemento... create elemente
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            //add um elemento filho
            res.appendChild(item)
            c++
        }
    }
}