function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}:${data.getMinutes()} horas`
    if (hora >=0 && hora <12){
        //bom dia
        //carregar a imagem uso o src
        img.src = 'fotomanha.png'
        //alterar o plano de fundo da imagem
        document.body.style.backgroundColor ='#d3b06c'
    }else if (hora >=12 && hora <18) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.backgroundColor ='#bb815b'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#264f7a'
    }
}