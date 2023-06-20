function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.getElementById('resultado')
    //document.querySelector('div#resultado')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verificar os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = " "
        //criar a imagem com a tag img
        var img = document.createElement('img')
        // msm que escrever no html
        //<img id = 'foto'> 
        img.setAttribute('id','foto')
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '50%'
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade<10){
                //criança
                img.setAttribute('src', 'foto.CH.jpg')
            }else if (idade < 21 ) {
                //jovem 
                img.setAttribute('src', 'foto.JH.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto.AH.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto.VH.jpg')
            }
                
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade<10){
                //criança
                img.setAttribute('src', 'foto.CM.jpg')
            }else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'foto.JM.jpg') 
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto.AM.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto.vM.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 

        //add elemento
        res.appendChild(img)
    }
}