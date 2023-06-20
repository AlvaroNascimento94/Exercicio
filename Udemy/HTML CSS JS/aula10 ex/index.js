function meuEscopo() {
    //const form = document.("form")
    const form = document.querySelector('.form'); // . para class, # para id
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    /* form.onsubmit = function (evento){
        evento.preventDefaut();
    }; */
    function recebeEvento(event) {
        event.preventDefault();
        //como ja entrei no formulario, uso o form
        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobreNome: sobreNome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value,
        });
        
        console.log(pessoas)
        
        resultado.innerHTML += `<p>${nome.value} ${sobreNome.value} ${idade.value} ${peso.value} ${altura.value} </p>`
    }
    //cria um evento e recebe uma função
    form.addEventListener('submit', recebeEvento);
};
meuEscopo();